import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter hook', () => {
  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decrement the count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
