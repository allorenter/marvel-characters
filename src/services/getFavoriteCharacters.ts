import { LOCALSTORAGE_FAVORITES_CHARACTERS_KEY } from '@/constants';
import { FavoriteCharacter } from '@/pages/characters-list';

export default async function getFavoriteCharacters(): Promise<FavoriteCharacter[]> {
  return new Promise((resolve) => {
    return resolve(JSON.parse(localStorage.getItem(LOCALSTORAGE_FAVORITES_CHARACTERS_KEY) || '[]'));
  });
}
