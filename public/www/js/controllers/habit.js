angular
  .module('happit')
  .controller('HabitCtrl', HabitCtrl);

HabitCtrl.$inject = ['HabitsServices', 'ionicTimePicker'];

function HabitCtrl(HabitsServices, ionicTimePicker) {
  var ctrl = this;

  this.service = HabitsServices;

  this.newHabit = function() {

  }

  this.editHabit = function() {

  }

  this.openTimePicker = function() {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };
}
