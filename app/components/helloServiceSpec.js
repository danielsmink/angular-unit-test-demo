/**
 * Created by dsmink on 8/11/14.
 */

describe("helloService", function() {
  beforeEach(module('HelloModule'));
  it('should return "hello" when called', function() {
    module(function($provide) {
      $provide.value('uppercaseService', function(value) {
        return value;
      });
    });
    inject(function(helloService) {
      expect(helloService()).toBe("hello");
    });
  });
});