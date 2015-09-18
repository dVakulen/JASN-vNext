module demoApp {

    export interface ICustomer {
        id: number;
        name: string;
        total: number;
    }

    export interface IOrder {
        product: string;
        total: number;
    }

    export class DataService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService, private ) {}

        getCustomers(): ng.IPromise<ICustomer[]> {
            return this.$http.get('customersJson').then(response => {
                return response.data;
            });
         
        }

        getOrder(id: number): ng.IPromise<IOrder[]> {

            return this.$http.get('ordersJson', { id: id }).then(response => {
               return response.data;
            });
        }
    }

    angular.module('demoApp')
        .service('demoApp.dataService', DataService);

}
