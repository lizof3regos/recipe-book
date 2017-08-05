import React, {Component} from 'react';
import '../styles/heart-button.css';
import $ from 'jquery';

class HeartButton extends Component {
    constructor() {
        super();
        this.state = {
            hearted: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $(".heart").toggleClass("heart-animation");
        this.setState(prevState => ({
            hearted: !prevState.hearted
        }));
    }

    render() {
        return <div className="heart" data={this.state.hearted}><div className="click-area" onClick={this.handleClick}/></div>
    }
}

export default HeartButton;
