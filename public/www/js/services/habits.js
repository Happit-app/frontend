angular
  .module("happit")
  .factory("HabitsServices", HabitsServices)

HabitsServices.$inject = ['$http']

function HabitsServices($http) {
  var api = 'https://hapit-app.herokuapp.com/';

  return {
    completeTask: function(id) {

    },
    incompleteTask: function(id) {

    },
    getHabit: function(id) {
      return $http.get(api + 'habits/' + id).then(function(data) {
        if (data.data.dates) {
          data.data.dates = data.data.dates.map(function(date) {
            return new Date(date);
          });
        }
        return data.data;
      });
    },
    getAllHabits: function(user_id) {
      return $http.get(api + 'users/' + user_id + '/habits').then(function(data) {
        return data.data;
      });
    }
  }
};
