angular.module('flashCards')
  .controller('NewCardController', function($scope, Card) {
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
  }

  $scope.sendNewCard = function(newCard) {
    console.log(newCard)
    Card.createNewCard(newCard).then(function(response) {
      console.log(response);
        $scope.newCard.question = null;
        $scope.newCard.category = null;
        $scope.newCard.answers = [];
    })
  }
})