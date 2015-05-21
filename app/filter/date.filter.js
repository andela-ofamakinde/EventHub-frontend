angular.module('RelativeDate', []).filter('friendlyDate', function() {
  return function(date) {
    return moment(date).add(1, 'day').calendar();
  };
});