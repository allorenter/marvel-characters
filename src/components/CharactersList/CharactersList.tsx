import { Character } from '@/types/character';
import styles from './styles.module.css';
import CharacterItem from './CharacterItem';

interface CharacterWithIsFavorite extends Character {
  isFavorite: boolean;
}

export default function CharactersList({
  charactersWithIsFavorite,
}: {
  charactersWithIsFavorite: CharacterWithIsFavorite[];
}) {
  const resultsLabel = charactersWithIsFavorite?.length === 1 ? ' RESULT' : ' RESULTS';

  return (
    <div>
      <div>
        {charactersWithIsFavorite.length}
        {resultsLabel}
      </div>
      <div className={styles['container']}>
        {charactersWithIsFavorite.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            isFavorite={character.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
