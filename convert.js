
const fetch = require("node-fetch");

const convert = async args => {
   try {
      const supportedCurrencies = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"]

      let initialValue, baseCurrency, convertedCurrency;

      args[0] ? initialValue = args[0].toUpperCase() : initialValue = 'HELP'
      args[1] ? baseCurrency = args[1].toUpperCase() : baseCurrency = ''
      args[2] ? convertedCurrency = args[2].toUpperCase() : convertedCurrency = ''

      if (initialValue === 'HELP') {
         console.log(`to use command: 'node convert [amount] [base currency] [target currency]'`)
         console.log(`Supported currencies (ISO Codes) \n AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR, ISK, JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RUB, SEK, SGD, THB, TRY, USD, ZAR`)
      } else if (initialValue === 'INFO') {
         console.log(`Information gathered from: https://api.exchangeratesapi.io.`)
      } else if (!(supportedCurrencies.includes(convertedCurrency) && supportedCurrencies.includes(baseCurrency))) {
         console.log("Error, invalid currency type.")
      } else {
         initialValue = parseFloat(initialValue);
         const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)

         const data = await res.json();
         let exchangeRate
         switch (convertedCurrency) {
            case "CAD": exchangeRate = data.rates.CAD; break;
            case "HKD": exchangeRate = data.rates.HKD; break;
            case "ISK": exchangeRate = data.rates.ISK; break;
            case "PHP": exchangeRate = data.rates.PHP; break;
            case "DKK": exchangeRate = data.rates.DNK; break;
            case "HUF": exchangeRate = data.rates.HUF; break;
            case "CZK": exchangeRate = data.rates.CZK; break;
            case "GBP": exchangeRate = data.rates.GBP; break;
            case "RON": exchangeRate = data.rates.RON; break;
            case "SEK": exchangeRate = data.rates.SEK; break;
            case "IDR": exchangeRate = data.rates.IDR; break;
            case "INR": exchangeRate = data.rates.INR; break;
            case "BRL": exchangeRate = data.rates.BRL; break;
            case "RUB": exchangeRate = data.rates.RUB; break;
            case "HRK": exchangeRate = data.rates.HRK; break;
            case "JPY": exchangeRate = data.rates.JPY; break;
            case "THB": exchangeRate = data.rates.THB; break;
            case "CHF": exchangeRate = data.rates.CHF; break;
            case "EUR": exchangeRate = data.rates.EUR; break;
            case "MYR": exchangeRate = data.rates.MYR; break;
            case "BGN": exchangeRate = data.rates.BGN; break;
            case "TRY": exchangeRate = data.rates.TRY; break;
            case "CNY": exchangeRate = data.rates.CNY; break;
            case "NOK": exchangeRate = data.rates.NOK; break;
            case "NZD": exchangeRate = data.rates.NZD; break;
            case "ZAR": exchangeRate = data.rates.ZAR; break;
            case "USD": exchangeRate = data.rates.USD; break;
            case "MXN": exchangeRate = data.rates.MXN; break;
            case "SGD": exchangeRate = data.rates.SGD; break;
            case "AUD": exchangeRate = data.rates.AUD; break;
            case "ILS": exchangeRate = data.rates.ILS; break;
            case "KRW": exchangeRate = data.rates.KRW; break;
            case "PLN": exchangeRate = data.rates.PLN; break;
         }
         const convertedValue = initialValue * exchangeRate;
         console.log(`${initialValue.toFixed(2)} ${baseCurrency} = ${convertedValue.toFixed(2)} ${convertedCurrency}`)
      }
   } catch (error) {
      console.log('Sorry, something went wrong.')
   }
}

const args = process.argv.slice(2)
convert(args)