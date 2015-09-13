(function() {
	'use strict';
	angular.module('app', ['ui.router',"ngAnimate", "ngMaterial"])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Purple',{
			// url: '/purple',
			templateUrl: 'views/purple.html',
			controller: "PurpleController",
			controllerAs: "vm"
		});
		$urlRouterProvider.otherwise('/');
	}
})();
