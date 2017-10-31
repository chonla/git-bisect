describe('file 3', function () {
  it('should fail as expected', function() {
    expect(false).toEqual(false);
  });

  it('should be consider as false', function() {
    expect(0).toBeFalsy();
  });
})