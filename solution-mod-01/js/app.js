(function () {
'use strict';

angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchItems = '';
  $scope.message = '';
  $scope.checkIfTooMuch = function(){
    if ($scope.lunchItems){
      var numItems = $scope.lunchItems.split(',').length;
      console.log(numItems);
      if (numItems > 3) $scope.message = 'Too much!';
      else if (numItems > 0) $scope.message = 'Enjoy!';
    }
    else $scope.message = "Please enter data first.";
  };

}

})();
