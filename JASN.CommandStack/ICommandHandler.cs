using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JASN.CommandStack
{
    public interface ICommandHandler<in TCommand>
    {
        void Handle(TCommand command);
    }
}
