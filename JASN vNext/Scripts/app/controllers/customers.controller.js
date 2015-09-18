var demoApp;
(function (demoApp) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.customers = null;
            dataService.getCustomers().then(function (custs) {
                _this.customers = custs;
            });
        }
        CustomersController.$inject = ['demoApp.dataService'];
        return CustomersController;
    })();
    angular.module('demoApp').controller('demoApp.CustomersController', CustomersController);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=customers.controller.js.map