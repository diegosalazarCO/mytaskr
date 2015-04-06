'use strict';

/**
 * @ngdoc function
 * @name mytaskrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytaskrApp
 */
angular.module('mytaskrApp')
  .controller('MainCtrl', function ($scope) {

    var stackTareas = localStorage.getItem('tareas'); 
    var stackIdeas = localStorage.getItem('ideas');

    //$scope.tareas = stackTareas || [];
    $scope.ideas = stackIdeas && stackIdeas.split('\n') || [];
    $scope.tareas = JSON.parse(stackTareas) || [];
    $scope.estaOculta = true;

    $scope.$watch('tareas', function (newValue, oldValue) {
       if (newValue !== oldValue) {
        localStorage.setItem('tareas', JSON.stringify(newValue));
       }
       }, true);

    $scope.$watch('ideas', function (){
      localStorage.setItem('ideas', $scope.ideas.join('\n'));
    }, true);

    $scope.addIdea = function () {
      if ($scope.idea !== '') {
        $scope.ideas.push($scope.idea);
        $scope.idea = '';
      } else {
      }
    };

    $scope.addTarea = function () {

      var nuevoParaHacer = {
        titulo: $scope.tarea,
        //haciendo: false,
        hecha: false
      };
      if ($scope.tarea !== '') {
        $scope.tareas.push(nuevoParaHacer);
        console.log($scope.tareas);
        $scope.tarea = '';
        $scope.estaOculta = true;
        
      } else {
      }
      
    };

    $scope.eliminarTarea = function (index) {
    	$scope.tareas.splice(index, 1);
    };

    $scope.eliminarIdea = function (index) {
      $scope.ideas.splice(index, 1);
    };

    $scope.abrirTarea = function () {
      ($scope.estaOculta) ? $scope.estaOculta = false : $scope.estaOculta = true ;
    };

    $scope.tareaHecha = function (index) {
      $scope.tareas[index].hecha = true;
    };

    $scope.filtroTareasHechas = function (elemento) {
      console.log(elemento);
      console.log(elemento.hecha);
      return elemento.hecha;
    };

    $scope.eliminarTodasTareas = function () {
      return localStorage.remove('tareas');
    };
  });