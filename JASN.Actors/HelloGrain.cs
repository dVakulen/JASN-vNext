using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JASN.Contracts;
using JASN.Core;

namespace JASN.Actors
{
    public class HelloGrain : Orleans.Grain, IHello
    {
        Task<List<Customer>> IHello.GetCustomers()
        {
            var customers = new List<Customer>
            {
                new Customer(1, "Ted", 123),
                new Customer(2, "Michelle", 532),
                new Customer(3, "Zed", 643),
                new Customer(4, "Bob", 324),
            };

            return Task.FromResult(customers);
        }
    }
}
