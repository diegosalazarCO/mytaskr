'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytaskrApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('No debe tener items al empezar', function () {
    expect(scope.tareas.length).toBe(0);
  });

  it('Debe añadir un item a las tareas', function () {
    scope.tarea = 'test1';
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });

  it('Debe añadir un item a las tareas y luego eliminarlo', function () {
    scope.tarea = 'test2';
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });

  it('tareas No debe tener items al empezar', function () {
    expect(scope.ideas.length).toBe(0);
  });

  it('Debe añadir un item a las ideas', function () {
    scope.idea = 'test1';
    scope.addIdeas();
    expect(scope.ideas.length).toBe(1);
  });

  it('Debe añadir un item a las ideas y luego eliminarlo', function () {
    scope.idea = 'test2';
    scope.addIdeas();
    scope.eliminarIdea(0);
    expect(scope.ideas.length).toBe(0);
  });
});
