(function(){

'use strict';

angular.module('app.routes')
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise("/app/welcome");
	$urlRouterProvider.when("", "/app/welcome");
	$urlRouterProvider.when("/", "/app/welcome");

	$stateProvider
    .state('app', {
    	url: "/app",
    	abstract: true,
    	templateUrl: "app/views/partial/mainNavigation.html"
	})
    .state('app.welcome', {
    	url: "/welcome",
    	templateUrl: "app/views/sections/welcome/main.html"
    })
	
}]);

})();
