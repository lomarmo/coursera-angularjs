(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
let service = this;

service.saveUserInfo = function (user) {
  service.user = user;
}

service.getUserInfo = function () {
  return service.user;
}

}

})();
