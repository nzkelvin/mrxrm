using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Mrxrm.D365.AzureWebJob.CurrencyUpdate
{
    // To learn more about Microsoft Azure WebJobs SDK, please see https://go.microsoft.com/fwlink/?LinkID=320976
    class Program
    {
        // Please set the following connection strings in app.config for this WebJob to run:
        // AzureWebJobsDashboard and AzureWebJobsStorage
        // !important! Those two connection strings should be manually added to Azure portal.
        static void Main()
        {
            var config = new JobHostConfiguration();

            if (config.IsDevelopment)
            {
                config.UseDevelopmentSettings();
            }

            Console.WriteLine("Start Currency Update");

            // Todo: move to a class and IoC it.
            Dictionary<string, string> exchangeRates = Task.Run(new Func<Task<Dictionary<string, string>>>(async () =>
            {
                HttpClient client = new HttpClient();
                var response = await client.GetAsync(@"https://openexchangerates.org/api/latest.json?app_id=a63ef4b679e84b29a560141286fcb7da");
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    JObject jResult = JObject.Parse(result);
                    var rates = JsonConvert.DeserializeObject<Dictionary<string, string>>(jResult["rates"].ToString());

                    return rates;
                }

                return null;
            })).GetAwaiter().GetResult();

            foreach (var rate in exchangeRates)
            {
                Console.WriteLine($"{rate.Key}: {rate.Value}");
            }
        }
    }
}
