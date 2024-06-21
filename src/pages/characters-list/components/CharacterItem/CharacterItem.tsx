import { Link } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton';
import styles from './styles.module.css';
import { Character } from '@/types/character';
import { useState } from 'react';

export default function CharacterItem({
  character,
  isFavorite,
}: {
  character: Character;
  isFavorite: boolean;
}) {
  const [favoriteButtonIsHovered, setFavoriteButtonIsHovered] = useState(false);

  return (
    <div>
      <Link to={'character-details'}>
        <div
          className={`${styles['character']} ${favoriteButtonIsHovered ? styles['hovered'] : ''}`}
        >
          <img className={styles['image']} src={character.thumbnail} alt={character.name} />
          <div className={styles['info']}>
            <div className={styles['name']}>{character.name}</div>
            <div className={styles['fav']}>{}</div>
          </div>
        </div>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        character={character}
        onHover={setFavoriteButtonIsHovered}
      />
    </div>
  );
}
