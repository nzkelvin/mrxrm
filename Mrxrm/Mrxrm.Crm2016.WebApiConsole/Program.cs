using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Newtonsoft.Json.Linq;
//using Mrxrm.Crm2016.WebApiConsole.Microsoft.Dynamics.CRM;

namespace Mrxrm.Crm2016.WebApiConsole
{
    class Program
    {
        //This was registered in Azure AD as a WEB APPLICATION AND/OR WEB API

        //Azure Application Client ID
        private const string _clientId = "e74b2906-67d7-4b63-b71c-8d9f33b7f0b3";
        // Azure Application REPLY URL - can be anything here but it must be registered ahead of time
        private const string _redirectUrl = "ms-app://mrxrm.demo";
        //CRM URL
        private const string _serviceUrl = "https://k1605.crm6.dynamics.com/";
        //O365 used for authentication w/o login prompt
        private const string _username = "admin@k1605.onmicrosoft.com";
        private const string _password = "pass@word1";
        //Azure Directory OAUTH 2.0 AUTHORIZATION ENDPOINT
        private const string _authority = "https://login.microsoftonline.com/29241de5-a61b-4a9e-80a9-b000fa3758c6/oauth2/authorize";

        private static AuthenticationResult _authResult;

        static void Main(string[] args)
        {
            AuthenticationContext authContext =
                new AuthenticationContext(_authority, false);

            //Prompt for credentials
            //_authResult = authContext.AcquireToken(
            //	_serviceUrl, _clientId, new Uri(_redirectUrl));

            //No prompt for credentials
            UserCredential credentials = new UserCredential(_username, _password);
            _authResult = authContext.AcquireToken(
                _serviceUrl, _clientId, credentials);

            Task.WaitAll(Task.Run(async () => await DoWork()));
        }

        private static async Task DoWork()
        {
            try
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(_serviceUrl);
                    httpClient.Timeout = new TimeSpan(0, 2, 0);
                    httpClient.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
                    httpClient.DefaultRequestHeaders.Add("OData-Version", "4.0");
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));
                    httpClient.DefaultRequestHeaders.Authorization =
                        new AuthenticationHeaderValue("Bearer", _authResult.AccessToken);

                    //Unbound Function
                    //The URL will change in 2016 to include the API version - api/data/v8.0/WhoAmI
                    HttpResponseMessage whoAmIResponse =
                        await httpClient.GetAsync("api/data/v8.1/WhoAmI");
                    Guid userId;
                    if (whoAmIResponse.IsSuccessStatusCode)
                    {
                        JObject jWhoAmIResponse =
                            JObject.Parse(whoAmIResponse.Content.ReadAsStringAsync().Result);
                        userId = (Guid)jWhoAmIResponse["UserId"];
                        Console.WriteLine("WhoAmI " + userId);
                    }
                    else
                        return;

                    //Retrieve 
                    //The URL will change in 2016 to include the API version - api/data/v8.0/systemusers
                    HttpResponseMessage retrieveResponse =
                        await httpClient.GetAsync("api/data/v8.1/systemusers(" +
                        userId + ")?$select=fullname");
                    if (retrieveResponse.IsSuccessStatusCode)
                    {
                        JObject jRetrieveResponse =
                            JObject.Parse(retrieveResponse.Content.ReadAsStringAsync().Result);
                        string fullname = jRetrieveResponse["fullname"].ToString();
                        Console.WriteLine("Fullname " + fullname);
                    }
                    else
                        return;

                    //Create
                    //var testAccount = new Mrxrm.Crm2016.WebApiConsole.Microsoft.Dynamics.CRM.Account()
                    //{
                    //    Name = "Fusion5 Test " + DateTime.Now.ToString(),
                    //    Telephone1 = "04-123-5567"
                    //};

                    //JObject testAcc = new JObject(testAccount);

                    JObject newAccount = new JObject
                    {
                        {"name", "CSharp Test"},
                        {"telephone1", "111-888-7777"}
                    };

                    //The URL will change in 2016 to include the API version - api/data/v8.0/accounts
                    HttpResponseMessage createResponse =
                        await httpClient.SendAsJsonAsync(HttpMethod.Post, "api/data/v8.1/accounts", newAccount);

                    Guid accountId = new Guid();
                    if (createResponse.IsSuccessStatusCode)
                    {
                        string accountUri = createResponse.Headers.GetValues("OData-EntityId").FirstOrDefault();
                        if (accountUri != null)
                            accountId = Guid.Parse(accountUri.Split('(', ')')[1]);
                        Console.WriteLine("Account '{0}' created.", newAccount["name"]);
                    }
                    else
                        return;

                    ////Update 
                    //newAccount.Add("fax", "123-456-7890");

                    ////The URL will change in 2016 to include the API version - api/data/v8.0/accounts
                    //HttpResponseMessage updateResponse =
                    //    await httpClient.SendAsJsonAsync(new HttpMethod("PATCH"), "api/data/accounts(" + accountId + ")", newAccount);
                    //if (updateResponse.IsSuccessStatusCode)
                    //    Console.WriteLine("Account '{0}' updated", newAccount["name"]);

                    ////Delete
                    ////The URL will change in 2016 to include the API version - api/data/v8.0/accounts
                    //HttpResponseMessage deleteResponse =
                    //    await httpClient.DeleteAsync("api/data/accounts(" + accountId + ")");

                    //if (deleteResponse.IsSuccessStatusCode)
                    //    Console.WriteLine("Account '{0}' deleted", newAccount["name"]);

                    Console.ReadLine();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
