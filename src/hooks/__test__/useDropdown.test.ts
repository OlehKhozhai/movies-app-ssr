import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import useDropdown from '../useDropdown';

describe('useDropdown hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.value).toEqual('');
    expect(result.current.isDropdownVisible).toEqual(false);
  });

  test('should return value from default value', () => {
    const { result } = renderHook(() => useDropdown({ defaultValue: 'test' }));

    expect(result.current.value).toEqual('test');
    expect(result.current.isDropdownVisible).toEqual(false);
  });

  test('should open the dropdown and click on option', () => {
    const { result } = renderHook(() => useDropdown());

    act(() => {
      result.current.onToggleDropdownVisibility();
    });

    expect(result.current.isDropdownVisible).toEqual(true);

    act(() => {
      result.current.onOptionClick('test');
    });

    expect(result.current.value).toEqual('test');
    expect(result.current.isDropdownVisible).toEqual(false);
  });
});
