(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // Call to server to get menu categories
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: ApiBasePath + '/categories.json'
    }).then(function(response){
      return response.data;
    }).catch(function(err){
      console.log(err);
    });
  };

  // Call to server to get menu items for specific category
  // Returns a promise, NOT items array directly
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json',
      params: {
        category: categoryShortName
      }
    }).then(function(response){
      return response.data.menu_items;
    }).catch(function(err){
      console.log(err);
    });
  };
}

})();
