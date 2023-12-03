import React, { useState } from 'react';

const Weight = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kilogram');
  const [toUnit, setToUnit] = useState('kilogram');
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

  const convertWeight = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Enter a valid value.');
      return;
    }

    const conversionFactors = {
      kilogram: {
        kilogram: 1,
        dekagram: 100,
        gram: 1000,
        santigram: 10000,
        miligram: 1000000,
      },
      dekagram: {
        kilogram: 0.01,
        dekagram: 1,
        gram: 10,
        santigram: 100,
        miligram: 1000,
      },
      gram: {
        kilogram: 0.001,
        dekagram: 0.1,
        gram: 1,
        santigram: 10,
        miligram: 1000,
      },
      santigram: {
        kilogram: 0.0001,
        dekagram: 0.01,
        gram: 0.1,
        santigram: 1,
        miligram: 100,
      },
      miligram: {
        kilogram: 1e-6,
        dekagram: 1e-5,
        gram: 0.001,
        santigram: 0.01,
        miligram: 1,
      },
    };

    const convertedValue = inputValueFloat * conversionFactors[fromUnit][toUnit];
    setResult(`${inputValueFloat} ${fromUnit} = ${convertedValue} ${toUnit}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Weight Converter</h2>
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
          <option value="kilogram">Kilogram</option>
          <option value="dekagram">Dekagram</option>
          <option value="gram">Gram</option>
          <option value="santigram">Centigram</option>
          <option value="miligram">Milligram</option>
        </select>
        <span className="text-xl">→</span>
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="border p-2 ml-2 w-1/2"
        >
          <option value="kilogram">Kilogram</option>
          <option value="dekagram">Dekagram</option>
          <option value="gram">Gram</option>
          <option value="santigram">Centigram</option>
          <option value="miligram">Milligram</option>
        </select>
      </div>
      <button
        onClick={convertWeight}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Weight;
