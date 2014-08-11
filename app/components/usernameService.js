/**
 * Created by dsmink on 8/11/14.
 */

angular.module('UsernameModule', [])
  .factory('usernameAvailable', function($http) {
    return function(username) {
      return $http.get('/api/username-available/' + username);
    }
  });