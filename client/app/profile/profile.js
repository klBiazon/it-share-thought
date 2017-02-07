'use strict';

angular.module('itShareThoughtApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
      });
  });
