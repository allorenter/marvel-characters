import getFavoriteCharacters from '@/services/getFavoriteCharacters';
import { useQuery } from '@tanstack/react-query';

export const USE_FAVORITE_CHARACTERS_KEY = 'characters';

export default function useFavoriteCharacters() {
  const {
    data: favoriteCharacters,
    isLoading: isLoadingFavoriteCharacters,
    error: errorFavoriteCharacters,
  } = useQuery({
    queryKey: [USE_FAVORITE_CHARACTERS_KEY],
    queryFn: getFavoriteCharacters,
  });

  return {
    favoriteCharacters,
    isLoadingFavoriteCharacters,
    errorFavoriteCharacters,
  };
}
