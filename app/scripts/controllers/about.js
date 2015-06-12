'use strict';

/**
 * @ngdoc function
 * @name homeRecipesClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homeRecipesClientApp
 */
angular.module('homeRecipesClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
