(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items', '$stateParams'];
function ItemsController(items, $stateParams) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.categoryShortName = $stateParams.categoryShortName;
}

})();
