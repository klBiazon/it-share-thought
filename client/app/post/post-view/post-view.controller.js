'use strict';
(function(){

  class PostViewComponent {
    constructor($state, API) {
      this.post = [];
      this.API = API;
      this.$state = $state;
      this.success = false;
      this.message = '';
    }

    $onInit() {
      this.post = [];
      this.API.get(`posts/` + this.$state.params.id, ``, (function(res, err) {
        if (!err) {
          this.post = res;
        } else {
          console.log(err);
        }
      }).bind(this));
    }

    editPost(post) {
      this.success = false;
      this.API.update(`posts/` + post._id, ``, (function(res, err) {
        if (!err) {
          console.log(res);
          this.success = true;
          this.message = "You've successfully edited your post.";
        } else {
          this.message = "Your post is not updated.";
          console.log(err);
        }
      }).bind(this), post);
    }
  }

  angular.module('itShareThoughtApp')
  .component('postView', {
    templateUrl: 'app/post/post-view/post-view.html',
    controller: PostViewComponent
  });

})();
