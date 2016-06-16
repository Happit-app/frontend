(function() {
  'use strict';

  angular
    .module("happit")
    .factory("HabitsServices", HabitsServices);

function HabitsServices($http) {
    const api = 'http://localhost:3000';

    return {
      completeTask: function(habit_id, date) {
        return $http.post(api + '/habits/' + habit_id + '/success', {date: date}).then( (data)=> {
          return data;
        });
      },
      undoTask: function(habit_id, date) {
        return $http.delete(api + '/habits/' + habit_id + '/success/' + date.toISOString()).then( (data) => {
          return data;
        });
      },
      editHabit: function(habit, time) {
        return $http.put(api + '/habits/:id/update', habit).then( (data)=> {
          return data;
        });
      },
      addHabit: function(habit) {
        return $http.post(api + '/habits', habit).then( (data) => {
           return data;
        });
      },
      getHabit: function(id) {
        return $http.get(api + '/habits/' + id).then(function(data) {
          if (data.data.dates) {
            data.data.dates = data.data.dates.map(function(date) {
              var newDate = date.substr(0, 10).split('-');
              return new Date(newDate[0], newDate[1] - 1, newDate[2]);
            });
          }
          return data.data;
        });
      },
      getAllHabits: function(user_id) {
        return $http.get(api + '/users/' + user_id + '/habits').then(function(data) {
          data.data.map(function(habit) {
            if (habit.dates) {
              habit.dates = habit.dates.map(function(date) {
                var newDate = date.substr(0, 10).split('-');
                return new Date(newDate[0], newDate[1] - 1, newDate[2]);
              });
            }
          })
          return data.data;
        });
      },
      deleteHabit: function(id) {
        return $http.delete(api + '/habits/' + id + '/delete').then( (data) => {
          return data;
        });
      }
    };
  };
})();
