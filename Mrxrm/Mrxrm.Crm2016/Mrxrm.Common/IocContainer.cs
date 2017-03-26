using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mrxrm.Common
{
    public class IocContainer
    {
        private readonly Dictionary<Type, Func<object>> _registrations =
            new Dictionary<Type, Func<object>>();

        public void Register<TService, TImplementation>()
            where TImplementation : TService
        {
            this._registrations.Add(typeof(TService),
                () => this.GetInstance<TImplementation>());
        }

        public void Register<TService>(Func<TService> instanceCreator)
        {
            if (this._registrations.Where(w => w.Key.Equals(typeof(TService))).FirstOrDefault().Key == null)
            {
                this._registrations.Add(typeof(TService), () => instanceCreator());
            }
        }

        public void RegisterSingle<TService>(TService instance)
        {
            if (this._registrations.Where(w => w.Key.Equals(typeof(TService))).FirstOrDefault().Key == null)
            {
                this._registrations.Add(typeof(TService), () => instance);
            }

        }

        public void RegisterSingle<TService>(Func<TService> instanceCreator)
        {
            Lazy<TService> lazy = new Lazy<TService>(instanceCreator);
            this.Register<TService>(() => lazy.Value);
        }

        public TService GetInstance<TService>()
        {
            return (TService)this.GetInstance(typeof(TService));
        }

        public object GetInstance(Type serviceType)
        {
            Func<object> creator;
            if (this._registrations.TryGetValue(serviceType, out creator) == false)
            {
                if (serviceType.IsAbstract == true)
                {
                    throw new InvalidOperationException(
                    "No registration for " + serviceType);
                }
                else
                {
                    var ctor = serviceType.GetConstructor(Type.EmptyTypes);
                    return ctor.Invoke(null);
                }
            }

            return creator.Invoke();
        }
    }
}
