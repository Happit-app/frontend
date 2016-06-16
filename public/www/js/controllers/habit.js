angular
  .module('happit')
  .controller('HabitCtrl', HabitCtrl);

HabitCtrl.$inject = ['HabitsServices', 'ionicTimePicker', '$stateParams', '$scope'];

function HabitCtrl(HabitsServices, ionicTimePicker, $stateParams, $scope) {
  var ctrl = this;
  this.time;

  this.service = HabitsServices;

  this.service.getHabit($stateParams.id).then(function(data) {
    ctrl.habit = data;
  });

  this.setDayContent = function(date) {
    if (ctrl.habit && ctrl.habit.dates) {
      for (var i = 0; i < ctrl.habit.dates.length; i++) {
        var currentDate = ctrl.habit.dates[i];
        if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
          return '<div class="completedDay"></div>'
        }
      }
    }
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
