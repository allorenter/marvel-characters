import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { normalizeString } from '@/utils';
import { useContext, useMemo, useState } from 'react';

export default function useFavoritesSearch() {
  const [favorites] = useContext(FavoritesCharactersContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 400);

  const filtered = useMemo(() => {
    const normalizedSearchQuery = normalizeString(debouncedSearchQuery.toLowerCase());
    return favorites.filter((character) => {
      const normalizedCharacterName = normalizeString(character.name.toLowerCase());
      return normalizedCharacterName.includes(normalizedSearchQuery);
    });
  }, [favorites, debouncedSearchQuery]);

  return {
    favorites: filtered,
    searchQuery,
    setSearchQuery,
  };
}
