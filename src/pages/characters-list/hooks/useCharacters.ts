import { useQuery } from '@tanstack/react-query';
import getCharacters from '../services/getCharacters';
import { useState } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

export const USE_CHARACTERS_KEY = 'characters';

export default function useCharacters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 400);

  const {
    data: characters,
    isLoading: isLoadingCharacters,
    error: errorCharacters,
  } = useQuery({
    queryKey: [USE_CHARACTERS_KEY, debouncedSearchQuery],
    queryFn: () => getCharacters(debouncedSearchQuery),
  });

  return {
    searchQuery,
    setSearchQuery,
    characters,
    isLoadingCharacters,
    errorCharacters,
  };
}
