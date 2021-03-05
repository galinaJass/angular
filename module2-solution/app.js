(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    toBuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.boughtItems = ShoppingListCheckOffService.getboughtItems();
  }

  function ShoppingListCheckOffService(){
      var service = this;

      // List of shopping items
      var toBuyItems = [
        { name: 'Milk', quantity: '2 bags' },
        { name: 'Bread', quantity: '1 loaf' },
        { name: 'Carrots', quantity: '2 lb' },
        { name: 'Banana', quantity: '3 lb' },
        { name: 'Chocolate', quantity: '1 ps' }
      ];

      var boughtItems = [];

      service.removeItem = function (itemIndex) {
        let boughtItem = toBuyItems[itemIndex];
        toBuyItems.splice(itemIndex, 1);
        boughtItems.push(boughtItem);
      };

      service.getToBuyItems = function () {
        return toBuyItems;
      };

      service.getboughtItems = function () {
        return boughtItems;
      };
  }

})();
