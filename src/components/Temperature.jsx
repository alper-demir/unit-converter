import React, { useState } from 'react';

const Temperature = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('celsius');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const convertTemperature = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Enter a valid value.');
      return;
    }

    const conversionFactors = {
      celsius: {
        celsius: 1,
        fahrenheit: (c) => (c * 9 / 5) + 32,
        kelvin: (c) => c + 273.15,
      },
      fahrenheit: {
        celsius: (f) => (f - 32) * 5 / 9,
        fahrenheit: 1,
        kelvin: (f) => (f - 32) * 5 / 9 + 273.15,
      },
      kelvin: {
        celsius: (k) => k - 273.15,
        fahrenheit: (k) => (k - 273.15) * 9 / 5 + 32,
        kelvin: 1,
      },
    };

    const convertedValue = conversionFactors[fromUnit][toUnit](inputValueFloat);
    setResult(`${inputValueFloat} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Temperature Converter</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-2 w-full"
        placeholder="Enter a number"
      />
      <div className="flex mb-2">
        <select
          value={fromUnit}
          onChange={handleFromUnitChange}
          className="border p-2 mr-2 w-1/2"
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <span className="text-xl">→</span>
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="border p-2 ml-2 w-1/2"
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <button
        onClick={convertTemperature}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Temperature;
