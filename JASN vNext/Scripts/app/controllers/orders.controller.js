var demoApp;
(function (demoApp) {
    var OrdersController = (function () {
        function OrdersController($routeParams, dataService) {
            var _this = this;
            this.customerId = $routeParams.customerId;
            dataService.getOrder(this.customerId).then(function (orders) {
                _this.orders = orders;
            });
        }
        OrdersController.$inject = ['$routeParams', 'demoApp.dataService'];
        return OrdersController;
    })();
    angular.module('demoApp').controller('demoApp.OrdersController', OrdersController);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=orders.controller.js.map