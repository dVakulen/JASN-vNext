using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace JASN.Core
{
    public class Customer
    {
        public Customer(int id, string name, decimal total)
        {
            Id = id;
            Name = name;
            Total = total;
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public Decimal Total { get;set; }
    }
}
