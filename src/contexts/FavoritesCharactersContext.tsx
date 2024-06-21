import { FavoriteCharacter } from '@/types/favorite-character';
import { createContext } from 'react';

type SetFavoriteCharacters = React.Dispatch<React.SetStateAction<FavoriteCharacter[]>>;

const FavoritesCharactersContext =
  createContext<[FavoriteCharacter[], SetFavoriteCharacters]>(null);

export default FavoritesCharactersContext;
