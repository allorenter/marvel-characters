import { useEffect } from 'react';
import styles from './styles.module.css';

function Modal({
  headerText,
  children,
  onClose,
}: {
  headerText: string;
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles['modalContainer']}>
      <div className={styles['modal']}>
        <div className={styles['modalHeader']}>
          {headerText}
          <button className={styles['modalCloseButton']} onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
