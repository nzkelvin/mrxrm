using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Linq;
using Mrxrm.D365.Workflows.Helpers;
using Mrxrm.D365.Workflows.Models;

namespace Mrxrm.D365.Workflows
{
    public class GetFirstChildRecord : CodeActivity
    {
        [Input("Parent Record Dynamic Url")]
        public InArgument<string> ParentRecordDynamicsUrl { get; set; }

        [Input("Child Record Entity Name")]
        [RequiredArgument]
        public InArgument<string> ChildRecordEntityName { get; set; }

        [Input("Child Record Parent Lookup Field Name")]
        [RequiredArgument]
        public InArgument<string> ChildRecordParentLookupFieldName { get; set; }

        [Input("Active Child Record Only")]
        public InArgument<bool> ActiveChildRecordOnly { get; set; }

        [Output("First Child Order Record")]
        [ReferenceTarget("salesorder")]
        public OutArgument<EntityReference> FirstChildOrderRecord { get; set; }

        [Output("All Children Records Count")]
        public OutArgument<int> AllChildrenRecordsCount { get; set; }


        protected override void Execute(CodeActivityContext executionContext)
        {
            ITracingService tracer = executionContext.GetExtension<ITracingService>();
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

            try
            {
                string parentRecordDynamicsUrl = ParentRecordDynamicsUrl.Get<string>(executionContext);
                DynamicUrlParser urlParser = new DynamicUrlParser(parentRecordDynamicsUrl);
                EntityReference parentRecordEntityReference = urlParser.GetEntityReference(service);

                string childRecordEntityName = ChildRecordEntityName.Get<string>(executionContext);
                string childRecordParentLookupFieldName =
                    ChildRecordParentLookupFieldName.Get<string>(executionContext);
                bool? activeChildRecordOnly = ActiveChildRecordOnly?.Get<bool>(executionContext);

                using (var ctx = new CrmServiceContext(service))
                {
                    int allChildrenRecordsCount;
                    EntityReference firstChildRecord = ExecuteGetFirstChildOrderRecord(ctx, parentRecordEntityReference, childRecordEntityName, childRecordParentLookupFieldName,
                        activeChildRecordOnly, out allChildrenRecordsCount, tracer);

                    FirstChildOrderRecord.Set(executionContext, firstChildRecord);
                    AllChildrenRecordsCount.Set(executionContext, allChildrenRecordsCount);
                }
            }
            catch (Exception e)
            {
                throw new InvalidPluginExecutionException(e.Message);
            }
        }

        public EntityReference ExecuteGetFirstChildOrderRecord(CrmServiceContext ctx, EntityReference parentRecordEntityReference, string childRecordEntityName,
            string childRecordParentLookupFieldName, bool? activeChildRecordOnly, out int allChildrenRecordsCount, ITracingService tracer = null)
        {
            allChildrenRecordsCount = 0;

            if (parentRecordEntityReference == null || String.IsNullOrEmpty(childRecordParentLookupFieldName) || String.IsNullOrEmpty(childRecordEntityName))
                return null;

            tracer?.Trace($"Parent entity logic name: {parentRecordEntityReference.LogicalName}, id: {parentRecordEntityReference.Id}.");
            tracer?.Trace($"Child Record Entity Name: {childRecordEntityName}");

            bool activeOnly = activeChildRecordOnly == null ? false : activeChildRecordOnly.Value;

            var query = ctx.CreateQuery(childRecordEntityName)
                .Where(
                    o => ((EntityReference)o[childRecordParentLookupFieldName]).Id == parentRecordEntityReference.Id);

            if (activeOnly)
            {
                query = query.Where(x => (int)x["statecode"] == 0);
            }

            var childrenRecords =
                query
                    .Select(c => c)
                    .ToList();

            if (childrenRecords.Count == 0) return null;

            return childrenRecords.FirstOrDefault()?.ToEntityReference();
        }
    }
}
