import React from "react";
import ReactDOM from "react-dom";
import Stars from "./star";
import AvailableNumbers from './availableNumbers';
import SelectedNumbers from './selectedNumberList'


class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      stars: 4,
      selectedNumbers: [],
      unAvailableNmbers: '456'
    }
    this.drawNewStars = this.drawNewStars.bind(this);
    this.updateSelectedNumbers = this.updateSelectedNumbers.bind(this);
    /*This hack helps us to mentain the scope of this */
  }
  updateSelectedNumbers(number) {
    let unAvailableNmbers = this.state.unAvailableNmbers;

    // if (unAvailableNmbers.indexOf(i) > 0) {
    //   /*Find Best way to do the data transfer */
    //     unAvailableNmbers.replace(i,'');
    // }else{
    //   unAvailableNmbers +=i;
    // }    
    unAvailableNmbers = (unAvailableNmbers.indexOf(number) > 0) ?
      unAvailableNmbers.replace(number, '') : unAvailableNmbers += number;
    this.setState(() => {
      return { unAvailableNmbers: unAvailableNmbers }
    });
  }
  drawNewStars() {
    /*This code will help up to generate random numbers from between 0-10*/
    /*Need to find a better logic for this one for randm munber generatin*/
    this.setState(() => {
      return { stars: Math.floor(Math.random() * 9) + 1 }
    });
  }

  render() {
    return (
      <div>
        <div>
          <Stars count={this.state.stars} redrawNewStars={this.drawNewStars} />
          <div>=</div>
          <SelectedNumbers />
        </div>
        <AvailableNumbers unAvailableNmbers={this.state.unAvailableNmbers} updateSelectedNumbers={this.updateSelectedNumbers} />
      </div>
    )
  }

}

ReactDOM.render(<Game />, document.getElementById("index"));