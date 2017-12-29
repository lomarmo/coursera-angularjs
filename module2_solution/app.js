(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])

.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);


ToBuyController.$inject = ["ShoppingListCheckOffService"];
AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

ToBuyController = function (ShoppingListCheckOffService) {
  var toBuyList = this;

}

AlreadyBoughtController = function (ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

}

ShoppingListCheckOffService = function () {
  let service = this;

  let toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "orange juice", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "coffee", quantity: 2 },
    { name: "soda", quantity: 7 }
  ];

  let boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  }

  service.getBoughtItems = function () {
    return boughtItems;
  }

  service.buyItem = function (itemIndex) {
    let item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  }

}

})();
