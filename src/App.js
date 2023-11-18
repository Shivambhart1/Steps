import "./index.css";
import { useState } from "react";

const messages = [
  "Learn Basics of React ⚛️",
  "Start making projects ",
  "Apply for jobs",
  "Start earning"
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() { if (step > 1) setStep((step) => step - 1); }
  function handleNext() { if(step < 4) setStep((step) => step + 1); }
  function handleClose() { setIsOpen((isOpen) => !isOpen); }

  return (  
    <>
    <button 
      className="close"
      onClick={handleClose}
      >
      &times;
      </button>
    { isOpen && (
      <div className="steps">
        <div className="numbers"> 
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        <div className={`${step >= 4 ? "active" : ""}`}>4</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <Button 
          textColor="#fff"
          bgColor="#7950f2"
          text="Previous" 
          onClick={handlePrevious}
        />
        <Button 
          textColor="#fff"
          bgColor="#7950f2"
          text="Next" 
          onClick={handleNext}
        />
      </div>
      </div>
    )
    }
    </>
  );
}

const Button = ({textColor, bgColor, text, onClick}) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick} 
    >
      {text}
    </button>
  )
}

export default App;
