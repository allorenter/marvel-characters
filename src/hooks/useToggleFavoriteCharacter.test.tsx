import { describe, test, expect } from 'vitest';
import { waitFor, renderHook } from '@testing-library/react';
import useToggleFavoriteCharacter from './useToggleFavoriteCharacter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LOCALSTORAGE_FAVORITES_CHARACTERS_KEY } from '@/constants';
import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { useEffect, useState } from 'react';
import { FavoriteCharacter } from '@/types/favorite-character';

const queryClient = new QueryClient();

const Wrapper = ({ children, setFavorites }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    if (typeof setFavorites === 'function') setFavorites(favoritesList);
  }, [favoritesList, setFavorites]);

  return (
    <FavoritesCharactersContext.Provider value={[favoritesList, setFavoritesList]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </FavoritesCharactersContext.Provider>
  );
};

describe('Movie tests', () => {
  test('should set and unset favorite in localStorage', async () => {
    const {
      result: {
        current: { mutate },
      },
    } = renderHook(() => useToggleFavoriteCharacter(), { wrapper: Wrapper });

    const character = {
      id: 1111,
      name: 'Character name',
      thumbnail: 'thumbnail',
    };

    mutate({
      character,
      isFavorite: false,
    });

    await waitFor(() => {
      const result: FavoriteCharacter[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_FAVORITES_CHARACTERS_KEY) || '[]',
      );
      const found = result.find((ch) => {
        return ch.id === character.id;
      });
      expect(found.id).toBe(character.id);
    });

    mutate({
      character,
      isFavorite: true,
    });

    await waitFor(() => {
      const result: FavoriteCharacter[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_FAVORITES_CHARACTERS_KEY) || '[]',
      );
      const found = result.find((ch) => {
        return ch.id === character.id;
      });
      expect(found).toBeUndefined();
    });
  });

  test('should set and unset favorite in context', async () => {
    let favorites = [];
    const {
      result: {
        current: { mutate },
      },
    } = renderHook(() => useToggleFavoriteCharacter(), {
      wrapper: ({ children }) => (
        <Wrapper children={children} setFavorites={(favs) => (favorites = favs)} />
      ),
    });

    const character = {
      id: 1111,
      name: 'Character name',
      thumbnail: 'thumbnail',
    };

    mutate({
      character,
      isFavorite: false,
    });

    await waitFor(() => {
      const found = favorites.find((ch) => {
        return ch.id === character.id;
      });
      expect(found.id).toBe(character.id);
    });

    mutate({
      character,
      isFavorite: true,
    });

    await waitFor(() => {
      const found = favorites.find((ch) => {
        return ch.id === character.id;
      });
      expect(found).toBeUndefined();
    });
  });
});
