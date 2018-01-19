//SignupController
(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService']
function SignupController(MenuService, SignupService) {
  let signupCtrl = this;
  let dishNotFound = false;
  let saved = false;

  signupCtrl.user = {};

  signupCtrl.saved = function () {
    return saved;
  }

  signupCtrl.dishNotFound = function () {
    return dishNotFound;
  };

  signupCtrl.saveUserInfo = function() {
      let promise = MenuService.getMenuItem(signupCtrl.favoriteDish);

      promise.then(function (response) {
          signupCtrl.user.favoriteDish = response;
          saved = true;
          dishNotFound = false;
          SignupService.saveUserInfo(signupCtrl.user);
        }).catch(function (error) {
          saved = false;
          dishNotFound = true;
        });
  }

}

})();
