import React from "react";
import Star from '../Star/Star';
const startsStyle = { display: 'flex' }
export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let starList = [];
        for (let k = 0; k < this.props.starCount; k++) {
            starList.push(<div key={k}><Star /></div>);
        }
        return (<div style={startsStyle}>{starList}</div>)
    }
}