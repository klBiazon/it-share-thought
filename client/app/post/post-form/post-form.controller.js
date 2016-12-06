'use strict';
(function(){

  class PostFormComponent {
    constructor() {
      this.message = 'Hello';
      this.post = {};
      this.preview = '';
    }

    savePost(post) {
      console.log(post);
      console.log()
    }

    construct(post) {
      console.log(post);
      this.preview = '<h1>' + post.title + '</h1><br>' +
                      '<p class="preview">' + post.content + '</p>';
    }
  }

  angular.module('itShareThoughtApp')
    .component('postForm', {
      templateUrl: 'app/post/post-form/post-form.html',
      controller: PostFormComponent
    });

})();
