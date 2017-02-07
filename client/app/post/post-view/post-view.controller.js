'use strict';
(function() {

  class PostViewComponent {
    constructor($state, API) {
      this.post = {};
      this.API = API;
      this.$state = $state;
      this.success = false;
      this.message = '';
    }

    $onInit() {
      this.post = [];
      this.API.get(`posts`, this.$state.params.id)
        .then(res => this.post = res[0])
        .catch(err => console.log(err));
    }

    editPost(post) {
      this.success = false;
      this.API.update(`posts/`, post._id, post)
        .then(() => {
          this.success = true;
          this.message = `You've successfully edited your post.`;
        })
        .catch(err => console.log(err));
    }
  }

  angular.module('itShareThoughtApp')
  .component('postView', {
    templateUrl: 'app/post/post-view/post-view.html',
    controller: PostViewComponent
  });

})();
