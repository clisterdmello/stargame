import React from 'react';
import ReactDom from 'react-dom';

class selectedNumberList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>Selected Numbers:<span>2</span><span>4</span></div>
        )
    }
}

export default selectedNumberList;