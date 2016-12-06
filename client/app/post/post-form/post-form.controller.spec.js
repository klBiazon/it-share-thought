'use strict';

describe('Component: PostFormComponent', function () {

  // load the controller's module
  beforeEach(module('itShareThoughtApp'));

  var PostFormComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostFormComponent = $componentController('PostFormComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
