(function () {

angular.module("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.listOfDishes = "";

  $scope.displayMessage = function () {
      let numberOfDishes = calculateNumberOfDishesInList($scope.listOfDishes);
      let message = checkIfTooMuch(numberOfDishes);
      $scope.message = message;
  }

  function calculateNumberOfDishesInList(listOfDishes) {
    let arrayOfDishes = listOfDishes.split(",").filter(checkIfValidItem);
    return arrayOfDishes.length;
  }

  function checkIfValidItem(item) {
    return item.trim() != "";
  }

  function checkIfTooMuch(numberOfDishes) {
    if (numberOfDishes == 0) {
      return "Please enter data first";
    } else if (numberOfDishes <= 3) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }
  }

}

})();
