(function(){
    angular
    .module("happit")
    .factory("AuthServices", AuthServices);

    AuthServices.$inject = ['$http'];

    function AuthServices($http) {

        var auth_rte = 'hapit-app.herokuapp.com/auth/login';

        function fb_exc(endpoint, token) {
          return $http.get( endpoint, { params: { access_token: token, format: "json" }});
        }

        function login(user) {
          return $http.get( auth_rte, { params: { login: user.data }});
        }

        return {
          fb_exc,
          login
        }
    };
})();
