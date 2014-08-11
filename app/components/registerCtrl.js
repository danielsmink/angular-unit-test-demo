/**
 * Created by dsmink on 8/11/14.
 */

angular.module('RegisterModule', ["UsernameModule"])
  .controller('RegisterCtrl', function(usernameAvailable, $scope) {
    $scope.submit = function(data) {
      //send data to the API...
      usernameAvailable(data.username);
    };
  });