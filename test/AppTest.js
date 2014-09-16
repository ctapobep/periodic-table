describe('PlainTableCtrl', function () {
  beforeEach(module('periodictable'));
  it('plain periodic table is created', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('PlainTableCtrl', {$scope: scope});

    expect(scope.table.length).toBe(8);
  }));
});