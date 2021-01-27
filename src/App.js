import logo from './logo.svg';
import './App.css';
import { useContext } from 'react'
import OperationContext from './Contexts/OperationContext';
import ButtonsContainer from './Components/ButtonsContainer';
import CalculatorContainer from './Components/CalculatorContainer';

function App() {
  const {
    operation
  } = useContext(OperationContext)

  return (
    <div className="App" style={{ 
        background: "#1d1d1d", height: "100%", width: "100%", minHeight: "100vh", minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <CalculatorContainer />
    </div>
  );
}

export default App;
