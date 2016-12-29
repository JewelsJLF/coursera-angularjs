(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var signupCtrl = this;

  signupCtrl.submit = function(form) {
    // set the submitted value to false
    signupCtrl.submitted = false;
    // get the menu item the user is trying to save
    MenuService.getMenuItem(signupCtrl.user.favDish).then(function(response){
      // if we found the menu item, then it's not invalid
      signupCtrl.invalidMenuItem = false;
      // save the users information
      UserService.saveUser(signupCtrl.user);
      // reset the form
      signupCtrl.user = undefined;
      signupCtrl.submitted = true;
      form.$setPristine();
      form.$setUntouched();
    }).catch(function(err){
      // if we didn't find the menu item, it was invalid or blank
      signupCtrl.invalidMenuItem = true;
    });
  }
}

})();
