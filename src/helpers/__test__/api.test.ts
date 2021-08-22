import { doFetch } from '../api';

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve('test data'),
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any;

describe('api unit testing', () => {
  test('doFetch', () => {
    doFetch({}).then((data) => {
      expect(data).toBe('test data');
    });
  });
});
