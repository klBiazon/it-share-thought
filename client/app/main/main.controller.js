'use strict';

(function() {

  class MainController {

    constructor($http, $scope, API, socket) {
      this.API = API;
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      this.posts = [];
      this.seen = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.posts = [];
      this.API.get(`posts`, ``, (function(res, err) {
        if (!err) {
          this.posts = res;
        } else {
          console.log(err);
        }
      }).bind(this));
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('itShareThoughtApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
