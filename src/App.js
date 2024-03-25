import { useState } from "react";
import * as math from "mathjs";
import "./App.css";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState("");
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const calculate = () => {
    if (currentInput === "") {
      setResult("Error");
    }

    if (currentInput === "0/0") {
      setResult("NaN");
    }

    if (
      currentInput.includes("+") ||
      currentInput.includes("-") ||
      currentInput.includes("*") ||
      currentInput.includes("/")
    ) {
      try {
        const evaluatedResult = math.evaluate(currentInput);
        setResult(evaluatedResult);
      } catch (err) {
        setResult("Infinity");
      }
    }
  };

  const handleButtonClick = (value) => {
    setCurrentInput((prevInput) => prevInput.concat(value));
    setIsEqualClicked(false);
  };

  const handleEqualClick = () => {
    calculate();
    setIsEqualClicked(true);
  };

  const handleClearClick = () => {
    setCurrentInput("");
    setResult("");
    setIsEqualClicked(false);
  };

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          className="input"
        />
        {isEqualClicked && <div className="output">{result}</div>}
        <div className="calc_grid_container">
          {/* row-1 */}
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          {/* row-2 */}
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          {/* row-3 */}
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          {/* row-4 */}
          <button onClick={() => handleClearClick()}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button type="submit" onClick={() => handleEqualClick()}>
            =
          </button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </form>
    </div>
  );
}

export default App;