using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Mrxrm.Crm2016.WebApiSamples.Auth
{
    /// <summary>
    /// Reference: http://jlattimer.blogspot.co.nz/2015/11/crm-web-api-using-c.html
    /// ToDo: Working with Codegen.
    /// Todo: make me remove the webapiconsole project?
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            string baseApiDataUrl = "https://k1610.api.crm6.dynamics.com/api/data/v8.1/";

            //OAuth Prep
            AuthenticationParameters ap = AuthenticationParameters.CreateFromResourceUrlAsync(
                new Uri(baseApiDataUrl)).Result;
            String authorityUrl = ap.Authority;
            String resourceUrl = ap.Resource;

            AuthenticationContext authCtx = new AuthenticationContext(authorityUrl);
            UserCredential credential = new UserPasswordCredential("admin@k1610.onmicrosoft.com", "pass@word1");

            // Refresh Token
            string clientId = "2ad88395-b77d-4561-9441-d0e40824f9bc"; // really? All crm online client IDs are the same?
            Task<AuthenticationResult> response = authCtx.AcquireTokenAsync(resourceUrl, clientId, credential);
            response.Wait();

            string token = String.Empty;
            if (response.IsCompleted) token = response.Result.AccessToken;
            else throw response.Exception;

            // Build request
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(baseApiDataUrl);//new Uri(resourceUrl);
                    client.Timeout = new TimeSpan(0, 2, 0);
                    client.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
                    client.DefaultRequestHeaders.Add("OData-Version", "4.0");
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    // Send request
                    Task<HttpResponseMessage> whoAmIResponseTask = client.GetAsync("WhoAmI"); //https://k1610.api.crm6.dynamics.com/api/data/v8.1/WhoAmI
                    whoAmIResponseTask.Wait();
                    // Process result
                    if (whoAmIResponseTask.IsCompleted)
                    {
                        if (whoAmIResponseTask.Result.IsSuccessStatusCode)
                        {
                            JObject jwhoAmIResponse = JObject.Parse(whoAmIResponseTask.Result.Content.ReadAsStringAsync().Result);
                            Guid userId = (Guid)jwhoAmIResponse["UserId"];
                            Console.WriteLine("WhoAmI " + userId);
                        }
                    }
                    else throw whoAmIResponseTask.Exception;
                }
            }
            catch (Exception ex)
            {
                throw;
            }

            Console.Read();
        }
    }
}
