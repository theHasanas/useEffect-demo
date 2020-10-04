import React, { useState } from "react";

const frankfurterAPI = "api.frankfurter.app";
const EUR = "EUR";
const GBP = "GBP";

function App() {
  const [currency, setCurrency] = useState(EUR);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  function handleCurrencyChange(event) {
    setCurrency(event.currentTarget.value);
  }

  function handleAmountChange(event) {
    if (event.target.validity.valid)
      setAmount(parseInt(event.target.value) || 0);
  }

  function convertAmount() {
    fetch(
      `https://${frankfurterAPI}/latest?amount=${amount}&from=${currency}&to=USD`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setConvertedAmount(data.rates.USD);
      });
  }

  return (
    <div>
      <h1>EXCHANGED</h1>

      <div>
        <h4>Currency</h4>
        <label>
          <span role="img" aria-label="European Union flag">
            🇪🇺
          </span>
          <input
            type="radio"
            value={EUR}
            checked={currency === EUR}
            onChange={handleCurrencyChange}
          />
        </label>
        <label>
          <span role="img" aria-label="Union Jack flag">
            🇬🇧
          </span>
          <input
            type="radio"
            value={GBP}
            checked={currency === GBP}
            onChange={handleCurrencyChange}
          />
        </label>

        <input value={amount} onChange={handleAmountChange} pattern="[0-9]*" />
      </div>

      <div>
        <h4>In US Dollars</h4>
        <p>
          <span role="img" aria-label="United States flag">
            🇺🇸
          </span>
          <input readOnly={true} value={convertedAmount} />
        </p>
      </div>
      <button onClick={convertAmount}>Convert</button>
    </div>
  );
}

export default App;
