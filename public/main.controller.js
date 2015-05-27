app.controller('MainController', function ($scope, Card, Score, $rootScope) {
  $scope.done = false;
  $scope.categories = [
   'MongoDB',
   'Express',
   'Angular',
   'Node'
 ];

  $scope.switchCategory = function(category) {
    $scope.done = false;
    Card.getByCategory(category).then(function(cards) {
      $scope.done = true;
      $scope.flashCards = cards
    })
  }

  $scope.reset = function() {
    $scope.done = false;
    Card.getAll()
      .then(function(cards) {
        $scope.done = true;
        Score.correct = 0
        Score.incorrect = 0
        $scope.flashCards = cards

      })
  }
  $scope.reset()

  $rootScope.$on('newCard', function(event, data) {
    $scope.flashCards.push(data);
  })

});








