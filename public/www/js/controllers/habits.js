angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = []

function HabitsCtrl() {
  var ctrl = this;

  this.service = HabitsServices;


}
