# Mr.Front
WebSeed with materialize.css and angular
<h3>Installation</h3>
		npm install


<h3>Basic usage</h3>
	
	0- Run in console 'grunt'
	1- Create folder in 'master/app/modules/{myNewModule}'
	2- Defined my module in 'master/app/modules/{myNewModule}/{myNewModule}.module.js'
	3- Defined my Constroller/Directive/Provider in 'master/app/modules/{myNewModule}/{myNewModule}.{ControllerName}.controller.js'
	4- Add your module in app.module in 'master/app/manifest.js'
		(function(){

			'use strict';

			angular.module('app.mrfront',[
					'app.routes',
					'{myNewModule}',
			]);

		})();

<h3>Create new View</h3>
	
	1- Create folder in 'master/views/sections/{myNewModuleViews}'.
	2- Create new 'view.jade' in 'master/views/sections/{myNewModuleViews}/{myNewView}.jade'



<h3>Config new routes</h3>
	
	Open 'master/app/modules/routes/routes.config.js'.
	
	(function(){

		'use strict';

		angular.module('app.routes')
		.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
			// '/app/welcome' is default route
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
    			.state('app.{myNewModule}', {
    				url: "/{myNewUrlModule}",
    				templateUrl: "app/views/sections/{myNewModuleView}/main.html"
			 })
	
		}]);

	})();
