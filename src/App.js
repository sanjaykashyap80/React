// import logo from './logo.svg';
import { useState } from "react";
import "./styles.css";

function App() {
  // const count = 0
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    // if (count <= 9)
    // setCount(count + value);
    setCount((prev) => {
      if (prev === 10) {
        return 0;
      }
      return prev + value;
    });
  };

  if (count > 10) {
    return <div>Counter reaches to max value</div>;
  }

  return (
    <div className="App">
      <h3>Counter:{count}</h3>
      {/* { count < 10 && (
      <div>
      <button onClick={() => changeCount(1)}>Add 1</button>
      <button onClick={() => changeCount(-1)}>Add -1</button>
      </div>
      )} */}
      <div>
        <button onClick={() => changeCount(1)}>Add 1</button>
        <button onClick={() => changeCount(-1)}>Sub 1</button>
        <div>Counter is {count % 2 === 0 ? "Even" : "Odd"}</div>
      </div>
    </div>
  );
}

export default App;
