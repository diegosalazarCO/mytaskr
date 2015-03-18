'use strict';

/**
 * @ngdoc function
 * @name mytaskrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytaskrApp
 */
angular.module('mytaskrApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

  	var stackTareas = localStorageService.get('tareas'); 
    var stackIdeas = localStorageService.get('ideas');

    $scope.tareas = stackTareas && stackTareas.split('\n') || [];
    $scope.ideas = stackIdeas && stackIdeas.split('\n') || [];

    $scope.estaOculta = true;

    $scope.$watch('tareas', function () {
       localStorageService.add('tareas', $scope.tareas.join('\n'));
       }, true);

    $scope.$watch('ideas', function (){
      localStorageService.add('ideas', $scope.ideas.join('\n'));
    }, true);

    $scope.addIdea = function () {
      $scope.ideas.push($scope.idea);
      $scope.idea = '';
    };

    $scope.addTarea = function () {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
      $scope.estaOculta = true;
    };

    $scope.eliminarTarea = function (index) {
    	$scope.tareas.splice(index, 1);
    };

    $scope.eliminarIdea = function (index) {
      $scope.ideas.splice(index, 1);
    };

    $scope.abrirTarea = function () {
      $scope.estaOculta = false;
    };
  });