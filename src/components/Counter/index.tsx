import { FC, memo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import styles from './counter.module.css';

const Counter: FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={increment}>
        +
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default memo(Counter);
