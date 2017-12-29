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
  var service = this;
}

})();
