(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
  var svc = this;
  var list = [
    {
      name: 'cookies',
      quantity: 10
    },
    {
      name: 'chips',
      quantity: '2 bags'
    },
    {
      name: 'beers',
      quantity: 12
    },
    {
      name: 'wine',
      quantity: '2 bottles'
    },
    {
      name: 'sugar',
      quantity: '1 bag'
    },
  ];
  var pantry = [];

  svc.addItem = function (itemName, itemQty) {
    var item = {
      name: itemName,
      quantity: itemQty
    };
    list.push(item);
  };

  svc.buyItem = function (itemIdx) {
    var item = list[itemIdx];
    list.splice(itemIdx, 1);
    pantry.push(item);
  };

  svc.getList = function () {
    return list;
  };

  svc.getPantry = function () {
    return pantry;
  };
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.itemName = "";
  list.itemQty = ""

  list.addItem = function () {
    ShoppingListCheckOffService.addItem(list.itemName, list.itemQty);
  };

  list.buyItem = function (itemIdx) {
    ShoppingListCheckOffService.buyItem(itemIdx);
  };

  list.getItems = function() {
    return ShoppingListCheckOffService.getList();
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var pantry = this;

  pantry.getItems = function() {
    return ShoppingListCheckOffService.getPantry();
  };
}

})();
