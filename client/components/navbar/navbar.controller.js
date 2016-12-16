'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $state) {
    this.$state = $state;
    this.currentState = $state.current.name;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  login() {
    this.currentState = 'login';
    this.$state.go('login');
    // angular.element(document.querySelector('.nav-tabs > li')).removeClass('active');
  }

  logout() {
    this.$state.go('logout');
    angular.element(document.querySelector('#home')).addClass('active');
    this.currentState = 'main';
  }

  navigate(state) {
    this.$state.go(state);
    this.currentState = state;
  }
}

angular.module('itShareThoughtApp')
  .controller('NavbarController', NavbarController);
