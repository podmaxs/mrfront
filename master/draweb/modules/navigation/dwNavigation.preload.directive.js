(function(){

	'use strict';

	angular.module('dwNavigation')
	.directive('preload', ['$compile','$templateRequest',function($compile,$templateRequest){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: true, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			//templateUrl: ,
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				$scope.active=true;
				iElm.addClass('active');
				var el=iElm;
				$templateRequest($scope.app.preloadTamplate).then(function(html){
					var template = angular.element(html);
					el.append(template);
					$compile(template)($scope);
				});

				angular.element(document).ready(function(){
					setTimeout(function(){
						$scope.$apply(function(){
							el.removeClass('active');
						});
					},2000);
				});
			}
		};
	}]);

})();
