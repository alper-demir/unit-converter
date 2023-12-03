import React, { useState } from 'react';

const Length = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kilometer');
  const [toUnit, setToUnit] = useState('kilometer');
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

  const convertLength = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setResult('Enter a valid value.');
      return;
    }

    const conversionFactors = {
      kilometer: 1,
      meter: 1000,
      centimeter: 100000,
      millimeter: 1e6,
    };

    const convertedValue = (inputValueFloat * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    setResult(`${inputValueFloat} ${fromUnit} = ${convertedValue} ${toUnit}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Length Converter</h2>
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
          <option value="kilometer">Kilometer</option>
          <option value="meter">Meter</option>
          <option value="centimeter">Centimeter</option>
          <option value="millimeter">Millimeter</option>
        </select>
        <span className="text-xl">→</span>
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="border p-2 ml-2 w-1/2"
        >
          <option value="kilometer">Kilometer</option>
          <option value="meter">Meter</option>
          <option value="centimeter">Centimeter</option>
          <option value="millimeter">Millimeter</option>
        </select>
      </div>
      <button
        onClick={convertLength}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Convert
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Length;
