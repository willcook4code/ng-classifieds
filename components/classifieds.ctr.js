(function() {
	"use strict";
	angular
		.module("ngClassifieds")
		.controller("classfiedsCtrl", function($scope) {
			$scope.name = {
				first: "Will",
				last: "Cook"
			};

			$scope.message = "Hello, world!!!"
		});
})();