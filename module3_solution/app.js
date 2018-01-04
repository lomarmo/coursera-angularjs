(function () {
'use strict';

angular.module("NarrowItDownApp", [])

.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItems)
.constant("MenuServiceBasePath", "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  let menu = this;

  menu.searchTerm = "";
  menu.message = "";
  menu.found = [];

  menu.showMatchedMenuItems = function () {
    let promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    menu.message = "";

    promise.then(function (response) {
      menu.found = response;
      if (menu.found.length === 0) {
        menu.message = "Nothing Found!";
      }
    })
    .catch(function (error) {
      menu.message =  "There was a problem while fetching the menu items: " + error;
      menu.found = [];
    })
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  }

}

MenuSearchService.$inject = ['$http', 'MenuServiceBasePath'];
function MenuSearchService($http, MenuServiceBasePath) {

  let service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    let serviceEndPoint = MenuServiceBasePath + "/menu_items.json";
    searchTerm = searchTerm.toLowerCase();

    return $http({
      method: "GET",
      url: serviceEndPoint
    }).then(function (result) {
      let foundItems = [];

      if (searchTerm !== ""){
        for(let i=0; i < result.data.menu_items.length; i++){
          let item = result.data.menu_items[i];
          if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item);
          }
        }
      }

      return foundItems;
    })
  }

}

function FoundItems() {
  let ddo = {
    restrict: "E",
    templateUrl: "foundItems.html",
    scope: {
      foundItems: "<",
      onRemove: "&"
    },
    transclude: true,
    controllerAs: "menu",
    bindToCotroller: true
  };

  return ddo;
}

})();
