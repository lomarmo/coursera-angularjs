(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryInfo'];
function ItemsController(categoryInfo) {
  let items = this;

  items.list = categoryInfo.menu_items;
  items.category = categoryInfo.category;

}

})();
