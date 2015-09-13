(function() {
  'use strict'; 
  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$interval', "$state"];

  function HomeController($interval, $state) {
    var vm = this;
    vm.type = "";
    vm.firstString = "Hi, my name is Kareem.";
    vm.secondMessage = "MEAN Stack Developer.";
    // vm.secondMessage = vm.secondMessage.split("");
    vm.secondType = [];
    vm.typingAnimationDone;
    vm.count = 0;


    // TYPING ANIMATION








    // FUNCTION FOR TYPING
    vm.backspace = function(string, number) {
			var stringToBeWorked = string.split("");
      var backspaceInterval = $interval(function() {

        if (stringToBeWorked == number) $interval.cancel(backspaceInterval);
				// console.log("Before: "+ stringToBeWorked);
        stringToBeWorked.splice(stringToBeWorked.length - 1, 1);
				string = stringToBeWorked.join("");
				// console.log("After: " + stringToBeWorked);
      }, 75)
    }
    vm.firstType = function() {
      var type = $interval(function() {
        if (vm.type === vm.firstString) {
          $interval.cancel(type);
          vm.backspace(vm.type, 4);
          vm.count = 0;
          // vm.SecondType();

          return;
        }
        vm.type += vm.firstString[vm.count];
        vm.count += 1;
      }, 175);
    }

    vm.SecondType = function() {
      var secondType = $interval(function() {
        if (vm.count === vm.secondMessage.length) {
          $interval.cancel(secondType);
          vm.typingAnimationDone = true;
          $state.go("Purple");
        };
        vm.secondType.push(vm.secondMessage[vm.count]);
        console.log(vm.count);
        vm.count += 1;
      }, 95)
    }




    vm.firstType();
  }
})();
