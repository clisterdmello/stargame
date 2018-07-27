import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import Stars from "./components/Stars/Stars";
import AllNumberList from './components/AllNumberList/AllNumberList';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      currentSum: 0,
      numbersToBeRemoved: ''
    }
    this.currentSum = 0;
    this.currentStar = 0;
    this.currentDisabledNumbers = '';
    this.ValidateNumbers = this.ValidateNumbers.bind(this);
    this.updateComponentStatus = this.updateComponentStatus.bind(this);
    this.generateRandomStarCount();
  }
  ValidateNumbers() {
    if (this.currentStar === this.currentSum) {
      alert('Good kepp going');
      this.setState({
        numbersToBeRemoved: this.currentDisabledNumbers
      });
      this.generateRandomStarCount();
      this.shouldResetState = true;
    } else {
      alert('Boooo, you loose. Reload the app and try again');
      this.shouldResetState = false;
    }
  }
  updateComponentStatus(compStats) {
    let { currentSum, disabledNumbers } = compStats
    this.currentDisabledNumbers = disabledNumbers;
    this.currentSum = currentSum;
  }
  generateRandomStarCount() {
    
    this.currentStar = Math.floor(Math.random() * 9) + 1;
  }
  render() {
    return (
      <div className="wrapper">
        <Stars starCount={this.currentStar} />
        <div onClick={this.ValidateNumbers} className="center"> === </div>
        <AllNumberList
          shouldResetState = {this.shouldResetState}
          updateComponentStatus={this.updateComponentStatus}
          numbersToBeRemoved={this.state.numbersToBeRemoved} />
      </div>
    )
  }

}

ReactDOM.render(<Game />, document.getElementById("index"));