import React, {Component} from 'react';
import '../styles/heart-button.css';
import $ from 'jquery';

class HeartButton extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $(".heart").toggleClass("heart-animation");
        this.props.onHeartClick();
    }

    render() {
        return <div className="heart"><div className="click-area" onClick={this.handleClick}/></div>
    }
}

export default HeartButton;
