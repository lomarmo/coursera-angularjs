(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])

.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);


ToBuyController.$inject = ["ShoppingListCheckOffService"];
AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

function ToBuyController (ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.isEmpty = function () {
    return toBuyList.items.length === 0;
  }

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

function AlreadyBoughtController (ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  alreadyBoughtList.isEmpty = function functionName() {
    return alreadyBoughtList.items.length === 0;
  }
}

function ShoppingListCheckOffService () {
  let service = this;

  let toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "orange juice", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "coffee", quantity: 2 },
    { name: "soda", quantity: 7 },
    { name: "sugar", quantity: 3 }
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
