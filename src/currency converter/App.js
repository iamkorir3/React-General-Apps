import { useEffect, useState } from "react";

export default function App() {
  const [amount, setCurrency] = useState(1);
  const [output, setOutput] = useState("");
  const [firstCunrrency, setFirstCunrrency] = useState("USD");
  const [secondCunrrency, setSecondCunrrency] = useState("EUR");

  function logValues() {
    console.log(amount);
    console.log(firstCunrrency);
    console.log(secondCunrrency);
  }

  useEffect(
    function () {
      async function getCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCunrrency}&to=${secondCunrrency}`
        );

        const data = await res.json();
        console.log(data.Search);
        setOutput(data);
      }
      getCurrency();
    },
    [amount, firstCunrrency, secondCunrrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <select
        value={firstCunrrency}
        onChange={(e) => setFirstCunrrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCunrrency}
        onChange={(e) => setSecondCunrrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {/* <button onClick={logValues}>LOG</button> */}
      {/* <p>{output}</p> */}
    </div>
  );
}

//`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
