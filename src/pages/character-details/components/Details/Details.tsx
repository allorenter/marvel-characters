import { DetailedCharacter } from '../../types/detailed-character';
import styles from './styles.module.css';

export default function Details({ detailedCharacter }: { detailedCharacter: DetailedCharacter }) {
  return (
    <div className={styles['container']}>
      <img src={detailedCharacter.thumbnail} alt={detailedCharacter.name} />
      <div className={styles['info']}>
        <h1>{detailedCharacter.name}</h1>
        <h6>{detailedCharacter.description}</h6>
      </div>
    </div>
  );
}
