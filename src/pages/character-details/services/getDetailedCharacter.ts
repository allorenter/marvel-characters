import { MARVEL_API_BASE_URL, MARVEL_API_PUBLIC_KEY } from '@/constants';
import createAdaptedDetailedCharacter from '../adapters/createAdaptedDetailedCharacter';

export default async function getDetailedCharacter(id: string) {
  const characterReqParams = new URLSearchParams({
    apikey: MARVEL_API_PUBLIC_KEY,
  });
  const comicsReqParams = new URLSearchParams({
    apikey: MARVEL_API_PUBLIC_KEY,
    limit: '20',
  });
  const urlCharacter = `${MARVEL_API_BASE_URL}/characters/${id}?${characterReqParams.toString()}`;
  const urlComics = `${MARVEL_API_BASE_URL}/characters/${id}/comics?${comicsReqParams.toString()}`;

  const [characterResult, comicsResult] = await Promise.allSettled([
    fetch(urlCharacter, { method: 'GET' }),
    fetch(urlComics, { method: 'GET' }),
  ]);

  if (characterResult.status === 'rejected') {
    throw new Error('Failed to fetch character data');
  }

  if (comicsResult.status === 'rejected') {
    throw new Error('Failed to fetch comics data');
  }

  const characterResponse = characterResult.value;
  const comicsResponse = comicsResult.value;

  if (characterResponse.status !== 200 || comicsResponse.status !== 200) {
    throw new Error(characterResponse.status.toString());
  }

  console.log('characterResponse comicsResponse', comicsResponse, characterResponse);

  const [characterData, comicsData] = await Promise.all([
    characterResponse.json(),
    comicsResponse.json(),
  ]);

  return createAdaptedDetailedCharacter(characterData, comicsData);
}
