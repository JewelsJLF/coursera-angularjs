(function() {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  var _user;

  service.saveUser = function (user) {
    if (user) _user = user;
    return _user;
  };

  service.getUser = function () {
    return _user;
  };

}

})();
