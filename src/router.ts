import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    async lazy() {
      const module = await import('@/pages/characters');
      return { Component: module.Characters };
    },
  },
  {
    path: '/character-details/:id',
    async lazy() {
      const Component = await import('@/pages/character-details');
      return { Component: Component.CharactersDetails };
    },
  },
  {
    path: '/favorites',
    async lazy() {
      const Component = await import('@/pages/favorites');
      return { Component: Component.Favorites };
    },
  },
]);

export default router;
