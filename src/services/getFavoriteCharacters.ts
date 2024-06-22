import { LOCALSTORAGE_FAVORITES_CHARACTERS_KEY } from '@/constants';
import { FavoriteCharacter } from '@/types/favorite-character';

export default async function getFavoriteCharacters(): Promise<FavoriteCharacter[]> {
  return new Promise((resolve) => {
    return resolve(JSON.parse(localStorage.getItem(LOCALSTORAGE_FAVORITES_CHARACTERS_KEY) || '[]'));
  });
}
