import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export default function Layout({ children }: PropsWithChildren) {
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
      <main className={styles['main']}>{children}</main>
    </div>
  );
}
