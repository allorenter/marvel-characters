import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import useFavoriteCharacters from '@/hooks/useFavoriteCharacters';
import { useContext, useEffect } from 'react';
import { ApiRequestStateHandler } from '../ApiRequestStateHandler';
import { Spinner } from '../Spinner';

export default function FavoritesLength() {
  const { favoriteCharacters, isLoadingFavoriteCharacters, errorFavoriteCharacters } =
    useFavoriteCharacters();
  const [favorites, setFavorites] = useContext(FavoritesCharactersContext);

  useEffect(() => {
    if (favoriteCharacters) {
      setFavorites(favoriteCharacters);
    }
  }, [favoriteCharacters]);

  return (
    <ApiRequestStateHandler
      isLoading={isLoadingFavoriteCharacters}
      error={errorFavoriteCharacters}
      onIsLoadingRender={() => <Spinner width={20} height={20} />}
    >
      <button>{favorites.length}</button>
    </ApiRequestStateHandler>
  );
}
