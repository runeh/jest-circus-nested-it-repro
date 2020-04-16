const { getTruthy } = require('./index');

test('outer test', () => {
  expect(getTruthy()).toBeTruthy();

  test('inner test', () => {
    expect(getTruthy()).toEqual('This test should not have run');
  });
});
