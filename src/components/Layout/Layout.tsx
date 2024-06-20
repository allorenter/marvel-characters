import { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import { useNavigation } from 'react-router-dom';
import { Spinner } from '../Spinner';

export default function Layout({ children }: PropsWithChildren) {
  const navigation = useNavigation();

  return (
    <div>
      <header className={styles['header']}>
        <nav>
          <ul className={styles['nav-ul']}>
            <li className={styles['nav-li']}>
              <img src='logo.svg' alt='Marvel' />
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles['main']}>
        {navigation.state === 'loading' ? (
          <div className={styles['navigationSpinner']}>
            <Spinner />
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
