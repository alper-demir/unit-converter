// src/AreaConverter.js
import React, { useState } from 'react';

const areaUnits = {
  squareKilometer: 'Squarekilometer',
  hectare: 'Squarehectometer',
  squareDecameter: 'Decametersquared',
  squareMeter: 'Squaremeters',
  squareDecimeter: 'Squaredecimeter',
  squareCentimeter: 'Squarecentimeter',
  squareMillimeter: 'Squaremillimeter',
};

const conversionFactors = {
  squareKilometer: 1e6,
  hectare: 1e4,
  squareDecameter: 1e2,
  squareMeter: 1,
  squareDecimeter: 1e-2,
  squareCentimeter: 1e-4,
  squareMillimeter: 1e-6,
};

function Area() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('squareMeter');
  const [toUnit, setToUnit] = useState('squareMeter');
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

  const convertArea = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Enter a valid value.');
      return;
    }

    const convertedValue = (inputValueFloat * conversionFactors[fromUnit]) / conversionFactors[toUnit];
    setResult(`${inputValueFloat} ${areaUnits[fromUnit]} = ${convertedValue} ${areaUnits[toUnit]}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Area Converter</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-2 w-full"
        placeholder="Enter a value"
      />
      <div className="flex mb-2">
        <select
          value={fromUnit}
          onChange={handleFromUnitChange}
          className="border p-2 mr-2 w-2/3"
        >
          {Object.keys(areaUnits).map((unit) => (
            <option key={unit} value={unit}>
              {areaUnits[unit]}
            </option>
          ))}
        </select>
        <span className="text-xl">→</span>
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="border p-2 ml-2 w-2/3"
        >
          {Object.keys(areaUnits).map((unit) => (
            <option key={unit} value={unit}>
              {areaUnits[unit]}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={convertArea}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
}

export default Area;
