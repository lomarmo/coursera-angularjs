(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user'];
function UserInfoController(user) {
let userInfoCtrl = this;

userInfoCtrl.user = user;

userInfoCtrl.isUserRegistered = function() {
  return userInfoCtrl.user !== undefined;
}


}

})();
