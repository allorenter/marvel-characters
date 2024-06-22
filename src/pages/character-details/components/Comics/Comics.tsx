import { DetailedCharacter } from '../../types/detailed-character';
import styles from './styles.module.css';

export default function Comics({ comics }: { comics: DetailedCharacter['comics'] }) {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <h2>COMICS</h2>
        <div className={styles['comicsList']}>
          {comics.map(({ id, thumbnail, title, year }) => (
            <div key={id} className={styles['comic']}>
              <img src={thumbnail} alt={'Comic image'} />
              <div className={styles['title']}>{title}</div>
              <div>{year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
