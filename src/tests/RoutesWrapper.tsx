import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

const queryClient = new QueryClient();

export default function RoutesWrapper({ children }: PropsWithChildren) {
  const [favoritesList, setFavoritesList] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesCharactersContext.Provider value={[favoritesList, setFavoritesList]}>
        {children}
      </FavoritesCharactersContext.Provider>
    </QueryClientProvider>
  );
}
