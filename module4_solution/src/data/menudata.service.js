(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('WebServiceBasePath', 'https://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['WebServiceBasePath', '$http'];
function MenuDataService(WebServiceBasePath, $http) {
  let menuDataService = this;

  menuDataService.getAllCategories = function () {
    let serviceEndPoint = WebServiceBasePath + '/categories.json';

    return $http({
      method: 'GET',
      url: serviceEndPoint
    }).then(function (result) {
      return result.data;
    });

  };

  menuDataService.getItemsForCategory = function (categoryShortName) {
    let serviceEndPoint = WebServiceBasePath + '/menu_items.json';

    return $http({
      method: 'GET',
      url: serviceEndPoint,
      params: {
        category: categoryShortName
      }
    }).then(function (result) {
      return result.data;
    });

  };

}

})();
