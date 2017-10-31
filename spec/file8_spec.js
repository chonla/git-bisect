function word_count(s) {
  return s.split(/\s+/).length;
}

describe('file 8', function () {
  it('should return word count correctly', function () {
    var result = word_count('a quick brown fox jump over a lazy dog.');
    expect(result).toEqual(9);
  });
});