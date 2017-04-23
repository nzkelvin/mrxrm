using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Ninject;

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

            //IoC
            var kernel = new Ninject.StandardKernel();
            kernel.Bind<ICurrencyExchanger>().To<CurrencyExchanger>();

            Execute(kernel.Get<ICurrencyExchanger>());


        }

        public static void Execute(ICurrencyExchanger exchanger)
        {
            var exchangeRates = exchanger.GetExchangeRates();

            foreach (var rate in exchangeRates)
            {
                Console.WriteLine($"{rate.Key}: {rate.Value}");
            }
        }
    }
}
