import { Character } from '@/types/character';
import useToggleFavoriteCharacter from '../../../../hooks/useToggleFavoriteCharacter';
import styles from './styles.module.css';
import HeartIcon from './HeartIcon';

export default function FavoriteButton({
  isFavorite,
  character,
  hovered,
}: {
  isFavorite: boolean;
  character: Character;
  hovered: boolean;
}) {
  const { mutate } = useToggleFavoriteCharacter();

  const onClick = () => {
    mutate({ isFavorite, character });
  };

  return (
    <div className={styles['favoriteButtonContainer']}>
      <button onClick={onClick} className={styles['favoriteButton']}>
        <HeartIcon isFavorite={isFavorite} hovered={hovered} />
      </button>
    </div>
  );
}
