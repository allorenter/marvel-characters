import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { Favorites } from '@/pages/favorites';
import { Characters } from '@/pages/characters';

const queryClient = new QueryClient();

const Wrapper = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesCharactersContext.Provider value={[favoritesList, setFavoritesList]}>
        <MemoryRouter initialEntries={['']}>
          <Routes>
            <Route path={'/favorites'} element={<Favorites />} />
            <Route path={''} element={<Characters />} />
          </Routes>
        </MemoryRouter>
      </FavoritesCharactersContext.Provider>
    </QueryClientProvider>
  );
};

describe('Favorites length', () => {
  test('click number of favorites goes to favorites', async () => {
    render(<Wrapper />);

    const element = await waitFor(() => screen.getAllByLabelText('Number of favorites'));
    fireEvent.click(element[0]);

    const favorites = await waitFor(() => screen.getByText('Favorites'));

    expect(favorites).toBeDefined();
  });

  test('show the number of favorites', async () => {
    render(<Wrapper />);

    const element = await waitFor(() => screen.getAllByLabelText('Number of favorites'));
    const textContent = element[0].textContent;
    -expect(textContent).toBe('0');
  });
});
