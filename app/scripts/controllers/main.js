'use strict';

/**
 * @ngdoc function
 * @name homeRecipesClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeRecipesClientApp
 */
angular.module('homeRecipesClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
