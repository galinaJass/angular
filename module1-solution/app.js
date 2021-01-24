(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope, $filter, $injector){


    console.log($injector.annotate(LunchCheckController));
  };


})();
