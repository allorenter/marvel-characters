import { Spinner } from '@/components/Spinner';
import styles from './styles.module.css';

export default function DefaultLoading() {
  return (
    <div className={styles.defaultLoading}>
      <Spinner />
    </div>
  );
}
