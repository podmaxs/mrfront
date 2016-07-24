(function(){

'use strict';

angular.module('app.components')
.directive('dwTabs', ['$rootScope',function($rootScope){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {data:'=',active:'='}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		 template: 	'<ul tabs reload="allTabContentLoaded">'+
		 			'<li class="tab" ng-repeat="t in tabs" ng-init="p=$index"><a href="#tab{{p}}" ng-click="select(t,p)" ng-class="{active:p==posActive}">{{t.name}}</a></li>'+
		 			'</ul>'+
		 			'<div class="row" ng-if="tabs.length!=0">'+
		 			'<div ng-repeat="t in tabs" ng-init="p=$index" id="tab{{p}}" class="col s12" ng-include="t.template"></div>'+
		 			'</div>',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			$scope.tabs=[];
			$scope.postActive=0;
			$scope.name="";
			if($scope.active)
				$scope.postActive=parseInt(angular.copy($scope.active));
			
			$scope.$watchCollection('data',function(n){
				if(n!=undefined)
					$scope.tabs=n;
			});

			$scope.select=function(t,p){
				if(iAttrs.id!=undefined)
					$scope.name=iAttrs.id;
				if($scope.name!='')
					$rootScope.$broadcast($scope.name+'-tabs-selected',{'item':t,'index':p})
			};


		}
	};
}]);;

})();
