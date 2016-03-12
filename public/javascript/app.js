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
    var sentence1 = "I wasn't always a javascript ninja..";
    var sentence2 = "Like batman I spent weeks"
    var sentence3 = "....years in the dark honing my skills. And now, I have emerged from my cave ready to tackle the challenges of professional software development."
    vm.secondType = [];
    vm.typingAnimationDone;
    vm.count = 0;
    vm.done = false;
    vm.newMessageForRedesign = ninjaText;

    function ninjaText() {
      var ninTexElem = angular.element('#ninjaText');
      ninTexElem.css('opacity', '0');
      ninTexElem.html(sentence1);
      ninTexElem.animate({
        'opacity': '1'
      }, 1000);
      $timeout(function() {
        ninTexElem.animate({
          'opacity': '0'
        }, 1500);

        $timeout(function() {
          ninTexElem.html(sentence2);
          ninTexElem.animate({
            'opacity': '1'
          }, 2000);
          $timeout(function() {
            ninTexElem.append('<span id="secondText"></span>');
            angular.element("#secondText").css('opacity', '0');
            angular.element("#secondText").html(sentence3);
            angular.element("#secondText").animate({
              'opacity': '1'
            }, 2000);
            $timeout(function() {
              ninTexElem.animate({
                'opacity': '0'
              }, 2000);
              $timeout(function() {
                vm.typingAnimationDone = true;

              }, 2000)
            }, 6000)
          }, 3000)


        }, 2000)


      }, 2000)



    }

    angular.element(document).ready(function () {
      $timeout(function () {
        vm.newMessageForRedesign();
      }, 2000)
    })




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
      }, 500);
    };




    // vm.firstType(vm.wrongString, vm.backspace);
  }
})();
