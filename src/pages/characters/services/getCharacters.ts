import { MARVEL_API_BASE_URL, MARVEL_API_PUBLIC_KEY } from '@/constants';
import createAdaptedCharacter from '../adapters/createAdaptedCharacters';
import { CharactersAPIResponse } from '@/types/characters-api';

export default async function getCharacters(query?: string) {
  const params = new URLSearchParams({
    apikey: MARVEL_API_PUBLIC_KEY,
    limit: '50',
  });
  if (query.length > 0) {
    params.set('nameStartsWith', query);
  }
  const url = `${MARVEL_API_BASE_URL}/characters?${params.toString()}`;
  const response = await fetch(url, { method: 'GET' });
  const responseData: CharactersAPIResponse = await response.json();
  return createAdaptedCharacter(responseData);
}
