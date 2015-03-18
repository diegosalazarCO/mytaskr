'use strict';

/**
 * @ngdoc function
 * @name mytaskrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytaskrApp
 */
angular.module('mytaskrApp')
  .controller('MainCtrl', function ($scope, localStorageService, $filter) {

  	var stackTareas = localStorageService.get('tareas'); 
    var stackIdeas = localStorageService.get('ideas');

    //$scope.tareas = stackTareas || [];
    $scope.ideas = stackIdeas && stackIdeas.split('\n') || [];
    $scope.tareas = (localStorage.getItem('tareas')!==null) ? JSON.parse($scope.stackTareas) : [ {titulo: 'Completar To dos de App', hecha: false}];
    $scope.estaOculta = true;

    $scope.$watch('tareas', function () {
       localStorageService.set('tareas', JSON.stringify($scope.tareas));
       }, true);

    $scope.$watch('ideas', function (){
      localStorageService.add('ideas', $scope.ideas.join('\n'));
    }, true);

  //   $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
  // localStorage.setItem('todos', JSON.stringify($scope.todos));

  // $scope.addTodo = function() {
  //   $scope.todos.push({
  //     text: $scope.todoText,
  //     done: false
  //   });
  //   $scope.todoText = ''; //clear the input after adding
  //   localStorage.setItem('todos', JSON.stringify($scope.todos));
  // };

    $scope.addIdea = function () {
      $scope.ideas.push($scope.idea);
      $scope.idea = '';
    };

    $scope.addTarea = function () {

      var nuevoParaHacer = {
        titulo: $scope.tarea,
        //haciendo: false,
        hecha: false
      };

      $scope.tareas.push(nuevoParaHacer);
    	$scope.tarea = '';
      $scope.estaOculta = true;
      localStorageService.add('tareas', JSON.stringify($scope.tareas));
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

    $scope.tareaHecha = function (index) {
      $scope.tareas[index].hecha = true;
    };

    $scope.filtroTareasHechas = function (elemento) {
      console.log(elemento);
      console.log(elemento.hecha);
      return elemento.hecha;
    };

    $scope.eliminarTodasTareas = function () {
      return localStorageService.remove('tareas');
    };
  });