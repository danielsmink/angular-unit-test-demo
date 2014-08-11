/**
 * Created by dsmink on 8/11/14.
 */

angular.module('HelloModule', [])
  .factory('uppercaseService', function() {
    return function() {
      return 'hello';
    }
  })
  .factory('helloService', function(uppercaseService) {
    return function() {
      return uppercaseService('hello');
    }
  });