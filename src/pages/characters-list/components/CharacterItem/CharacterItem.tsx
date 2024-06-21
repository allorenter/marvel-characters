import { Link } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton';
import styles from './styles.module.css';
import { Character } from '@/types/character';

export default function CharacterItem({
  character,
  isFavorite,
}: {
  character: Character;
  isFavorite: boolean;
}) {
  return (
    <div>
      <Link to={'character-details'}>
        <div className={styles['character']}>
          <img className={styles['image']} src={character.thumbnail} alt={character.name} />
          <div className={styles['info']}>
            <div className={styles['name']}>{character.name}</div>
            <div className={styles['fav']}>{}</div>
          </div>
        </div>
      </Link>
      <FavoriteButton isFavorite={isFavorite} character={character} />
    </div>
  );
}
