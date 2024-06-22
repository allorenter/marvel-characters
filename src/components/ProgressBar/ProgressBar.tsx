import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function ProgressBar() {
  const initialCompleted = 0;
  const maxCompleted = 99;
  const [completed, setCompleted] = useState(initialCompleted);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => {
        if (prev >= maxCompleted) {
          clearInterval(interval);
          return maxCompleted;
        }

        const increment = (maxCompleted - prev) * 0.4;
        return prev + increment;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [maxCompleted]);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${completed}%` }} />
    </div>
  );
}
