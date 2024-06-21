import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Layout } from '../../components/Layout';
import { CharacterItem } from './components/CharacterItem';
import useCharacters from './hooks/useCharacters';
import styles from './styles.module.css';
import { InputSearch } from './components/InputSearch';
import { useContext } from 'react';
import FavoritesCharactersContext from '@/contexts/FavoritesCharactersContext';

export default function CharactersList() {
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

  const resultsLabel = characters?.length === 1 ? ' RESULT' : ' RESULTS';

  return (
    <Layout>
      <InputSearch value={searchQuery} onChange={onChange} />
      <ApiRequestStateHandler isLoading={isLoadingCharacters} error={errorCharacters}>
        {Array.isArray(characters) ? (
          <>
            <div>
              {characters.length}
              {resultsLabel}
            </div>
            <div className={styles['container']}>
              {characters.map((character) => (
                <CharacterItem
                  key={character.id}
                  character={character}
                  isFavorite={isFavorite(character.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </ApiRequestStateHandler>
    </Layout>
  );
}
