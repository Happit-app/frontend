(function() {
  angular
  .module('happit')
  .controller('AuthCtrl', AuthCtrl)

  AuthCtrl.$inject = ['$cordovaOauth', '$http', 'AuthServices', '$location', 'UserServices'];

  function AuthCtrl($cordovaOauth, $http, AuthServices, $location, UserServices) {

    var ctrl = this;
    var fb = { id: '903453959800466' };


    ctrl.fbLogin = function() {
      $cordovaOauth
      .facebook(fb.id, ['email','public_profile'], { 'auth_type': 'rerequest' })
      .then(function(result) {
        AuthServices.fb_exc(result.access_token)
        .then(function(profile){
          console.log(profile);
          UserServices.current(profile.user, profile.token);
          $location.path('/')
        })
        .catch(function() {
          $location.path('/');
        })
      }, function(error) {
        console.log(JSON.stringify(error));
      });
    }

    this.service = AuthServices;
  }
})();
