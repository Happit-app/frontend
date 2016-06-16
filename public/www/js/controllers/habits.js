angular
  .module('happit')
    .controller('HabitsCtrl', HabitsCtrl)

HabitsCtrl.$inject = ['HabitsServices']

function HabitsCtrl(HabitsServices) {
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

  this.completeTask = function(id) {
    this.service.completeTask(id);
  };

  this.incompleteTask = function(id) {
    this.service.incompleteTask(id);
  };

  this.handleDayClick = function(day) {
    return '<p>done</p>'
  };

}
