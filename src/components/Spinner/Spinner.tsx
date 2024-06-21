import styles from './styles.module.css';

export default function Spinner({ width, height }: { width?: number; height?: number }) {
  return (
    <div>
      <span style={{ width, height }} className={styles['spinner']}></span>
    </div>
  );
}
