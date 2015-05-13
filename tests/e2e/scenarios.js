'use strict';
describe('start page', function() {
  browser.get('/');
  it('should connect to homeview page' , function(){
    expect(browser.getLocationAbsUrl()).toBe("/");
  });
});