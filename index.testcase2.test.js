const { getTruthy } = require('./index');

describe('in describe', () => {
  it('outer test', () => {
    expect(getTruthy()).toBeTruthy();

    it('inner test', () => {
      expect(getTruthy()).toBeTruthy();
    });
  });
});
