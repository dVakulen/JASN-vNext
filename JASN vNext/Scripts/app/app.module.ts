/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='../typings/jquery/jquery.d.ts' />
((): void => {

    var app = angular.module('demoApp', ['ngRoute', 'ngAnimate']);

    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/',
        {
            controller: 'demoApp.CustomersController',
            templateUrl: 'customers',
            controllerAs: 'vm'
        })
        .when('/orders/:customerId',
        {
            controller: 'demoApp.OrdersController',
            templateUrl: 'orders',
            controllerAs: 'vm'
        });
    }]);

  //  angular.bootstrap(document, ['demoApp']);
})();
