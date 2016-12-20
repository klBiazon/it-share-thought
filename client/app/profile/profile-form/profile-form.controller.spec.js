'use strict';

describe('Component: ProfileFormComponent', function () {

  // load the controller's module
  beforeEach(module('itShareThoughtApp'));

  var ProfileFormComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProfileFormComponent = $componentController('ProfileFormComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
