describe('PlainTableCtrl', function () {
  beforeEach(module('periodictable'));
  it('creates plain periodic table', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.table.length).toBe(8);
  }));
  it('fills electron configuration for 1st shell', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.elements[0].electronConfigurationArray).toEqual([[1]]);
    expect(scope.elements[1].electronConfigurationArray).toEqual([[2]]);
  }));
  it('fills electron configuration for 2nd shell', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.elements[2].electronConfigurationArray).toEqual([[2], [1]]);
    expect(scope.elements[2].electronConfigurationArray).toEqual([[2], [1]]);
  }));
  it('fills s of next shell before d of current', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.elements[18].electronConfigurationArray).toEqual([[2], [2, 6], [1]]);
  }));
});