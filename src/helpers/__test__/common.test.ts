import {
  capitalizeFirstLetter,
  cutOffFirstLetter,
  getErrors,
  getSearchParam,
  prepareSearchQueryObject,
} from '../common';

describe('common unit testing', () => {
  test('capitalizeFirstLetter', () => {
    expect(capitalizeFirstLetter('test')).toEqual('Test');
  });

  test('cutOffFirstLetter', () => {
    expect(cutOffFirstLetter('ttest')).toEqual('test');
  });

  test('getErrors', () => {
    expect(getErrors(['"title"is not allowed to be empty'])).toEqual({
      title: 'is not allowed to be empty',
    });
  });

  test('getSearchParam', () => {
    expect(getSearchParam('?key1=value1&key2=value2', 'key2')).toEqual('value2');
  });

  test('prepareSearchQueryObject', () => {
    expect(
      prepareSearchQueryObject({
        query: '?key1=value1',
        params: [
          { key: 'key2', value: 'value2' },
          { key: 'key3', value: 'value3' },
        ],
      })
    ).toEqual('key1=value1&key2=value2&key3=value3');
  });
});
