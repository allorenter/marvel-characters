import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const module = await import('@/pages/characters-list');
      return { Component: module.CharactersList };
    },
  },
  {
    path: '/character-details',
    async lazy() {
      const Component = await import('@/pages/character-details');
      return { Component: Component.default };
    },
  },
  {
    path: '/favorites',
    async lazy() {
      const Component = await import('@/pages/favorites-list');
      return { Component: Component.default };
    },
  },
]);

export default router;
