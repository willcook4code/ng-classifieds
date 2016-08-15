(function() {
	"use strict";
	angular
		.module("ngClassifieds")
		.controller("classfiedsCtrl", function($scope, $http) {

			$http.get('data/classifieds.json').then(function(classifieds) {
				$scope.classifieds = classifieds.data;
			});

			
		});
})();