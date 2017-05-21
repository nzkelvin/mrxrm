using System;
using System.Collections.Generic;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;

namespace Mrxrm.D365.WorkflowTools.Mrxrm.D365.WorkflowTools
{
    public interface IDistributeWorkflowActivity
    {
        //IEnumerable<Guid> GetKeys(IOrganizationService orgService);
    }

    public static class DistributeWorkflowActivityExtensions
    {
        public static void Distribute(this IDistributeWorkflowActivity activity, Guid workflowId, IEnumerable<Guid> keys, IOrganizationService orgService, ITracingService tracer)
        {
            foreach (var key in keys)
            {
                ExecuteWorkflowRequest req = new ExecuteWorkflowRequest()
                {
                    EntityId = key,
                    WorkflowId = workflowId
                };

                var resp = (ExecuteWorkflowResponse)orgService.Execute(req);
                tracer.Trace($"A system job {resp.Id} is created for the workflow {workflowId}");
            }
        }
    }
}