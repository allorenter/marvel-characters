import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import useFavoriteCharacters from '@/hooks/useFavoriteCharacters';
import { useContext, useEffect } from 'react';
import { ApiRequestStateHandler } from '../ApiRequestStateHandler';
import { Spinner } from '../Spinner';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function FavoritesLength() {
  const { favoriteCharacters, isLoadingFavoriteCharacters, errorFavoriteCharacters } =
    useFavoriteCharacters();
  const [favorites, setFavorites] = useContext(FavoritesCharactersContext);

  useEffect(() => {
    if (favoriteCharacters) {
      setFavorites(favoriteCharacters);
    }
  }, [favoriteCharacters, setFavorites]);

  return (
    <ApiRequestStateHandler
      isLoading={isLoadingFavoriteCharacters}
      error={errorFavoriteCharacters}
      onIsLoadingRender={() => <Spinner width={20} height={20} />}
    >
      <Link to={'/favorites'} aria-label='Number of favorites' className={styles.link}>
        <svg
          width='24'
          height='22'
          viewBox='0 0 24 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className={styles.heart}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 3.63869L6 -0.00292969L0 3.63869V11.4422L12 21.6734L24 11.4422V3.63869L18 -0.00292969L12 3.63869Z'
          />
        </svg>
        {favorites.length}
      </Link>
    </ApiRequestStateHandler>
  );
}
