/// <reference path='_all.ts' />
/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('todomvc', []).controller('todoCtrl', todos.TodoCtrl.Factory());
})(todos || (todos = {}));
//# sourceMappingURL=Application.js.map