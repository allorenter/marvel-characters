import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import FavoritesCharactersContext from './contexts/FavoritesCharactersContext';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [favoritesList, setFavoritesList] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesCharactersContext.Provider value={[favoritesList, setFavoritesList]}>
        <RouterProvider router={router} />
      </FavoritesCharactersContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
