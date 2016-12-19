'use strict';

angular.module('itShareThoughtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        template: '<post-list></post-list>',
        authenticate: 'admin'
      });
  });
