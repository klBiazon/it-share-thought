'use strict';

angular.module('itShareThoughtApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('post-form', {
        url: '/post-form',
        template: '<post-form></post-form>',
        authenticate: 'admin'
      });
  });
