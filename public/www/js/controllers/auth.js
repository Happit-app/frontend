angular
  .module('happit')
    .controller('AuthCtrl', AuthCtrl)

AuthCtrl.$inject = []

function AuthCtrl() {
  var ctrl = this;

  this.service = AuthServices;


}
