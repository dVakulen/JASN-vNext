var demoApp;
(function (demoApp) {
    var DataService = (function () {
        function DataService($http, private) {
            this.$http = $http;
        }
        DataService.prototype.getCustomers = function () {
            return this.$http.get('customersJson').then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getOrder = function (id) {
            return this.$http.get('ordersJson', { id: id }).then(function (response) {
                return response.data;
            });
        };
        DataService.$inject = ['$http'];
        return DataService;
    })();
    demoApp.DataService = DataService;
    angular.module('demoApp').service('demoApp.dataService', DataService);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=data.service.js.map