angular
  .module('happit')
  .controller('HabitCtrl', HabitCtrl);

HabitCtrl.$inject = ['HabitsServices', 'ionicTimePicker', '$stateParams'];

function HabitCtrl(HabitsServices, ionicTimePicker, $stateParams) {
  var ctrl = this;
  this.time;

  this.service = HabitsServices;

  this.habit = this.service.getHabit($stateParams.id);
  console.log(this.habit);

  this.setDayContent = function(date) {
    // if date is present in list of habit's completed days
    return '<div class="completedDay"></div>'
  };

  this.newHabit = function() {

  }

  this.editHabit = function() {

  }

  this.openTimePicker = function() {
    var min;
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            var hour = selectedTime.getUTCHours();

            if(selectedTime.getUTCMinutes() === 0) {
               min = "00";
            } else {
               min = selectedTime.getUTCMinutes()
            }
            ctrl.time = hour + ":" + min;
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };
}
