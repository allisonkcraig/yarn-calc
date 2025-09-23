import React, { useState } from "react";
import Calculator from "./Calculator.tsx";

const YardageCalc: React.FC = () => {
  const [skeinCount, setSkeinCount] = useState<number>(0);
  const [suggestedYarnWeight, setSuggestedYarnWeight] = useState<number>(0);
  const [suggestedYarnYardage, setSuggestedYarnYardage] = useState<number>(0);
  const [chosenYarnYardage, setChosenYarnYardage] = useState<number>(0);
  const [patternSuggestedWeight, setPatternSuggestedWeight] =
    useState<number>(0);
  const [includeWastage, setIncludeWastage] = useState<boolean>(false);

  function calculateYardageBasedOnSuggestedYard(
    suggestedYarnWeight: number,
    suggestedYarnYardage: number,
    patternSuggestedWeight: number,
    chosenYarnYardage: number,
    includeWastage: boolean
  ) {
    const yardageOfSuggestedYarn =
      (patternSuggestedWeight / suggestedYarnWeight) * suggestedYarnYardage;
    let skeinsNeeded = yardageOfSuggestedYarn / chosenYarnYardage;
    if (includeWastage) {
      skeinsNeeded += skeinsNeeded * 0.1;
    }
    setSkeinCount(skeinsNeeded);
    return;
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    calculateYardageBasedOnSuggestedYard(
      suggestedYarnWeight,
      suggestedYarnYardage,
      patternSuggestedWeight,
      chosenYarnYardage,
      includeWastage
    );
  }

  const yardageCalcForm = (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="suggestedYarnWeight">
          Suggested Yarn Weight per Skein:
        </label>
        <input
          type="number"
          id="suggestedYarnWeight"
          value={suggestedYarnWeight}
          onChange={(e) => setSuggestedYarnWeight(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="suggestedYarnYardage">
          Suggested Meters per Skein:
        </label>
        <input
          type="number"
          id="suggestedYarnYardage"
          value={suggestedYarnYardage}
          onChange={(e) => setSuggestedYarnYardage(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="patternSuggestedWeight">Grams needed:</label>
        <input
          type="number"
          id="patternSuggestedWeight"
          value={patternSuggestedWeight}
          onChange={(e) => setPatternSuggestedWeight(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="chosenYarnYardage">Chosen Yarn Yardage:</label>
        <input
          type="number"
          id="chosenYarnYardage"
          value={chosenYarnYardage}
          onChange={(e) => setChosenYarnYardage(Number(e.target.value))}
          required
        />
        <br />
        <label htmlFor="includeWastage">Include 10% wastage?:</label>
        <input
          type="checkbox"
          id="includeWastage"
          name="includeWastage"
          checked={includeWastage}
          onChange={(e) => setIncludeWastage(e.target.checked)}
        />
        <br />
        <button
          className="button"
          type="submit"
          disabled={
            suggestedYarnWeight <= 0 ||
            suggestedYarnYardage <= 0 ||
            patternSuggestedWeight <= 0 ||
            chosenYarnYardage <= 0
          }
        >
          Get Value
        </button>
      </form>
      <br />
      <h3>Skeins needed rounded up: {Math.round(skeinCount)}</h3>
      <br />
      <h3>Skeins needed unrounded: {skeinCount.toFixed(2)}</h3>
    </div>
  );

  return (
    <div>
      <Calculator
        title="Calculate Number of Skeins Needed"
        calcForm={yardageCalcForm}
      />
    </div>
  );
};

export default YardageCalc;
