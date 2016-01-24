'use strict';

/**
 * @ngdoc function
 * @name expensesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expensesApp
 */
angular.module('expensesApp')
  .controller('MainCtrl', function ($scope, $http, appSettings) {
   		console.log(appSettings);

   		function getItems() {
   			$http.get(appSettings.db + '/_design/expenses/_view/byName')
   			.success(function (data) {
   				$scope.items = data.rows;
   			});
   		}

   		getItems();
  });
