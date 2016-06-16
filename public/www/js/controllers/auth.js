angular
  .module('happit')
    .controller('AuthCtrl', AuthCtrl)

AuthCtrl.$inject = ['$cordovaOauth', '$http', 'AuthServices']

function AuthCtrl($cordovaOauth, $http, AuthServices) {

  var ctrl = this;
  var fb = { id: '',
             api: 'https://graph.facebook.com/v2.5/me?fields=name,email' };

  ctrl.fbLogin = function() {
    $cordovaOauth
      .facebook(fb.id, ['email','public_profile'], { 'auth_type': 'rerequest' })
      .then(function(result) {
          AuthServices.fb_exc(fb.api, result.access_token)
          .then(function(profile){
            // AuthServices.login(profile);
            console.log(profile);
          })
        }, function(error) {
          console.log(JSON.stringify(error));
        });
  }

  this.service = AuthServices;
}
