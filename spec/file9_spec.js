function max() {
  var args = Array.prototype.slice.call(arguments);
  args.sort(function (a, b) { return a < b; });
  return args[0];
}

describe('file 9', function () {
  it('should return max number correctly', function () {
    var result = max(8, 9, 10, 2, 1, 99, 108, 82);
    expect(result).toEqual(108);
  });
});