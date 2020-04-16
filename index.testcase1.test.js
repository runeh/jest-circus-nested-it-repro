const { getTruthy } = require('./index');

it('outer test', () => {
  expect(getTruthy()).toBeTruthy();

  it('inner test', () => {
    expect(getTruthy()).toEqual('This test should not have run');
  });
});
