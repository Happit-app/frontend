(function() {
  'use strict';

  angular
    .module("happit")
    .factory("HabitsServices", HabitsServices);

  HabitsServices.$inject = ['$q', '$http'];

  function HabitsServices($q, $http) {

    const api = 'http://localhost:3000/';

    return {
      completeTask: function(completion) {
        return $http.post(api + '/habits/success', completion).then( (data)=> {
          return data;
        });
      },
      undoTask: function(id) {
        return $http.delete(api + '/habits/success/:id').then( (data) => {
          return data;
        });
      },
      editHabit: function(habit, time) {
        return $http.put(api + 'habits/', habit).then( (data)=> {
          return data;
        }
      },
      addHabit: function(habit) {
        return $http.post(api + 'habits', habit).then( (data) => {
           return data;
        });
      }
    };
  };
})();
