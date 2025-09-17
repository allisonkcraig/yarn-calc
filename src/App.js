import logo from './logo.svg';
import './App.css';
import YardageCalc from './YardageCalc';
import GaugeCalc from './GaugeCalc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Helpful Knitting and Crochet Calculators</h1>
      <YardageCalc/>
      <GaugeCalc/>
      </header>
    </div>
  );
}

export default App;
