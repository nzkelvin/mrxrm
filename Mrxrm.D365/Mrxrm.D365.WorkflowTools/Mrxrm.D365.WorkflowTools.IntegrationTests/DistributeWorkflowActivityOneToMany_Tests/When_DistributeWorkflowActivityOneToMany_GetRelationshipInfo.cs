using System;
using System.Configuration;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.IdentityModel.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Tooling.Connector;
using Mrxrm.D365.WorkflowTools.Mrxrm.D365.WorkflowTools;

namespace Mrxrm.D365.WorkflowTools.IntegrationTests.DistributeWorkflowActivityOneToMany_Tests
{
    [TestClass]
    public class When_DistributeWorkflowActivityOneToMany_GetRelationshipInfo
    {
        [TestMethod]
        public void Given_WhoAmITest_Then_FindUserId()
        {
            string connStr = ConfigurationManager.ConnectionStrings["Xrm"]?.ConnectionString;
            var client = new CrmServiceClient(connStr);
            var req = new WhoAmIRequest();

            // Action
            var resp = (WhoAmIResponse)client.Execute(req);

            // Assert
            Assert.IsNotNull(resp.UserId);
        }

        [TestMethod]
        public void When_AccountContactRelationship_Then_CorrectReferencingEntityFound()
        {
            string connStr = ConfigurationManager.ConnectionStrings["Xrm"]?.ConnectionString;
            var client = new CrmServiceClient(connStr);

            var wfActivity = new DistributeWorkflowActivityOneToMany();
            
            // Action
            var relationshipInfo = wfActivity.GetRelationshipInfo("contact_customer_accounts", client.OrganizationServiceProxy);

            // Assert
            Assert.AreEqual("contact", relationshipInfo.ReferencingEntity);
        }
    }
}
