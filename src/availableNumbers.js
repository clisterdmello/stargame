import React from 'react';
import ReactDom from 'react-dom';

class SelectedNumbers extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        let numberList = [], i = 1;
        while (i < 10) {           
            if (this.props.unAvailableNmbers.indexOf(i) < 0) {
                /*Find Best way to do the data transfer */
                numberList.push(<span key={i} onClick={this.props.updateSelectedNumbers.bind(this,i)}>&nbsp;{i}&nbsp;</span>);
            }
            i++
        }
        return (numberList);
    }
}

export default SelectedNumbers;