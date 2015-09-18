/// <reference path='../_all.ts' />

module todos {
    'use strict';

    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    export function todoBlur(): ng.IDirective {
        return {
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
                element.bind('blur', () => { $scope.$apply(attributes.todoBlur); });
                $scope.$on('$destroy', () => { element.unbind('blur'); });
            }
        };

    }


}

class MyDirective {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public template = '<div>{{name}}</div>';
    public scope = {};

    constructor(/*list of dependencies*/) {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        MyDirective.prototype.link = (scope: ng.IScope, element: JQuery, attributes: any) => {
            /*handle all your linking requirements here*/
            element.bind('blur',() => { scope.$apply(attributes.todoBlur); });
            scope.$on('$destroy',() => { element.unbind('blur'); });
        };
    }

    public static Factory() {
        var directive = (/*list of dependencies*/) => {
            return new MyDirective(/*list of dependencies*/);
        };

        // directive['$inject'] = ['/*list of dependencies*/'];

        return directive;
    }
}