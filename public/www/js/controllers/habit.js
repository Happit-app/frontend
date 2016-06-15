angular
  .module('happit')
    .controller('HabitCtrl', HabitCtrl)

HabitCtrl.$inject = []

function HabitCtrl() {
  var ctrl = this;

  this.service = HabitsServices;


}
