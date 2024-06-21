import { Character } from '@/types/character';
import useToggleFavoriteCharacter from '../../../../hooks/useToggleFavoriteCharacter';
import styles from './styles.module.css';

export default function FavoriteButton({
  isFavorite,
  character,
  onHover,
}: {
  isFavorite: boolean;
  character: Character;
  onHover: (hovered: boolean) => void;
}) {
  const { mutate } = useToggleFavoriteCharacter();

  const onClick = () => {
    mutate({ isFavorite, character });
  };

  return (
    <div className={styles['favoriteButtonContainer']}>
      <button
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={onClick}
        className={styles['favoriteButton']}
      >
        fav
      </button>
    </div>
  );
}
