angular
  .module('happit')
    .controller('UserCtrl', UserCtrl)

UserCtrl.$inject = ['UserServices']

function UserCtrl(UserServices) {
  var ctrl = this;

  this.service = UserServices;


}
