/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    function todoBlur() {
        return {
            link: function ($scope, element, attributes) {
                element.bind('blur', function () {
                    $scope.$apply(attributes.todoBlur);
                });
                $scope.$on('$destroy', function () {
                    element.unbind('blur');
                });
            }
        };
    }
    todos.todoBlur = todoBlur;
})(todos || (todos = {}));
var MyDirective = (function () {
    function MyDirective() {
        this.template = '<div>{{name}}</div>';
        this.scope = {};
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        MyDirective.prototype.link = function (scope, element, attributes) {
            /*handle all your linking requirements here*/
            element.bind('blur', function () {
                scope.$apply(attributes.todoBlur);
            });
            scope.$on('$destroy', function () {
                element.unbind('blur');
            });
        };
    }
    MyDirective.Factory = function () {
        var directive = function () {
            return new MyDirective();
        };
        // directive['$inject'] = ['/*list of dependencies*/'];
        return directive;
    };
    return MyDirective;
})();
//# sourceMappingURL=TodoBlur.js.map