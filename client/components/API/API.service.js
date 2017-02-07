'use strict';

(function() {

  function ApiResource($http) {
    return {
      get: (api, params) => {
        return $http({
          method: 'GET',
          url: 'api/' + api,
          params: params ? params : {}
        }).then(response => response.data);
      },
      post: (api, params, data) => {
        return $http({
          method: 'POST',
          url:'api/' + api,
          params: params ? params : {},
          data: data
        }).then(response => response.data);
      },
      update: (api, params, data) => {
        return $http({
          method: 'PUT',
          url: 'api/' + api + params,
          data: data
        }).then(response => response.data);
      },
      delete: function(api, params, callback) {
        $http({
          method: 'DELETE',
          url: 'api/' + api + params
        }).then(function(response) {
            callback(response, false);
        }, function(error) {
            callback(false, error);
        });
      }
    };
  }
  angular.module('itShareThoughtApp')
    .factory('API', ApiResource);

})();
