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
      this.commentBox = '';
      this.comment = '';
      this.commentUpdate = '';
      this.update = '';

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.posts = [];
      this.API.get(`posts`)
        .then(res => angular.copy(res, this.posts))
        .catch(err => console.log(err));
    }

    commentPost(id) {
      if (id === this.commentBox) {
        this.commentBox = '';
      } else {
        this.commentBox = id;
      }
    }

    commentOnPost(comment, id, i) {
      var obj = {
        'id': id,
        'comment': comment,
        'createdAt': new Date(),
        'active': true
      };

      this.API.post(`comments`, ``, obj)
        .then(() => {
          delete obj.id;
          this.posts[i].comments.push(obj);
          this.comment = '';
        })
        .catch(err => console.log(err));
    }

    updateComment(comment, id) {
      if (this.update === id) {
        this.update = '';
        this.commentUpdate = '';
      } else {
        this.update = id;
        this.commentUpdate = comment;
        $(`#updateBox`).focus();
      }
    }

    updateOnComment(comment, commentId, post) {
      var obj = {
        'commentId': commentId,
        'comment': comment
      };

      this.API.update(`comments/`, post._id, obj)
        .then(() => {
          this.update = '';
          this.commentUpdate = '';
          post.comments.comment = comment;
        })
        .catch(err => console.log(err));
    }
  }

  angular.module('itShareThoughtApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
