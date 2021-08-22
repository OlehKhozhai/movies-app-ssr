import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import useOpenAndClose from '../useOpenAndClose';

describe('useOpenAndClose hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useOpenAndClose());

    expect(result.current.isOpen).toEqual(false);
  });

  test('should return isOpen true after triggering onOpen function', () => {
    const { result } = renderHook(() => useOpenAndClose());

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toEqual(true);
  });

  test('should return isOpen true after triggering onToggle function', () => {
    const { result } = renderHook(() => useOpenAndClose());

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toEqual(true);
  });

  test('should return isOpen false after triggering onClose function', () => {
    const { result } = renderHook(() => useOpenAndClose());

    act(() => {
      result.current.onOpen();
      result.current.onClose();
    });

    expect(result.current.isOpen).toEqual(false);
  });
});
