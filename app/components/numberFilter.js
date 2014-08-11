/**
 * Created by dsmink on 8/11/14.
 */

angular.module('FilterModule', [])
  .filter('even', function() {
    return function(numbers) {
      var items = [];
      angular.forEach(numbers, function(number) {
        number % 2 == 0 && items.push(number);
      });
      return items;
    };
  });