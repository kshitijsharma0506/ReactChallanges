import "./style.css";
import { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(0);

  const startTimer = () => {
    setIsRunning(true);
    timeRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    //    timeRef.current = 0;
  };
  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTimer(0);
    //  timeRef.current = 0;
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.floor(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
