import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharactersList from '@/pages/characters-list';
import CharactersDetails from '@/pages/character-details';
import FavoritesList from '@/pages/favorites-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersList />,
  },
  {
    path: '/character-details',
    element: <CharactersDetails />,
  },
  {
    path: '/favorites',
    element: <FavoritesList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
