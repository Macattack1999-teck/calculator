import './App.css';
import CalculatorContainer from './Components/CalculatorContainer';

function App() {
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
