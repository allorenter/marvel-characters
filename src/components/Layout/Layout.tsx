import { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { FavoritesLength } from '../FavoritesLength';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to={'/'}>
                <img src='/logo.svg' alt='Marvel' />
              </Link>
            </li>
            <li>
              <FavoritesLength />
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
