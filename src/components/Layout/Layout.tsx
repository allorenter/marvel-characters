import { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import { useNavigation } from 'react-router-dom';
import { FavoritesLength } from '../FavoritesLength';

export default function Layout({ children }: PropsWithChildren) {
  const navigation = useNavigation();

  return (
    <div>
      <header className={styles['header']}>
        <nav className={styles['nav']}>
          <ul>
            <li>
              <img src='logo.svg' alt='Marvel' />
            </li>
            <li>
              <FavoritesLength />
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles['main']}>{navigation.state === 'loading' ? <></> : children}</main>
    </div>
  );
}
