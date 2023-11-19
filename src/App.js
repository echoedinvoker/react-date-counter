import { useState } from "react";

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(1)

  const date = new Date()
  date.setDate(date.getDay() + count)

  function handleMinusStep() {
    setStep((s) => s - 1)
  }
  function handlePlusStep() {
    setStep((s) => s + 1)
  }
  function handleMinusCount() {
    setCount((s) => s - step)
  }
  function handlePlusCount() {
    setCount((s) => s + step)
  }
  function handleReset() {
    setStep(1)
    setCount(1)
  }


  return (
    <>
      <div>
        <input type="range" min="1" max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span> {step} </span>
      </div >
      <div>
        <button onClick={handleMinusCount}>-</button>
        <input type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={handlePlusCount}>+</button>
      </div >
      <div>{
        `${count === 0 ? '' : Math.abs(count)} ${count > 0 ? 'count from today' : (
          count < 0 ? 'count ago' : 'Today'
        )} is ${new Date(date).toDateString()}`}</div>
      {(step !== 1 || count !== 1) &&
        <button onClick={handleReset}>Reset</button>}
    </>
  );
}

export default App;
