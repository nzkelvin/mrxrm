using System.Linq;
using Microsoft.Xrm.Sdk;

namespace Mrxrm.D365.Workflows.Models
{
    public interface ICrmServiceContext
    {
        /// <summary>
        /// Gets a binding to the set of all <see cref="Mrxrm.D365.Workflows.Models.Contact"/> entities.
        /// </summary>
        System.Linq.IQueryable<Mrxrm.D365.Workflows.Models.Contact> ContactSet { [System.Diagnostics.DebuggerNonUserCode()] get; }

        /// <summary>
        /// Gets a binding to the set of all <see cref="Mrxrm.D365.Workflows.Models.Quote"/> entities.
        /// </summary>
        System.Linq.IQueryable<Mrxrm.D365.Workflows.Models.Quote> QuoteSet { [System.Diagnostics.DebuggerNonUserCode()] get; }

        /// <summary>
        /// Gets a binding to the set of all <see cref="Mrxrm.D365.Workflows.Models.SalesOrder"/> entities.
        /// </summary>
        System.Linq.IQueryable<Mrxrm.D365.Workflows.Models.SalesOrder> SalesOrderSet { [System.Diagnostics.DebuggerNonUserCode()] get; }

        IQueryable<Entity> CreateQuery(string entityLogicalName);
        OrganizationResponse Execute(OrganizationRequest request);
    }
}