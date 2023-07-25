import { useState } from "react";

import Square from "./Square";
import ColorForm from "./ColorForm";

function App() {
  const [squareColor, setSquareColor] = useState('')

  return (
    <div className="App">
      <Square
        squareColor={squareColor}
      />
      <ColorForm
        squareColor={squareColor}
        setSquareColor={setSquareColor}
      />
    </div>
  );
}

export default App;
