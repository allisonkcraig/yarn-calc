import "../style/App.css";
import YardageCalc from "./YardageCalc.tsx";
import GaugeCalc from "./GaugeCalc.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helpful Knitting & Crochet Calculators</h1>
      </header>
      <div className="App-calc-container">
        <YardageCalc />
        <GaugeCalc />
      </div>
    </div>
  );
}

export default App;
