angular
  .module('happit')
    .controller('AuthCtrl', AuthCtrl)

AuthCtrl.$inject = ['$cordovaOauth']

function AuthCtrl($cordovaOauth) {

  var ctrl = this;
  var google_id = '';
  var url_short = '';
  var google_auth = ``;
  var user = '';
  var user2 = '';
  var facebook_id = '';

  ctrl.googleLogin = function() {
    $cordovaOauth
      .google(google_id, [url_short, google_auth])
        .then(function(result) {
          console.log(JSON.stringify(result));
        }, function(error) {
          console.log(JSON.stringify(error));
        });
  }

  ctrl.fbLogin = function() {
    $cordovaOauth
      .facebook(facebook_id, 'email, public_profile', {"auth_type": "rerequest"})
        .then(function(result) {
          console.log(JSON.stringify(result));
        }, function(error) {
          console.log(JSON.stringify(error));
        });
  }


  this.service = AuthServices;
}
