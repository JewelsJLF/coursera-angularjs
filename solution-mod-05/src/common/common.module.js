(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://sheltered-wave-57910.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
