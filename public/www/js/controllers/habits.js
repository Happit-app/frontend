angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = ['HabitsServices', '$window']

function HabitsCtrl(HabitsServices, $window) {
  var ctrl = this;
  this.user_id = $window.localStorage.getItem('user.id');
  console.log(ctrl.user_id)
  this.service = HabitsServices;
  this.date = new Date();
  this.year = ctrl.date.getFullYear();
  this.month= ctrl.date.getMonth();
  this.day = ctrl.date.getDate();

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
    var zoneDate = new Date();
    zoneDate.setTime(zoneDate.getTime() - zoneDate.getTimezoneOffset()*60*1000);
    habit.dates = habit.dates || [];

    habit.dates.push(date);
    HabitsServices.completeTask(habit_id, zoneDate);
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
