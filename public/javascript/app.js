(function() {
	'use strict';
	angular.module('app', ['ui.router',"ngAnimate", "ngMaterial"])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Education', {
			templateUrl: 'views/education.html',

		}).state('Experience',{
			templateUrl: 'views/experience.html',

		}).state('About', {
			templateUrl: 'views/about.html',

		}).state('Portfolio',{
			templateUrl: 'views/projects.html',

		});
		$urlRouterProvider.otherwise('/');
	}
})();
