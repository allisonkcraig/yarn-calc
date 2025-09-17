import React, { useState } from "react";

const YardageCalc: React.FC = () => {
  const [skeinCount, setSkeinCount] = useState<number | string>(0);
  const [suggestedYarnWeight, setSuggestedYarnWeight] = useState<number>(0);
  const [suggestedYarnYardage, setSuggestedYarnYardage] = useState<number>(0);
  const [chosenYarnYardage, setChosenYarnYardage] = useState<number>(0);
  const [patternSuggestedWeight, setPatternSuggestedWeight] = useState<number>(0);
  const [chosenYarnWeight, setChosenYarnWeight] = useState<number>(0);
  const [includeWastage, setIncludeWastage] = useState<boolean>(false);

  function calculateYardageBasedOnSuggestedYard(
    suggestedYarnWeight: number,
    suggestedYarnYardage: number,
    patternSuggestedWeight: number,
    chosenYarnYardage: number,
    chosenYarnWeight: number,
    includeWastage: boolean
  ) {
    console.log("Calculating yardage");

    if (chosenYarnYardage) {
      setSkeinCount("hello");
      return;
    }

    if (chosenYarnWeight) {
      setSkeinCount(
        (suggestedYarnYardage / suggestedYarnWeight) / patternSuggestedWeight
      );
      return;
    }

    console.log("error");
    setSkeinCount("ERROR");
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("You clicked submit.");

    // Example values, replace with actual state/inputs
    calculateYardageBasedOnSuggestedYard(
      suggestedYarnWeight,
      suggestedYarnYardage,
      patternSuggestedWeight,
      chosenYarnYardage,
      chosenYarnWeight,
      includeWastage,
    );
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="suggestedYarnWeight">Suggested Yarn Weight:</label>
        <input
          type="number"
          id="suggestedYarnWeight"
          value={suggestedYarnWeight}
          onChange={(e) => 
            setSuggestedYarnWeight(Number(e.target.value)
          
        )}
        />
        <button type="submit">Get Value</button>
        <span>Skeins needed: {skeinCount}</span>
      </form>
    </div>
  );
};

export default YardageCalc;