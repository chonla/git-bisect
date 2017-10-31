function cap(t) {
  var tokens = t.split(' ');
  var out = [];
  for (var i = 0; i < tokens.length; i++) {
    out.push(tokens[i][0].toUpperCase() + tokens[i].substr(1));
  }
  return out.join(' ');
}

describe('file 6', function () {
  it('should capitalize string correctly', function () {
    var result = cap('a quick brown fox jump over a lazy dog.');
    expect(result).toEqual('A Quick Brown Fox Jump Over A Lazy Dog.');
  });
})