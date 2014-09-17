describe('PlainTableCtrl', function () {
  beforeEach(module('periodictable'));
  it('creates plain periodic table', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.table.length).toBe(8);
  }));
  it('fills electron configuration', inject(function ($controller) {
    var scope = {};
    $controller('PlainTableCtrl', {$scope: scope});
    expect(scope.elements[0].electronConfigurationArray).toEqual([[1]]);
  }));
});