'use strict';

/**
 * @ngdoc function
 * @name foodiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodiesApp
 */
angular.module('foodiesApp')
    .controller('mealTypeController', function($scope) {
        $scope.mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
        $scope.caterers = ["First Floor", "Fifth Floor(near cafeteria)", "Fifth Floor(other)"];
    });