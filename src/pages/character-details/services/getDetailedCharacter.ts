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
  const [characterResponse, comicsResponse] = await Promise.all([
    fetch(urlCharacter, { method: 'GET' }),
    fetch(urlComics, { method: 'GET' }),
  ]);
  const [characterData, comicsData] = await Promise.all([
    characterResponse.json(),
    comicsResponse.json(),
  ]);
  return createAdaptedDetailedCharacter(characterData, comicsData);
}
