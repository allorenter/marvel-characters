import { Character } from '@/types/character';
import useToggleFavoriteCharacter from '@/hooks/useToggleFavoriteCharacter';
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

  const ariaLabel = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <div className={styles['favoriteButtonContainer']}>
      <button onClick={onClick} className={styles['favoriteButton']} aria-label={ariaLabel}>
        <HeartIcon isFavorite={isFavorite} hovered={hovered} />
      </button>
    </div>
  );
}
