using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Mrxrm.Common.Tests.IocContainer_Tests
{
    [TestClass]
    public class When_IocContainer_GetInstance
    {
        [TestMethod]
        public void Given_Depth1Parameters0_Then_ReturnInstance()
        {
            // Arrange
            IocContainer container = new IocContainer();

            container.Register<IWhoAmIService, WhoAmIService>();

            // Action
            var service = container.GetInstance<IWhoAmIService>();

            // Assert
            Assert.IsNotNull(service);
        }

        //Todo: Depth N

        //Todo: Parameter > 0
    }

    public interface IWhoAmIService
    {
    }

    public class WhoAmIService : IWhoAmIService
    {
        public WhoAmIService()
        {

        }
    }
}
