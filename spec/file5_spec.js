function avg(nums) {
  var out = 0.0;
  for (var i = 0; i < nums.length; i++) {
    out += nums[i];
  }
  return out / nums.length;
}

describe('file 5', function () {
  it('should calculate avg correctly', function () {
    var result = avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toEqual(5.5);
  });
});