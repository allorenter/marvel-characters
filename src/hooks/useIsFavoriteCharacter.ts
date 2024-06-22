import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { useContext } from 'react';

export default function useIsFavoriteCharacter() {
  const [favorites] = useContext(FavoritesCharactersContext);

  return (id: number) => {
    return favorites.findIndex((fav) => fav.id === id) !== -1;
  };
}
