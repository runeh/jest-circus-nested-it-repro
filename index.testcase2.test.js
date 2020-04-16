const { getTruthy } = require('./index');

describe('in describe', () => {
  test('outer test', () => {
    expect(getTruthy()).toBeTruthy();

    test('inner test', () => {
      expect(getTruthy()).toBeTruthy();
    });
  });
});
