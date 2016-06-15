angular
  .module('happit')
    .controller('HabitCtrl', HabitCtrl)

HabitCtrl.$inject = []

function HabitCtrl() {
  var ctrl = this;

  this.service = HabitsServices;
  
  this.newHabit = function() {

  }

  var ipObj1 = {
    callback: function (val) {
      if(typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        console.log('Seleced epoch : ', val, 'and the time is', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
      }
    },
    inputTime: 50400,
    format: 12,
    step: 15,
    setLabel: 'Set2'
  };

  ionicTimePicker.openTimePicker(ipObj1);
}
