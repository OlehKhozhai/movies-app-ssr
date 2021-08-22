import { renderHook } from '@testing-library/react-hooks';

import useClickOutside from '../useClickOutside';

describe('useClickOutside hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() =>
      useClickOutside({
        ref: { current: { target: {} } } as unknown as React.RefObject<HTMLElement>,
      })
    );

    expect(result.current).toEqual([false]);
  });
});
