import "./App.css";
import YardageCalc from "./YardageCalc";
import GaugeCalc from "./GaugeCalc";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <header className="App-header">
        <h1>Helpful Knitting and Crochet Calculators</h1>
      </header>
      <div className="App-calc-container">
        <YardageCalc />
        <GaugeCalc />
      </div>
    </div>
  );
}

export default App;
