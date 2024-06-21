import { useQuery } from '@tanstack/react-query';
import getDetailedCharacter from '../services/getDetailedCharacter';

export const USE_DETAILED_CHARACTER_KEY = 'detailedCharacter';

export default function useDetailedCharacter({ id }: { id: string }) {
  const {
    data: detailedCharacter,
    isLoading: isLoadingDetailedCharacter,
    error: errorDetailedCharacter,
  } = useQuery({
    queryKey: [USE_DETAILED_CHARACTER_KEY, id],
    queryFn: () => getDetailedCharacter(id),
  });

  return {
    detailedCharacter,
    isLoadingDetailedCharacter,
    errorDetailedCharacter,
  };
}
