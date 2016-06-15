angular
  .module('happit')
    .controller('UserCtrl', UserCtrl)

UserCtrl.$inject = []

function UserCtrl() {
  var ctrl = this;

  this.service = UserServices;


}
