angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = []

function HabitsCtrl() {
  var ctrl = this;

  this.service = HabitsServices;

  this.allHabits = [
    {
      id: 1,
      title: 'Meditate',
      description: '',
      completed: true
    },
    {
      id: 2,
      title: 'Run for 20 minutes',
      description: '',
      completed: false
    },
    {
      id: 3,
      title: 'Journal when stressed',
      description: '',
      completed: true
    }
  ];
}
