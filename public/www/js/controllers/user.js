angular
  .module('happit')
    .controller('UserCtrl', UserCtrl)

UserCtrl.$inject = ['UserServices', '$window', '$state']

function UserCtrl(UserServices, $window, $state) {
  var ctrl = this;

  this.service = UserServices;

  this.logout = function() {
    $window.localStorage.clear();
    $state.go('login');
  }

}
