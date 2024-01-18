import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
]

function App() {

  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  function handlePrevious() {
    if (step > 1)
      setStep(step - 1);
  }

  function handleNext() {
    if (step < 3)
      setStep(step + 1);
  }

  function handleShow() {
    setShow(!show);
  }

  return <>
    <button className="close" onClick={handleShow}>&times;</button>
    {show && (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <div className="message">Step {step}: {messages[step - 1]}</div>
        <div className="buttons">
          <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious} text="Previous" />
          <Button bgColor="#7950f2" color="#fff" onClick={handleNext} text="Next" />
        </div>
      </div>
    )
    }
  </>
}

function Button({ bgColor, color, onClick, text }) {
  return <button style={{ backgroundColor: bgColor, color: color }} onClick={onClick}>
    {text}
  </button>;
}

export default App;
