'use strict';

/**
 * @ngdoc function
 * @name foodiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodiesApp
 */
angular.module('foodiesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
