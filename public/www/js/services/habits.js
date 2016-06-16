angular
  .module("happit")
  .factory("HabitsServices", HabitsServices)

HabitsServices.$inject = ['$http']

function HabitsServices($http) {
  var api = 'http://localhost:3000/';

  return {
    completeTask: function(id) {

    },
    incompleteTask: function(id) {

    },
    getHabit: function(id) {
      console.log(id);
      return $http.get(api + '/habits/' + id).then(function(data) {
        return data;
      });
    }
  }
};
