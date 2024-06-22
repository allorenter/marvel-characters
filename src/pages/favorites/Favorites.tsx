import { Layout } from '@/components/Layout';
import styles from './styles.module.css';

import { CharactersList } from '@/components/CharactersList';
import { InputSearch } from '@/components/InputSearch';
import useFavoritesSearch from './hooks/useFavoritesSearch';

export default function Favorites() {
  const { searchQuery, setSearchQuery, favorites } = useFavoritesSearch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const charactersWithIsFavorite = favorites.map((character) => ({
    ...character,
    isFavorite: true,
  }));

  return (
    <Layout>
      <div className={`${styles['routeContainer']} animatedRoute`}>
        <h1>Favorites</h1>
        <InputSearch value={searchQuery} onChange={onChange} />
        <CharactersList charactersWithIsFavorite={charactersWithIsFavorite} />
      </div>
    </Layout>
  );
}
