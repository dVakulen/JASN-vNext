using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JASN.CommandStack
{
    public class Message
    {
        public DateTime TimeStamp { get; protected set; }
        public string SagaId { get; protected set; }
    }
    public class Command : Message
    {
        public string Name { get; protected set; }
    }
    public class Event : Message
    {
    }

    public interface IStartWith<T>  where T : Message
    {
        void Handle(T message);
    }
    public interface ICanHandle<T> where T : Message
    {
        void Handle(T message);
    }

    class Saga<TSagaData> 
       // : IStartWith<TCommand>
   // ICanHandle<TMessage>
    {
    }
}
