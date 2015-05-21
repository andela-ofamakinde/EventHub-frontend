"use strict";

  describe("App Module:", function() {

    var module;
    beforeEach(function() {
      module = angular.module("EventApp");
    });

    it("should be registered", function() {
      expect(module).not.toBe(null);
    });
  });