(function(){

	'use strict';

	angular.module('app.mrfront')
	.run(['$rootScope',function($rootScope) {
		$rootScope.app={
			'title':'Mr. Front',
			'appName':'Mr. Front',
			'description':'App for example of Mr. Front, by draweb.com.ar',
			'author':'podmaxs',
			'contact':'podmaxs@gmail.com',
			'copyright':'Copyright (c) 2007-2019 Maximiliano Piccinini Todos los derechos reservados.',
			'keywords':'Html 5,css3,javascript,jade,sass,animate.css,AngularJs,materialize,font-awesome,grunt,nodejs,draweb'
		};
	}]);

})();
