import { FavoriteButton } from '@/components/FavoriteButton';
import { DetailedCharacter } from '../../types/detailed-character';
import styles from './styles.module.css';
import useIsFavoriteCharacter from '@/hooks/useIsFavoriteCharacter';

export default function Details({ detailedCharacter }: { detailedCharacter: DetailedCharacter }) {
  const isFavorite = useIsFavoriteCharacter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={detailedCharacter.thumbnail} alt={detailedCharacter.name} />
        <div className={styles.info}>
          <div className={styles.nameContainer}>
            <h1>{detailedCharacter.name}</h1>
            <FavoriteButton
              character={detailedCharacter}
              hovered={false}
              isFavorite={isFavorite(detailedCharacter.id)}
              className={styles.favoriteButton}
            />
          </div>
          <p className={styles.description}>{detailedCharacter.description}</p>
        </div>
      </div>
    </div>
  );
}
