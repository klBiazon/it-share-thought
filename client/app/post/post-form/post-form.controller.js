'use strict';
(function() {

  class PostFormComponent {
    constructor(API) {
      this.API = API;
      this.message = 'Hello';
      this.post = {
        canComment: true
      };
      this.preview = '';
    }

    savePost(post) {
      this.API.post(`posts`, function(res, err) {
        if (!err) {
          console.log(res);
        } else {
          console.log(err);
        }
      }, post);
    }

    construct(post) {
      var constructPreview = {};
      constructPreview.title = post.title || '[Title here]';
      constructPreview.content = post.content || '[Content of your blog]';
      this.preview = '<h1>' + constructPreview.title + '</h1><hr>' +
                      '<p class="preview">' + constructPreview.content + '</p>';
    }
  }

  angular.module('itShareThoughtApp')
    .component('postForm', {
      templateUrl: 'app/post/post-form/post-form.html',
      controller: PostFormComponent
    });

})();
