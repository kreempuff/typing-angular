(function() {
  'use strict';
  angular.module('app', ["ngAnimate", "ngMaterial"])
    .config(MDConfig);

  MDConfig.$inject = ['$mdThemingProvider'];

  function MDConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('deep-purple');
  }

})();

(function() {
  'use strict';
  angular.module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$interval', "$timeout"];

  function MainController($interval, $timeout) {
    var vm = this;
    vm.type = {
      text: ""
    };
    vm.rightString = "I mean: Hi, my name is Kareem.";
    vm.wrongString = "Hey I'm desperate, please hire me.";
    vm.secondMessage = "I just became a MEAN Stack Developer.";
    vm.secondType = [];
    vm.typingAnimationDone;
    vm.count = 0;
    vm.done = false;









    // FUNCTION FOR TYPING
    vm.backspace = function(string, number, funcToRunAfterBackspace) {
      var stringToBeWorked = string.split("");
      var backspaceInterval = $interval(function() {
        if (stringToBeWorked.length === number) {
          $interval.cancel(backspaceInterval);
          funcToRunAfterBackspace();
        }

        stringToBeWorked.splice(stringToBeWorked.length - 1, 1);
        vm.type.text = stringToBeWorked.join("");
      }, 50);

    };
    vm.firstType = function(string, backspacefunc) {
      var type = $interval(function() {
        if (vm.type.text === string) {
          $interval.cancel(type);
          vm.count = 0;
          backspacefunc(vm.type.text, 0, function() {
            vm.firstType(vm.rightString, function() {
              vm.MEANtype();
            });
          });

          // vm.SecondType();

          return;
        }
        vm.type.text += string[vm.count];
        vm.count += 1;
      }, 70);
    };

    vm.MEANtype = function() {
      var secondType = $interval(function() {
        if (vm.count === vm.secondMessage.length) {
          $interval.cancel(secondType);
          $timeout(function() {
            vm.typingAnimationDone = true;
            vm.done = true;
          }, 500);
        }
        vm.secondType.push(vm.secondMessage[vm.count]);
        vm.count += 1;
      }, 50);
    };




    vm.firstType(vm.wrongString, vm.backspace);
  }
})();
