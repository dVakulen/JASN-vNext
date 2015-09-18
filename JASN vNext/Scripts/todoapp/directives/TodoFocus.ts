/// <reference path='../_all.ts' />

module todos {
	'use strict';

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
	 */
	export function todoFocus($timeout: ng.ITimeoutService): ng.IDirective {
		return {
			link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
				$scope.$watch(attributes.todoFocus, newval => {
					if (newval) {
						$timeout(() => element[0].focus(), 0, false);
					}
				});
			}
		};
	}

	todoFocus.$inject = ['$timeout'];

}

class MyDirectiveA {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public template = '<div>{{name}}</div>';
    public scope = {};

    constructor($timeout: ng.ITimeoutService) {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        MyDirective.prototype.link = (scope: ng.IScope, element: JQuery, attributes: any) => {
            /*handle all your linking requirements here*/
            scope.$watch(attributes.todoFocus, newval => {
                if (newval) {
                    $timeout(() => element[0].focus(), 0, false);
                }
            });
        };
    }

    public static Factory() {
        var directive = ($timeout: ng.ITimeoutService) => {
            return new MyDirectiveA($timeout);
        };

        // directive['$inject'] = ['/*list of dependencies*/'];

        return directive;
    }
}