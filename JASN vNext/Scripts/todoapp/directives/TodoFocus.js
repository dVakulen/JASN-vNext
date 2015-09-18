/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    /**
     * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
     */
    function todoFocus($timeout) {
        return {
            link: function ($scope, element, attributes) {
                $scope.$watch(attributes.todoFocus, function (newval) {
                    if (newval) {
                        $timeout(function () { return element[0].focus(); }, 0, false);
                    }
                });
            }
        };
    }
    todos.todoFocus = todoFocus;
    todoFocus.$inject = ['$timeout'];
})(todos || (todos = {}));
var MyDirectiveA = (function () {
    function MyDirectiveA($timeout) {
        this.template = '<div>{{name}}</div>';
        this.scope = {};
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        MyDirective.prototype.link = function (scope, element, attributes) {
            /*handle all your linking requirements here*/
            scope.$watch(attributes.todoFocus, function (newval) {
                if (newval) {
                    $timeout(function () { return element[0].focus(); }, 0, false);
                }
            });
        };
    }
    MyDirectiveA.Factory = function () {
        var directive = function ($timeout) {
            return new MyDirectiveA($timeout);
        };
        // directive['$inject'] = ['/*list of dependencies*/'];
        return directive;
    };
    return MyDirectiveA;
})();
//# sourceMappingURL=TodoFocus.js.map