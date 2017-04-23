using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Mrxrm.D365.AzureWebJob.CurrencyUpdate
{
    public interface ICurrencyExchanger
    {
        Dictionary<string, string> GetExchangeRates();
    }

    public class CurrencyExchanger : ICurrencyExchanger
    {
        public Dictionary<string, string> GetExchangeRates()
        {
            Dictionary<string, string> exchangeRates = Task.Run(new Func<Task<Dictionary<string, string>>>(async () =>
                {
                    HttpClient client = new HttpClient();
                    var response = await client.GetAsync(
                        @"https://openexchangerates.org/api/latest.json?app_id=a63ef4b679e84b29a560141286fcb7da");
                    if (response.IsSuccessStatusCode)
                    {
                        var result = await response.Content.ReadAsStringAsync();
                        JObject jResult = JObject.Parse(result);
                        var rates = JsonConvert.DeserializeObject<Dictionary<string, string>>(jResult["rates"].ToString());

                        return rates;
                    }

                    return null;
                }))
                .GetAwaiter()
                .GetResult();

            return exchangeRates;
        }
    }
}