'use strict';

/**
 * @ngdoc function
 * @name foodiesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foodiesApp
 */
angular.module('foodiesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
