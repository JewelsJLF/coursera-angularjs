(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.constant('menuUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'templates/found-items.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return ddo;
}
function FoundItemsDirectiveController() {
  // nothing to do here?
}
MenuSearchService.$inject = ['$http', 'menuUrl'];
function MenuSearchService($http, menuUrl) {
  var svc = this;
  svc.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: menuUrl
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items.filter(function(item){
          return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        // return processed items
        return foundItems;
    }).catch(function (err) {
      console.log(err);
    });
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = '';
  ctrl.found = [];
  ctrl.nothingFound = false;

  ctrl.getMatchedMenuItems = function () {
    ctrl.found = [];
    ctrl.nothingFound = false;
    if (ctrl.searchTerm) {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(result){
        ctrl.found = result;
        if (ctrl.found.length === 0) ctrl.nothingFound = true;
      }).catch(function (err) {
        console.log(err);
      });
    }
    else ctrl.nothingFound = true;
  };

  ctrl.removeItem = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  };
}

})();
