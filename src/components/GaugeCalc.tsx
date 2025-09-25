import React, { useState } from "react";
import Calculator from "./Calculator.tsx";

const GaugeCalc: React.FC = () => {
  const [newSize, setNewSize] = useState<number>(0);
  const [patternNumStitchPerFourInch, setPatternNumStitchPerFourInch] =
    useState<number>(0);
  const [gaugeNumStitchPerFourInch, setGaugeNumStitchPerFourInch] =
    useState<number>(0);
  const [bustSizeInches, setBustSizeInches] = useState<number>(0);
  const [positiveEaseInches, setPositiveEaseInches] = useState<number>(0);

  function calculateYardageBasedOnSuggestedYard(
    patternNumStitchPerFourInch: number,
    gaugeNumStitchPerFourInch: number,
    bustSizeInches: number,
    positiveEaseInches: number
  ) {
    const sizeWithEase = bustSizeInches + positiveEaseInches;
    const sizeToGauge =
      (sizeWithEase / patternNumStitchPerFourInch) * gaugeNumStitchPerFourInch;
    setNewSize(sizeToGauge);
    return;
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    calculateYardageBasedOnSuggestedYard(
      patternNumStitchPerFourInch,
      gaugeNumStitchPerFourInch,
      bustSizeInches,
      positiveEaseInches
    );
  }

  const gaugeCalcForm = (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="patternNumStitchPerFourInch">
          Pattern number of stitches per 4 inches:
        </label>
        <input
          type="number"
          id="patternNumStitchPerFourInch"
          value={patternNumStitchPerFourInch}
          onChange={(e) =>
            setPatternNumStitchPerFourInch(Number(e.target.value))
          }
          required
        />
        <br />
        <label htmlFor="gaugeNumStitchPerFourInch">
          Swatch number of stitches per 4 inches:
        </label>
        <input
          type="number"
          id="gaugeNumStitchPerFourInch"
          value={gaugeNumStitchPerFourInch}
          onChange={(e) => setGaugeNumStitchPerFourInch(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="bustSizeInches">Bust Size in inches:</label>
        <input
          type="number"
          id="bustSizeInches"
          value={bustSizeInches}
          onChange={(e) => setBustSizeInches(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="positiveEase">Positive ease in Inches:</label>
        <input
          type="number"
          id="positiveEaseInches"
          value={positiveEaseInches}
          onChange={(e) => setPositiveEaseInches(Number(e.target.value))}
          required
        />
        <br />
        <button
          className="button"
          type="submit"
          disabled={
            patternNumStitchPerFourInch <= 0 ||
            gaugeNumStitchPerFourInch <= 0 ||
            bustSizeInches <= 0
          }
        >
          Get Value
        </button>
      </form>
      <br />
      <h3>Size to make: {newSize.toFixed(2)}</h3>
    </div>
  );

  return (
    <div>
      <Calculator
        title="Calculate Size based on Guage Swatch"
        calcForm={gaugeCalcForm}
      />
    </div>
  );
};

export default GaugeCalc;
