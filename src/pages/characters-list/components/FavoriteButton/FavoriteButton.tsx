import { Character } from '@/types/character';
import useToggleFavoriteCharacter from '../../../../hooks/useToggleFavoriteCharacter';
import styles from './styles.module.css';

export default function FavoriteButton({
  isFavorite,
  character,
}: {
  isFavorite: boolean;
  character: Character;
}) {
  const { mutate } = useToggleFavoriteCharacter();

  const onClick = () => {
    mutate({ isFavorite, character });
  };

  return (
    <div className={styles['favoriteButtonContainer']}>
      <button onClick={onClick} className={styles['favoriteButton']}>
        fav
      </button>
    </div>
  );
}
