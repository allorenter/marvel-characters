import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Layout } from '../../components/Layout';
import useCharacters from './hooks/useCharacters';
import styles from './styles.module.css';
import { InputSearch } from '../../components/InputSearch';
import { CharactersList } from '@/components/CharactersList';
import useIsFavoriteCharacter from '@/hooks/useIsFavoriteCharacter';

export default function Characters() {
  const { searchQuery, setSearchQuery, characters, isLoadingCharacters, errorCharacters } =
    useCharacters();
  const isFavorite = useIsFavoriteCharacter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const charactersWithIsFavorite = Array.isArray(characters)
    ? characters.map((character) => ({ ...character, isFavorite: isFavorite(character.id) }))
    : [];

  return (
    <Layout>
      <div className={`${styles['routeContainer']} animatedRoute`}>
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
