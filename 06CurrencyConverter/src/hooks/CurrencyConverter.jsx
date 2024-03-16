import { useState } from 'react';
import currencyConversions from './currency-conversions.json';

function CurrencyConverter() {
  // State variables
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Function to handle currency conversion
  const convertCurrency = () => {
    if (amount && currencyConversions[fromCurrency] && currencyConversions[fromCurrency][toCurrency]) {
      const conversionRate = currencyConversions[fromCurrency][toCurrency];
      const convertedValue = parseFloat(amount) * conversionRate;
      setConvertedAmount(convertedValue.toFixed(2)); // Round to 2 decimal places
    } else {
      // Handle error if conversion rates are not available
      setConvertedAmount('Error: Conversion not available');
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor='amount'>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {Object.keys(currencyConversions).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {Object.keys(currencyConversions[fromCurrency]).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div>
        <h2>Converted Amount: {convertedAmount}</h2>
      </div>
    </div>
  );
}

export default CurrencyConverter;
