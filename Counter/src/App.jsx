import { useRef } from "react";
import { useState } from "react";
import "./assets/css/App.css";

function App() {
  const interval1 = useRef();
  const interval2 = useRef();
  const activeChecker = useRef();
  const [num, setnum] = useState(0);
  const color = Math.round(Math.random() * 1000);

  const plus = () => setnum((prev) => prev + 1);
  const minus = () => setnum((prev) => prev - 1);

  const plusInfinite = () => {
    interval1.current = setInterval(() => setnum((prev) => prev + 1), 200);
    activeChecker.current.style.boxShadow = "#000000 0px 0px 10px 1px inset";
  };

  const plusStop = () => {
    clearInterval(interval1.current);
    activeChecker.current.style.boxShadow = "#000000 0px 0px 20px 1px";
  };

  const minusInfinite = () => {
    interval2.current = setInterval(() => setnum((prev) => prev - 1), 200);
    activeChecker.current.style.boxShadow = "#000000 0px 0px 10px 1px inset";
  };

  const minusStop = () => {
    clearInterval(interval2.current);
    activeChecker.current.style.boxShadow = "#000000 0px 0px 20px 1px";
  };

  return (
    <>
      <div className="container" style={{ background: `#${color}` }}>
        <div className="counter" ref={activeChecker}>
          <button
            className="buttons"
            onClick={minus}
            onMouseDown={minusInfinite}
            onMouseUp={minusStop}
          >
            -
          </button>
          <div className="count">{num >= 0 ? num : setnum(0)}</div>
          <button
            className="buttons"
            onClick={plus}
            onMouseDown={plusInfinite}
            onMouseUp={plusStop}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
