(function(){

	'use strict';

	angular.module('app.mrfront')
	.run(['$rootScope',function($rootScope) {
		$rootScope.app={
			'title':'Mr. Front',
			'name':'Mr. Front',
			'company':'draweb',
			'website':'http://draweb.com.ar',
			'description':'This is a compiler based on Materialize.css and Grunt, in order to create Apps with stylish designs.',
			'author':'podmaxs',
			'contact':'podmaxs@gmail.com',
			'copyright':'Copyright (c) 2007-2019 Maximiliano Piccinini Todos los derechos reservados.',
			'keywords':'Html 5,css3,javascript,jade,sass,animate.css,AngularJs,materialize,font-awesome,grunt,nodejs,draweb',
			'preloadTamplate':'app/views/draweb/components/preload/preload.html'
		};
	}]);

})();
