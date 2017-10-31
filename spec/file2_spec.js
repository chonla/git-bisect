describe('file 2', function () {
  it('should be fine', function() {
    expect(true).toEqual(true);
  });

  it('should be considered as true', function() {
    expect(1).toBeTruthy();
  });
})