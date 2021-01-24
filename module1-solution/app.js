(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope, $filter, $injector){

      $scope.validateDishesCount = function(){
        let dishInput = $scope.dishes;

        if(dishInput){
          let dishesActualCount = 0;
          let dishInputArr = dishInput.split(',');
          dishInputArr.forEach((item, i) => {
            if(item.trim().length > 0){
              dishesActualCount++;
            }
          });

          $scope.validationMessage = dishesActualCount < 4 ? 'Enjoy!' : 'Too much!';
        }
        else {
          $scope.validationMessage = "Please enter data first.";
        }
      };
  };

})();
