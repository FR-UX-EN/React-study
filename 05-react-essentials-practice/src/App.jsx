import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Table from "./components/Table.jsx";
import { useState } from "react";

const INITIAL_FIGURES = {
  initialInvestment: '10000',
  annualInvestment: '1200',
  expectedReturn: '6',
  duration: '10',
}

function App() {
  const [figures, setFigures] = useState(INITIAL_FIGURES);

  function handleFiguresChange(updatedFigures) {
    setFigures(prevFigures => {
      return { ...updatedFigures }
    });
  }

  return (
    <>
      <Header />
      <UserInput numbers={figures} onChange={handleFiguresChange} />
      <Table numbers={figures} />
    </>
  );
}

export default App;
