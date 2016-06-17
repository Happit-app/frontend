angular
  .module('happit')
    .controller('AuthCtrl', AuthCtrl)

AuthCtrl.$inject = ['$cordovaOauth', '$http']

function AuthCtrl($cordovaOauth, $http) {

  var ctrl = this;
  var facebook_id = '';
  var fb = 'https://graph.facebook.com/v2.5/me?fields=name,email';
  var tokenXc = function(endpoint, token) {
    $http.get(endpoint, {params: {access_token: token, format: "json" }})
    .then(function(user) {
      console.log(user);
    });
  }

  ctrl.fbLogin = function() {
    $cordovaOauth
      .facebook(facebook_id, ['email','public_profile'], {"auth_type": "rerequest"})
        .then(function(result) {
            tokenXc(fb, result.access_token)
        }, function(error) {
          console.log(JSON.stringify(error));
        });
  }
}
