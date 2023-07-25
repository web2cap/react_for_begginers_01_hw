import { useState } from "react";

import Square from "./Square";
import ColorForm from "./ColorForm";

function App() {
  const [squareColor, setSquareColor] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        squareColor={squareColor}
        isDarkText={isDarkText}
      />
      <ColorForm
        squareColor={squareColor}
        setSquareColor={setSquareColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
