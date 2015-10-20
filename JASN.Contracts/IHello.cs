using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JASN.Core;

namespace JASN.Contracts
{
    public interface IHello : Orleans.IGrainWithIntegerKey
    {
        Task<List<Customer>> GetCustomers();
    }
}
