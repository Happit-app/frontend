(function() {
  'use strict';

  angular.module("oauth.providers", [
    'oauth.google',
    'oauth.facebook',
    'oauth.twitter'])
    .factory("$cordovaOauth", cordovaOauth);

  function cordovaOauth(
    $q, $http, $cordovaOauthUtility, $ngCordovaGoogle, $ngCordovaFacebook,
    $ngCordovaTwitter) {

    return {
      google: $ngCordovaGoogle.signin,
      facebook: $ngCordovaFacebook.signin,
      twitter: $ngCordovaTwitter.signin
    };
  }

  cordovaOauth.$inject = [
    "$q", '$http', "$cordovaOauthUtility",
    '$ngCordovaGoogle',
    '$ngCordovaFacebook',
    '$ngCordovaTwitter'
  ];
})();
