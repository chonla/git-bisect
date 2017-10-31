function reverse(t) {
  return t.split('').reverse().join('');
}

describe('file 7', function () {
  it('should reverse string correctly', function () {
    var result = reverse('a quick brown fox jump over a lazy dog.');
    expect(result).toEqual('.god yzal a revo pmuj xof nworb kciuq a');
  });
});