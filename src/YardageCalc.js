import React, { Component, useState } from 'react';

function calculateYardageBasedOnSuggestedYard(suggestedYarnWeight, suggestedYarnYardage, patternSuggestedWeight, chosenYarnYardage, chosenYarnWeight, includeWastage ) {
    console.log('Calculating yardage')
    if (chosenYarnYardage) {
        skeinCount = 'hello'
       return 
    }

    if (chosenYarnWeight) {
        skeinCount = (suggestedYarnYardage / suggestedYarnWeight) / patternSuggestedWeight
        return 
    }
    console.log('error')
    skeinCount = "ERROR"
    return

}

function handleFormSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    calculateYardageBasedOnSuggestedYard(document.getElementById('suggestedYarnWeight').value)
  }

class YardageCalc extends Component {
  constructor(props) {
    super(props);
  }

  const [skeinCount, setSkeinCount] = useState(0);

  render() {
    return (
        <div>
            <form>
                <label for="suggestedYarnWeight">suggestedYarnWeight:</label>
                <input type="number" id="suggestedYarnWeight" />
                <button onClick={handleFormSubmit}>Get Value</button>
                <span>Skeins needed: {skeinCount}</span>
            </form>
        </div>
    )
  };
};

export default YardageCalc; 