'use strict';
(function(){

  class PostListComponent {
    constructor($state, API, Modal) {
      this.API = API;
      this.Modal = Modal;
      this.$state = $state;
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

    deletePost(id, i) {
      this.Modal.confirm.delete((function() {
        this.API.delete(`posts/` + id, ``, (function(res, err) {
          if (!err) {
            this.posts.splice(i, 1);
          } else {
            console.log(err);
          }
        }).bind(this));
      }).bind(this))('this post');
    }
  }

  angular.module('itShareThoughtApp')
  .component('postList', {
    templateUrl: 'app/post/post-list/post-list.html',
    controller: PostListComponent
  });

})();