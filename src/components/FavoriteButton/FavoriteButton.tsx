import { Character } from '@/types/character';
import useToggleFavoriteCharacter from '@/hooks/useToggleFavoriteCharacter';
import styles from './styles.module.css';
import HeartIcon from './HeartIcon';

export default function FavoriteButton({
  isFavorite,
  character,
  hovered,
  className,
}: {
  isFavorite: boolean;
  character: Character;
  hovered: boolean;
  className?: string;
}) {
  const { mutate } = useToggleFavoriteCharacter();

  const onClick = () => {
    mutate({ isFavorite, character });
  };

  const ariaLabel = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <div className={`${styles['favoriteButtonContainer']} ${className || ''}`}>
      <button onClick={onClick} className={styles['favoriteButton']} aria-label={ariaLabel}>
        <HeartIcon isFavorite={isFavorite} hovered={hovered} />
      </button>
    </div>
  );
}
