using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;

namespace Mrxrm.Crm2016.Katas.CalculateDiscountWF
{
    public class WorkflowClass1 : CodeActivity
    {
        [Input("Country Code")]
        public InArgument<string> CountryCode { get; set; }

        [Output("Discount")]
        public OutArgument<int> Discount { get; set; }


        protected override void Execute(CodeActivityContext executionContext)
        {
            ITracingService tracer = executionContext.GetExtension<ITracingService>();
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

            try
            {
                Entity entity = (Entity)context.InputParameters["Target"];

                //TODO: Do stuff
                //executionContext.GetValue(CountryCode);
                var countryCode = CountryCode.Get(executionContext);


            }
            catch (Exception e)
            {
                throw new InvalidPluginExecutionException(e.Message);
            }
        }
    }
}
