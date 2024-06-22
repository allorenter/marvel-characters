import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Layout } from '../../components/Layout';
import useCharacters from './hooks/useCharacters';
import styles from './styles.module.css';
import { InputSearch } from '../../components/InputSearch';
import { useContext } from 'react';
import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';
import { CharactersList } from '@/components/CharactersList';

export default function Characters() {
  const { searchQuery, setSearchQuery, characters, isLoadingCharacters, errorCharacters } =
    useCharacters();
  const [favorites] = useContext(FavoritesCharactersContext);

  const isFavorite = (id: number) => {
    return favorites.findIndex((fav) => fav.id === id) !== -1;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const charactersWithIsFavorite = Array.isArray(characters)
    ? characters.map((character) => ({ ...character, isFavorite: isFavorite(character.id) }))
    : [];

  return (
    <Layout>
      <div className={styles['routeContainer']}>
        <InputSearch value={searchQuery} onChange={onChange} />
        <ApiRequestStateHandler isLoading={isLoadingCharacters} error={errorCharacters}>
          {Array.isArray(charactersWithIsFavorite) ? (
            <CharactersList charactersWithIsFavorite={charactersWithIsFavorite} />
          ) : (
            <></>
          )}
        </ApiRequestStateHandler>
      </div>
    </Layout>
  );
}
