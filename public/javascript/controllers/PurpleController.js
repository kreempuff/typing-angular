(function() {
  angular.module('app').controller("PurpleController", PurpleController);
  PurpleController.$inject = [];

  function PurpleController() {
    var vm = this;
    vm.title = "About Me";
  }
})();
