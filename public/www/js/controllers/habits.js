angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = ['HabitsServices']

function HabitsCtrl(HabitsServices) {
  var ctrl = this;

  this.service = HabitsServices;
  this.user_id = 4;

  this.service.getAllHabits(ctrl.user_id).then(function(data) {
    ctrl.allHabits = data;
  });

  this.completeTask = function(id) {
    this.service.completeTask(id);
  };

  this.incompleteTask = function(id) {
    this.service.incompleteTask(id);
  };

}
