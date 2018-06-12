import React from "react";
import ReactDOM from "react-dom";
class Stars extends React.Component{
    constructor(props){
        super(props);       
    }
    populateStars(){
        this.starList = [];
        for(let k=0;k < this.props.count; k++){
            this.starList.push(<div key={k}><Star/></div>);
        }
    }   
    render(){
        this.populateStars();
        return(this.starList)
    }
}
class Star extends React.Component{
    render(){
        return (<span>X</span>)
    }
}
export default Stars;   