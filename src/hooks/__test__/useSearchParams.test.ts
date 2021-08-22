import { renderHook } from '@testing-library/react-hooks';

import useSearchParams from '../useSearchParams';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({ replace: jest.fn(), location: { search: '' } }),
}));

describe('useSearchParams hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useSearchParams());

    expect(result.current).toEqual('searchBy=genres&search=&sortBy=release+date');
  });
});
