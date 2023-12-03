import React, { useState } from 'react';

const Currency = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Enter a valid value.');
      return;
    }

    // Dönüşüm oranları
    const usdToEurRate = 0.85;
    const eurToUsdRate = 1.18;
    const usdToTryRate = 28.92;
    const tryToUsdRate = 1 / usdToTryRate;
    const eurToTryRate = 31.46;
    const tryToEurRate = 1 / eurToTryRate;

    let convertedValue = 0;

    if (fromCurrency === 'USD' && toCurrency === 'EUR') {
      convertedValue = inputValueFloat * usdToEurRate;
    } else if (fromCurrency === 'USD' && toCurrency === 'TRY') {
      convertedValue = inputValueFloat * usdToTryRate;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
      convertedValue = inputValueFloat * eurToUsdRate;
    } else if (fromCurrency === 'EUR' && toCurrency === 'TRY') {
      convertedValue = inputValueFloat * eurToTryRate;
    } else if (fromCurrency === 'TRY' && toCurrency === 'USD') {
      convertedValue = inputValueFloat * tryToUsdRate;
    } else if (fromCurrency === 'TRY' && toCurrency === 'EUR') {
      convertedValue = inputValueFloat * tryToEurRate;
    } else {
      convertedValue = inputValueFloat;
    }

    setResult(`${inputValueFloat} ${fromCurrency} = ${convertedValue.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-2 w-full"
        placeholder="Enter a number"
      />
      <div className="flex mb-2">
        <select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          className="border p-2 mr-2 w-1/2"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <span className="text-xl">→</span>
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          className="border p-2 ml-2 w-1/2"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
      </div>
      <button
        onClick={convertCurrency}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Currency;
