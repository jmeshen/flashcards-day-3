angular.module('flashCards')
  .controller('NewCardController', function($scope, Card, $rootScope) {
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
    console.log("this is Card factory", Card);
    // console.log(newCard)
    Card.createNewCard(newCard).then(function(response) {
      console.log('this is response', response);


      // console.log("this is $scope.newCard", $scope);

        $scope.newCard.question = null;
        $scope.newCard.category = null;
        $scope.newCard.answers = [];
        // $scope.$digest();
        $rootScope.$broadcast('newCard', response);
        // $scope.flashCards.push(response);
    })


  }
})