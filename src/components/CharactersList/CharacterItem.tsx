import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Character } from '@/types/character';
import { useState } from 'react';
import { FavoriteButton } from '@/components/FavoriteButton';
import useDeviceDetection from '@/hooks/useDeviceDetection';

export default function CharacterItem({
  character,
  isFavorite,
}: {
  character: Character;
  isFavorite: boolean;
}) {
  const device = useDeviceDetection();
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    if (device === 'Desktop') setHovered(true);
  };

  const onMouseLeave = () => {
    if (device === 'Desktop') setHovered(false);
  };

  const to = `/character-details/${character.id}`;

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={to}>
        <div className={`${styles.character} ${hovered ? styles.hovered : ''}`}>
          <img className={styles.image} src={character.thumbnail} alt={'Character image'} />
          <div className={styles.info}>
            <div className={styles.name}>{character.name}</div>
          </div>
        </div>
      </Link>
      <FavoriteButton isFavorite={isFavorite} character={character} hovered={hovered} />
    </div>
  );
}
