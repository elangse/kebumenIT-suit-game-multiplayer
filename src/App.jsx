import { useState } from "react";
import Home from "./Route/Home/Home";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
