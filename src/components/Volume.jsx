import React, { useState } from 'react';

const Volume = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cubicKilometer');
  const [toUnit, setToUnit] = useState('cubicKilometer');
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

  const convertVolume = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Lütfen geçerli bir sayı girin.');
      return;
    }

    const conversionFactors = {
      cubicKilometer: {
        cubicKilometer: 1,
        cubicMeter: 1e12,
        cubicCentimeter: 1e18,
      },
      cubicMeter: {
        cubicKilometer: 1e-12,
        cubicMeter: 1,
        cubicCentimeter: 1e6,
      },
      cubicCentimeter: {
        cubicKilometer: 1e-18,
        cubicMeter: 1e-6,
        cubicCentimeter: 1,
      },
    };

    const convertedValue = inputValueFloat * conversionFactors[fromUnit][toUnit];
    setResult(`${inputValueFloat} ${fromUnit} = ${convertedValue} ${toUnit}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Volume Converter</h2>
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
          <option value="cubicKilometer">Cubic Kilometer</option>
          <option value="cubicMeter">Cubic Meter</option>
          <option value="cubicCentimeter">Cubic Centimeter</option>
        </select>
        <span className="text-xl">→</span>
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="border p-2 ml-2 w-1/2"
        >
          <option value="cubicKilometer">Cubic Kilometer</option>
          <option value="cubicMeter">Cubic Meter</option>
          <option value="cubicCentimeter">Cubic Centimeter</option>
        </select>
      </div>
      <button
        onClick={convertVolume}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Volume;
