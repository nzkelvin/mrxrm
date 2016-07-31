using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Site.App_Logic.Repositories
{
    public interface IAccountRepository { }

    public class AccountRepository : IAccountRepository
    {
        private readonly IOrganizationService _service;

        public AccountRepository(IOrganizationService service)
        {
            _service = service;
        }

        public IEnumerable<Entity> RetrieveMultiple()
        {
            var query = new QueryExpression("account")
            {
                ColumnSet = new ColumnSet("name")
            };

            //var filter = new FilterExpression(LogicalOperator.And);
            //filter.AddCondition("state", ConditionOperator.Equal, 0);
            //query.Criteria.AddFilter(filter);

            query.Distinct = true;

            return _service.RetrieveMultiple(query).Entities;
        }
    }
}