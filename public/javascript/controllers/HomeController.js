(function() {
  'use strict';
  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$interval', "$state", "$timeout"];

  function HomeController($interval, $state, $timeout) {
    var vm = this;
    vm.type = {
      text: ""
    };
    vm.rightString = "Hi, my name is Kareem.";
		vm.wrongString = "Your new Employee at <company name here>."
    vm.secondMessage = "MEAN Stack Developer.";
    vm.secondType = [];
    vm.typingAnimationDone;
    vm.count = 0;
		vm.done = false;


    // TYPING ANIMATION








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
      }, 50)

    }
    vm.firstType = function(string, backspacefunc) {
      var type = $interval(function() {
        if (vm.type.text === string) {
          $interval.cancel(type);
					vm.count = 0;
          backspacefunc(vm.type.text, 0, function () {
          	vm.firstType(vm.rightString, function () {
          		vm.MEANtype();
          	});
          });

          // vm.SecondType();

          return;
        }
        vm.type.text += string[vm.count];
        vm.count += 1;
      }, 145);
    }

    vm.MEANtype = function() {
      var secondType = $interval(function() {
        if (vm.count === vm.secondMessage.length) {
          $interval.cancel(secondType);
        $timeout(function () {
					vm.typingAnimationDone = true;
        	$state.go("Purple")
        }, 1000);
			}
        vm.secondType.push(vm.secondMessage[vm.count]);
        vm.count += 1;
      }, 95)
    }




    vm.firstType(vm.wrongString, vm.backspace);
  }
})();
