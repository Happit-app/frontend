(function() {
  'use strict';

  angular
    .module("happit")
    .factory("HabitsServices", HabitsServices);

  function HabitsServices($http) {
    const api = 'https://hapit-app.herokuapp.com/';

    return {
      completeTask: function(completion) {
        return $http.post(api + '/habits/success', completion).then( (data)=> {
          return data;
        });
      },
      undoTask: function(id) {
        return $http.delete(api + '/habits/success/' + id).then( (data) => {
          return data;
        });
      },
      editHabit: function(habit, time) {
        return $http.put(api + 'habits/:id/update', habit).then( (data)=> {
          return data;
        });
      },
      addHabit: function(habit) {
        return $http.post(api + 'habits', habit).then( (data) => {
           return data;
        });
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
      },
      deleteHabit: function(id) {
        $http.delete(api + 'habits/' + id + '/delete').then( (data) => {
          return data;
        });
      }
    };
  };
})();
