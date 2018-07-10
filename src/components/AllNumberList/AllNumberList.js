import React from 'react';
const numberBorder = { }
const numberBorder1 = {
   
}

class SelectedNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.currentSum = 0;
        this.state = {
            disabledNumbers: this.props.numbersToBeRemoved
        }
    }

    valuateSeries(i) {
        this.currentSum += i;
        this.setState((prevState) => {
            return { disabledNumbers: prevState.disabledNumbers + '' + i }
        });
        this.props.updateComponentStatus({
            currentSum: this.currentSum,
            disabledNumbers: this.state.disabledNumbers
        });
    }
    componentWillReceiveProps(data) {
        if(data.shouldResetState){
            this.currentSum = 0;
        }
    }
    render() {
        let numberList = [], i = 1;
        //this.currentSum = 0;
        while (i < 10) {
            if (this.state.disabledNumbers.indexOf(i) < 0) {
                numberList.push(<span
                    className="numberBorder1"
                    onClick={this.valuateSeries.bind(this, i)}
                    key={i}>&nbsp;{i}&nbsp;</span>);
            }
            i++
        }
        return (<div className="numberBorder">{numberList}</div>);
    }
}

export default SelectedNumbers;