import { LOCALSTORAGE_FAVORITES_CHARACTERS_KEY } from '@/constants';
import { FavoriteCharacter } from '../types/favorite-character';
import getFavoriteCharacters from '@/services/getFavoriteCharacters';
import { Character } from '@/types/character';

function setLocalStorageFavoritesCharacters(favoritesCharacters: FavoriteCharacter[]) {
  localStorage.setItem(LOCALSTORAGE_FAVORITES_CHARACTERS_KEY, JSON.stringify(favoritesCharacters));
  return favoritesCharacters;
}

export default async function toggleFavoriteCharacter(isFavorite: boolean, character: Character) {
  const favoritesCharacters = await getFavoriteCharacters();
  return new Promise((resolve, reject) => {
    try {
      if (!isFavorite && character.id) {
        setLocalStorageFavoritesCharacters([
          ...favoritesCharacters,
          { ...character, createTime: new Date() },
        ]);
        return resolve(true);
      }

      if (isFavorite && character.id) {
        const newCharacters = favoritesCharacters.filter((ch) => {
          return character.id !== ch.id;
        });
        setLocalStorageFavoritesCharacters(newCharacters);
        return resolve(true);
      }

      return resolve(false);
    } catch (e: unknown) {
      return reject(e);
    }
  });
}
