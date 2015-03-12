'use strict';

/**
 * @ngdoc function
 * @name mytaskrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytaskrApp
 */
angular.module('mytaskrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
