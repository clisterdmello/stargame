import React from "react";
import ReactDOM from "react-dom";
import Stars from "./components/Stars/Stars";
import AllNumberList from './components/AllNumberList/AllNumberList';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      currentStar: 0,
      currentSum: 0,
      numbersToBeRemoved: ''
    }
    this.currentStar = 0;
    this.currentDisabledNumbers = '';
    this.ValidateNumbers = this.ValidateNumbers.bind(this);
    this.updateComponentStatus = this.updateComponentStatus.bind(this);
    this.generateRandomStarCount();
  }
  ValidateNumbers() {
    if (this.currentStar === this.state.currentSum) {
      alert('we have a match');
      this.setState({
        numbersToBeRemoved: this.currentDisabledNumbers
      });
      this.generateRandomStarCount();
    } else {
      alert('Ops you lost the game');
    }
  }
  updateComponentStatus(compStats) {
    let { currentSum, disabledNumbers } = compStats
    this.setState({
      currentSum: currentSum
    });
    this.currentDisabledNumbers = disabledNumbers;
  }
  generateRandomStarCount() {
    
    this.currentStar = Math.floor(Math.random() * 9) + 1;
  }
  render() {
    return (
      <div>
        <Stars starCount={this.currentStar} />
        <div onClick={this.ValidateNumbers}> === </div>
        <AllNumberList
          updateComponentStatus={this.updateComponentStatus}
          numbersToBeRemoved={this.state.numbersToBeRemoved} />
      </div>
    )
  }

}

ReactDOM.render(<Game />, document.getElementById("index"));