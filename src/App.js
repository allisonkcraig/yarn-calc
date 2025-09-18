import './App.css';
import YardageCalc from './YardageCalc';
import GaugeCalc from './GaugeCalc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Helpful Knitting and Crochet Calculators</h1>
      <div className="App-calc-container">
        <YardageCalc/>
        <GaugeCalc/>
      </div>
      </header>
    </div>
  );
}

export default App;
