import { useMutation } from '@tanstack/react-query';
import { Character } from '../pages/characters-list/types/character';
import toggleFavoriteCharacter from '@/services/toggleFavoriteCharacter';
import { useContext } from 'react';
import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';

export default function useToggleFavoriteCharacter() {
  const [, setFavoriteCharacters] = useContext(FavoritesCharactersContext);
  const mutation = useMutation({
    mutationFn: ({ isFavorite, character }: { isFavorite: boolean; character: Character }) =>
      toggleFavoriteCharacter(isFavorite, character),
    onMutate: ({ character, isFavorite }) => {
      if (!isFavorite) {
        setFavoriteCharacters((prev) => {
          return [...prev, { ...character, createTime: new Date() }];
        });
      }
      if (isFavorite) {
        setFavoriteCharacters((prev) => {
          return prev.filter((ch) => {
            return character.id !== ch.id;
          });
        });
      }
    },
  });

  return mutation;
}
