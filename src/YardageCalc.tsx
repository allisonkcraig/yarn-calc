import React, { useState } from "react";
import './YardageCalc.css';

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

    if (chosenYarnYardage > 0) {
      // TODO add calculation
      setSkeinCount(0);
      return;
    }

    if (chosenYarnWeight > 0) {
      // TODO add calculation
      setSkeinCount(0);
      return;
    }

    console.log("error");
    setSkeinCount("ERROR");
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("You clicked submit.");

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
    <div className="Yardage-calc">
      <h2>Calculate Number of Skeins Needed</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="suggestedYarnWeight">Suggested Yarn Weight:</label>
        <input
          type="number"
          id="suggestedYarnWeight"
          value={suggestedYarnWeight}
          onChange={(e) => 
            setSuggestedYarnWeight(Number(e.target.value))
          }
        />
        <br/>
        <label htmlFor="suggestedYarnYardage">Suggested Meters per Skein:</label>
        <input
          type="number"
          id="suggestedYarnYardage"
          value={suggestedYarnYardage}
          onChange={(e) => 
            setSuggestedYarnYardage(Number(e.target.value))
          }
        />
        <br/>
        <label htmlFor="patternSuggestedWeight">Grams needed:</label>
        <input
          type="number"
          id="patternSuggestedWeight"
          value={patternSuggestedWeight}
          onChange={(e) => 
            setPatternSuggestedWeight(Number(e.target.value))
          }
        />
        <br/>
        <label htmlFor="chosenYarnYardage">Chosen Yarn Yardage:</label>
        <input
          type="number"
          id="chosenYarnYardage"
          value={chosenYarnYardage}
          onChange={(e) => 
            setChosenYarnYardage(Number(e.target.value))
          }
        />
        <br/>
        <label htmlFor="chosenYarnWeight">Chosen Yarn Weight:</label>
        <input
          type="number"
          id="chosenYarnWeight"
          value={chosenYarnWeight}
          onChange={(e) => 
            setChosenYarnWeight(Number(e.target.value))
          }
        />
        <br/>
        <label htmlFor="includeWastage">Include 10% wastage?:</label>
         <input
            type="checkbox"
            id="includeWastage"
            name="includeWastage"
            checked
            onChange={(e) => 
              setIncludeWastage(e.target.checked)
            }
          />
        <br/>
        <button className="button" type="submit">Get Value</button>
        <br/>
        <span>Skeins needed: {skeinCount}</span>
      </form>
    </div>
  );
};

export default YardageCalc;