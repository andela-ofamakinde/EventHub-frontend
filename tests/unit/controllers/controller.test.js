'use strict';

describe('Controllers test', function(){
  var _scope;
  var EventCtrl;
  var UserCtrl;
  beforeEach(module('EventApp'));

  beforeEach(function(){
    inject(function($rootScope, $controller){
      _scope = $rootScope.$new();
      EventCtrl = $controller('EventCtrl', {$scope: _scope});
      UserCtrl = $controller('UserCtrl', {$scope: _scope});
    });
  });

  it('Event Controller should be defined', function(){
    expect(EventCtrl).toBeDefined();
  });

  it('User controller should be defined', function(){
    expect(UserCtrl).toBeDefined();
  });

});