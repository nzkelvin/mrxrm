using System;
using System.Configuration;
using System.Linq;
using System.ServiceModel.Description;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.IdentityModel.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Tooling.Connector;
using Mrxrm.D365.WorkflowTools.Mrxrm.D365.WorkflowTools;

namespace Mrxrm.D365.WorkflowTools.IntegrationTests.DistributeWorkflowActivityOneToMany_Tests
{
    [TestClass]
    public class When_DistributeWorkflowActivityOneToMany_GetKeys
    {
        [TestMethod]
        public void When_AccountContactRelationship_Then_CorrectReferencingEntityFound()
        {
            string connStr = ConfigurationManager.ConnectionStrings["Xrm"]?.ConnectionString;
            var client = new CrmServiceClient(connStr);

            var wfActivity = new DistributeWorkflowActivityOneToMany();
            
            // Action
            var keys = wfActivity.GetKeys(
                new Guid("619DAD21-0A3E-E711-810B-C4346BC540C4"), // Alpine Ski House. It has two children contacts.
                "contact_customer_accounts", 
                client.OrganizationServiceProxy);

            // Assert
            Assert.IsTrue(keys.Any());
        }
    }
}
