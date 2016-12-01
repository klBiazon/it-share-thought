'use strict';

angular.module('itShareThoughtApp.auth', ['itShareThoughtApp.constants', 'itShareThoughtApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
