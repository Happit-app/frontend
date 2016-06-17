(function() {
  'use strict';

  angular
    .module('happit')
    .controller('HabitCtrl', HabitCtrl);

  HabitCtrl.$inject = ['HabitsServices', 'ionicTimePicker','$state', '$stateParams', '$scope','$cordovaLocalNotification', '$ionicPlatform', '$rootScope', '$location'];

  function HabitCtrl(HabitsServices, ionicTimePicker, $state, $stateParams, $scope, $cordovaLocalNotification, $ionicPlatform, $rootScope, $location) {
    var ctrl = this;
    this.time;
    this.service = HabitsServices;
    this.scheduleArr = [];

    this.labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.data = [3, 5, 10, 7, 1, 20, 12];
    this.colors = ['#00BCD4', '#0091EA', '#CDDC39', '#26A69A', '#2E7D32', '#8BC34A', '#01579B'];

    this.service.getHabit($stateParams.id).then(function(data) {
      ctrl.habit = data;
      ctrl.time = ctrl.habit.time;
    }).catch(function(err) {
      console.log(err);
    });

    this.setDayContent = function(date) {
      if (ctrl.habit && ctrl.habit.dates) {
        for (var i = 0; i < ctrl.habit.dates.length; i++) {
          var currentDate = ctrl.habit.dates[i];
          if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
            return '<div class="completedDay"></div>';
          }
        }
      }
      return '<div></div>';
    };

    this.dayClick = function(date) {
      var habit_id = ctrl.habit.id;
      ctrl.habit.dates = ctrl.habit.dates || [];
      var habitDates = ctrl.habit.dates;

      if (habitDates.length) {
        for (var i = 0; i < habitDates.length; i++) {
          var currentDate = habitDates[i];
          if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
            habitDates.splice(i, 1);
            ctrl.rerenderCal();
            HabitsServices.undoTask(habit_id, date);
            return;
          }
        }
      }

      habitDates.push(date);
      ctrl.rerenderCal();
      HabitsServices.completeTask(habit_id, date);
    };

    this.rerenderCal = function() {
      angular.element(document.querySelector('calendar-md')).scope().$$childHead._$$bootstrap();
    };

    // this.createSchedule = function(habit) {
    //   var days = [habit.sun, habit.mon, habit.tue, habit.wed, habit.thu, habit.fri, habit.sat];
    //
    //   for (var i = 0; i < days.length; i++) {
    //     if(days[i]) {
    //       var hours = habit.time.slice(0,2);
    //       var mins = habit.time.substring(5, 2);
    //       var amPm;
    //
    //       if(hours - 12 >= 0) {
    //         hours = (hours - 12);
    //         amPm = 'pm';
    //       } else {
    //         amPm = 'am';
    //         mins = ':' + mins;
    //       }
    //
    //     var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    //
    //     var Day = new Object();
    //
    //     Day.id = habit.id,
    //     Day.title = 'Happit Check-In',
    //     Day.text = 'Hi, ' + habit.firstName + '! Did you complete your healthy habit today?',
    //     Day.firstAt = dayNames[i] + '_at_' + hours + mins + '_' + amPm,
    //     Day.every = 'week',
    //     Day.ongoing = true
    //
    //     ctrl.scheduleArr.push(Day);
    //     }
    //   }
    //   ctrl.scheduler();
    // }

    this.addHabit = function(habit, time) {
      habit.time = time;
      habit.user_id = 2;

      // if(habit.notify) {
      //   ctrl.createSchedule(habit);
      // }

      HabitsServices.addHabit(habit).then(function() {
        $state.go('home');
      }).catch(function(err) {
        console.log(err);
      });
    };


    // $ionicPlatform.ready( function() {
    //   if(ionic.Platform.isWebView) {
    //     ctrl.scheduler = function(){
    //       $cordovaLocalNotification.schedule(ctrl.scheduleArr)
    //         .then(function(result) {
    //           alert('Notifications sent!');
    //       });
    //     }
    //     console.log('hi!');
    //     $rootScope.$on($cordovaLocalNotification.onclick = function (event, notification, json) {
    //       $state.go('home');
    //     });
    //   }
    // });

    this.editHabit = function(habit) {
      HabitsServices.editHabit(ctrl.habit, ctrl.habit.time).then( function() {
        // if(habit.notify) {
        //   if(scheduleArr.length) {
        //     for(var j = 0; j < scheduleArr.length; j++) {
        //       if(scheduleArr[i].id === habit.id) {
        //         scheduleArr.splice(i, 1);
        //       }
        //     }
        //   }
        //   ctrl.createSchedule(habit);
        // }
        $state.go('home');
      }).catch( function(err) {
        console.log(err);
      });
    };

    this.deleteHabit = function(habit_id) {
      HabitsServices.deleteHabit(habit_id).then(function() {
        $state.go('home');
      }).catch(function(err) {
        console.log(err);
      });
    };

    this.completeTask = function(habit) {
      HabitsServices.completeTask(habit).then(function(data) {
        return data;
      }).catch(function(err) {
        console.log(err);
      });
    };

    this.undoTask = function(id) {
      HabitsServices.undoTask(id).then( function() {
        $state.go('habits');
      }).catch(function(err) {
        console.log(err);
      });
    };

    this.openTimePicker = function() {
      var min;

      var ipObj1 = {
        callback: function(val) {
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

            if (ctrl.habit) {
              ctrl.habit.time = hour + ":" + min;
            }
            else {
              ctrl.time = hour + ':' + min;
            }
            // this.time = ctrl.habit.time || ctrl.time;
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };
  };
})();
