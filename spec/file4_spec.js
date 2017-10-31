describe('file 3', function () {
  it('should be false', function() {
    expect(false).toBeFalsy();
  });

  it('should be false when using !!0', function() {
    expect(!!0).toEqual(false);
  });
})