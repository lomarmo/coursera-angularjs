(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesList']
function CategoriesController(categoriesList) {
  let categories = this;

  categories.list = categoriesList;

}

})();
