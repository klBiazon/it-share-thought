'use strict';

angular.module('itShareThoughtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post/{id}',
        template: '<post-view></post-view>',
        authenticate: 'admin'
      });
  });
