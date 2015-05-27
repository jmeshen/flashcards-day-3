app.directive('flashCard', function(Score) {
  return {
    restrict: 'E',
    templateUrl: 'directives/flashcard/flashcard.html',
    scope: {card: '='},
    link: function(scope, element, attrs) {
      scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
          flashCard.answered = true;
          flashCard.answeredCorrectly = answer.correct;
          answer.correct ? Score.correct++ : Score.incorrect++
        }
      }
    }
  };
})


app.directive('flashcardForm', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/flashcard/form.html',
    link: function(scope, element, attrs) {
      // idk
    }
  }
})