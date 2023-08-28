import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  const clear = () => {
    setResult('');
  }

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="buttons">
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        {/* Rest of the buttons */}
      </div>
      <button className="equal" onClick={calculate}>=</button>
      <button className="clear" onClick={clear}>Clear</button>
    </div>
  );
}

export default Calculator;