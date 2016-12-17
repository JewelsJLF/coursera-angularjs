(function () {
'use strict';

angular.module('App', [])
.controller('Controller', Controller)
.service('Service', Service);

function Service() {
  var svc = this;
  var items;
  svc.getItems = function () {
    return items;
  };
}

Controller.$inject = ['Service'];
function Controller(Service) {
  var ctrl = this;

  ctrl.getItems = function() {
    return Service.getItems();
  };
}

})();
