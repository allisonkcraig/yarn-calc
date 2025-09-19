import React, { Component } from "react";
import "../style/Calculator.css";

interface Props {
  title: string;
  calcForm?: React.ReactNode;
}

class Calculator extends Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="Calculator-container">
        <h1>{this.props.title}</h1>
        <div>{this.props.calcForm}</div>
      </div>
    );
  }
}

export default Calculator;
