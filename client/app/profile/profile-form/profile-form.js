'use strict';

angular.module('itShareThoughtApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile-form', {
        url: '/profile-form',
        template: '<profile-form></profile-form>'
      });
  });
