'use strict';

describe('Component: PostListComponent', function () {

  // load the controller's module
  beforeEach(module('itShareThoughtApp'));

  var PostListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostListComponent = $componentController('PostListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
