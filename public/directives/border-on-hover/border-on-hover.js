app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('mouseenter', function() {
        angular.element(this).css({
          border: '2px solid black'
        })
      })
      element.on('mouseleave', function() {
        angular.element(this).css({
          border: '1px solid black'
        })
      })
    }
  }
})