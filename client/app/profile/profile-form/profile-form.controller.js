'use strict';
(function(){

  class ProfileFormComponent {
    constructor() {
      this.message = 'Hello';
    }
  }

  angular.module('itShareThoughtApp')
    .component('profileForm', {
      templateUrl: 'app/profile/profile-form/profile-form.html',
      controller: ProfileFormComponent
    });

})();
