angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = ['HabitsServices']

function HabitsCtrl(HabitsServices) {
  var ctrl = this;

  this.service = HabitsServices;
  this.date = new Date();
  this.year = ctrl.date.getFullYear();
  this.month= ctrl.date.getMonth();
  this.day = ctrl.date.getDate();

  this.user_id = 4;

  this.service.getAllHabits(ctrl.user_id).then(function(data) {
    data.map(function(habit) {
      if (habit.dates) {
        for (var i = 0; i < habit.dates.length; i++) {
          if (habit.dates[i].getFullYear() === ctrl.year && habit.dates[i].getMonth() === ctrl.month && habit.dates[i].getDate() === ctrl.day) {
            habit.completed = true;
          }
        }
      }
    });
    ctrl.allHabits = data;
  });

  this.completeTask = function(habit) {
    var habit_id = habit.id;
    var date = ctrl.date;

    if (habit.dates) {
      var habitDates = habit.dates;
    }
    else {
      var habitDates = [];
    }

    habitDates.push(date);
    HabitsServices.completeTask(habit_id, date);
    habit.completed = true;
  };

  this.undoTask = function(habit) {
    var habit_id = habit.id;
    var habitDates = habit.dates;
    var date = ctrl.date;

    for (var i = 0; i < habitDates.length; i++) {
      var currentDate = habitDates[i];
      if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
        habitDates.splice(i, 1);
        HabitsServices.undoTask(habit_id, date);
        habit.completed = false;
        return;
      }
    }
  };


}
