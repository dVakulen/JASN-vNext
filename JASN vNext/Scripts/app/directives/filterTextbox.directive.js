var demoApp;
(function (demoApp) {
    var directives;
    (function (directives) {
        var FilterTextbox = (function () {
            function FilterTextbox() {
                this.template = 'Search: <input type="text" ng-model="vm.filter" /> {{ vm.message }}';
                this.restrict = 'E';
                this.scope = {
                    filter: '='
                };
                this.controllerAs = 'vm';
                this.bindToController = true;
                this.controller = function ($scope) {
                    var vm = this;
                    vm.message = 'Hello';
                    $scope.$watch('vm.filter', function (newVal, oldVal) {
                        if (oldVal !== '' && newVal === '') {
                            vm.message = 'Please enter a value';
                        }
                        else {
                            vm.message = '';
                        }
                    });
                };
            }
            FilterTextbox.instance = function () {
                return new FilterTextbox();
            };
            return FilterTextbox;
        })();
        angular.module('demoApp').directive('filterTextbox', FilterTextbox.instance);
    })(directives = demoApp.directives || (demoApp.directives = {}));
})(demoApp || (demoApp = {}));
