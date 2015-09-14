(function() {
	'use strict';
	angular.module('app', ['ui.router',"ngAnimate", "ngMaterial"])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Education', {
			templateUrl: 'views/education.html',
			// controller: "EducationnController",
			// controllerAs: "vm"
		}).state('Experience',{
			templateUrl: 'views/experience.html',
			// controller: "RedController",
			// controllerAs: "vm"
		});
		$urlRouterProvider.otherwise('/');
	}
})();
