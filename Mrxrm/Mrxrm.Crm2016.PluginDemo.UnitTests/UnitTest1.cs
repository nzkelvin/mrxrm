﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Client;
using Microsoft.Xrm.Client.Services;
using Microsoft.Xrm.Sdk;
using Moq;
using System;
using System.Collections.Generic;
using System.Configuration;

namespace Mrxrm.Crm2016.PluginDemo.UnitTests
{
    [TestClass]
    public class UnitTest1
    {
        #region Class Constructor
        private readonly string _namespaceClassAssembly;
        public UnitTest1()
        {
            //[Namespace.class name, assembly name] for the class/assembly being tested
            //Namespace and class name can be found on the class file being tested
            //Assembly name can be found under the project properties on the Application tab
            _namespaceClassAssembly = "Mrxrm.Crm2016.PluginDemo.CrmExtensions" + ", " + "Mrxrm.Crm2016.PluginDemo";
        }
        #endregion
        #region Test Initialization and Cleanup
        // Use ClassInitialize to run code before running the first test in the class
        [ClassInitialize()]
        public static void ClassInitialize(TestContext testContext) { }

        // Use ClassCleanup to run code after all tests in a class have run
        [ClassCleanup()]
        public static void ClassCleanup() { }

        // Use TestInitialize to run code before running each test 
        [TestInitialize()]
        public void TestMethodInitialize() { }

        // Use TestCleanup to run code after each test has run
        [TestCleanup()]
        public void TestMethodCleanup() { }
        #endregion

        [TestMethod]
        public void TestMethod1()
        {
            //Target
            Entity targetEntity = new Entity { LogicalName = "name", Id = Guid.NewGuid() };

            #region Optional Images/Configs
            //Optional Pre/Post Images - configure as needed
            Entity preImage = null; //new Entity { LogicalName = "name", Id = Guid.NewGuid() };
            Entity postImage = null; //new Entity { LogicalName = "name", Id = Guid.NewGuid() };

            //Optional Secure/Unsecure Configurations - configure as needed
            string unsecureConfig = String.Empty;
            string secureConfig = String.Empty;
            #endregion

            //Expected value(s)
            const string expected = null;

            //Invoke the plug-in
            InvokePlugin(_namespaceClassAssembly, ref targetEntity, preImage, postImage, unsecureConfig, secureConfig, TestMethod1Setup);

            //Test(s)
            Assert.AreEqual(expected, null);
        }

        /// <summary>
        /// Modify to mock CRM Organization Service actions
        /// </summary>
        /// <param name="serviceMock">The Organization Service to mock</param>
        /// <returns>Configured Organization Service</returns>
        private static Mock<IOrganizationService> TestMethod1Setup(Mock<IOrganizationService> serviceMock)
        {
            //EntityCollection queryResult = new EntityCollection();
            ////Add created items to EntityCollection

            //serviceMock.Setup(t =>
            //    t.RetrieveMultiple(It.IsAny<QueryExpression>()))
            //    .ReturnsInOrder(queryResult);

            return serviceMock;
        }

        /// <summary>
        /// Invokes the plug-in.
        /// </summary>
        /// <param name="name">Namespace.Class, Assembly</param>
        /// <param name="target">The target entity</param>
        /// <param name="preImage">The pre image</param>
        /// <param name="postImage">The post image</param>
        /// <param name="secureConfig">The secure configuration</param>
        /// <param name="unsecureConfig">The unsecure configuration</param>
        /// <param name="configuredServiceMock">The function to configure the Organization Service</param>
        private static void InvokePlugin(string name, ref Entity target, Entity preImage, Entity postImage,
            string unsecureConfig, string secureConfig, Func<Mock<IOrganizationService>, Mock<IOrganizationService>> configuredServiceMock)
        {
            var testClass = Activator.CreateInstance(Type.GetType(name), unsecureConfig, secureConfig) as IPlugin;

            var serviceMock = new Mock<IOrganizationService>();
            var factoryMock = new Mock<IOrganizationServiceFactory>();
            var tracingServiceMock = new Mock<ITracingService>();
            var pluginContextMock = new Mock<IPluginExecutionContext>();
            var serviceProviderMock = new Mock<IServiceProvider>();

            //Apply configured Organization Service Mock
            if (configuredServiceMock != null)
                serviceMock = configuredServiceMock(serviceMock);

            IOrganizationService service = serviceMock.Object;

            //Organization Service Factory Mock
            factoryMock.Setup(t => t.CreateOrganizationService(It.IsAny<Guid>())).Returns(service);
            var factory = factoryMock.Object;

            //Tracing Service - Content written appears in output
            tracingServiceMock.Setup(t => t.Trace(It.IsAny<string>(), It.IsAny<object[]>())).Callback<string, object[]>(MoqExtensions.WriteTrace);
            var tracingService = tracingServiceMock.Object;

            //Parameter Collections
            ParameterCollection inputParameters = new ParameterCollection { { "Target", target } };
            ParameterCollection outputParameters = new ParameterCollection { { "id", Guid.NewGuid() } };

            //Plug-in Context Mock
            pluginContextMock.Setup(t => t.InputParameters).Returns(inputParameters);
            pluginContextMock.Setup(t => t.OutputParameters).Returns(outputParameters);
            pluginContextMock.Setup(t => t.UserId).Returns(Guid.NewGuid());
            pluginContextMock.Setup(t => t.PrimaryEntityName).Returns(target.LogicalName);

            var pluginContext = pluginContextMock.Object;

            //Service Provider Mock
            serviceProviderMock.Setup(t => t.GetService(It.Is<Type>(i => i == typeof(ITracingService)))).Returns(tracingService);
            serviceProviderMock.Setup(t => t.GetService(It.Is<Type>(i => i == typeof(IOrganizationServiceFactory)))).Returns(factory);
            serviceProviderMock.Setup(t => t.GetService(It.Is<Type>(i => i == typeof(IPluginExecutionContext)))).Returns(pluginContext);
            if (preImage != null)
                pluginContextMock.Setup(t => t.PreEntityImages).Returns(new EntityImageCollection() { new KeyValuePair<string, Entity>("preImage", preImage) });
            if (postImage != null)
                pluginContextMock.Setup(t => t.PostEntityImages).Returns(new EntityImageCollection() { new KeyValuePair<string, Entity>("postImage", postImage) });

            var serviceProvider = serviceProviderMock.Object;

            testClass.Execute(serviceProvider);
        }
    }
}
