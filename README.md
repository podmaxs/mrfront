# Mr.Front
WebSeed with materialize.css and angular
<h3>Installation</h3>
		npm install


<h3>Basic usage</h3>

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
