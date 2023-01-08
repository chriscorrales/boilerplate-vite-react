import { FC, memo } from 'react';

import { useCounter } from '../hooks/useCounter';

const Counter: FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <span>Count is {count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default memo(Counter);
