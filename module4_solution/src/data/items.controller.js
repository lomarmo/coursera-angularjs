(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemsList'];
function ItemsController(itemsList) {
  let items = this;

  items.list = itemsList;

}

})();
