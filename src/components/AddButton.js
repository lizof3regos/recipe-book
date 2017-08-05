import React, {Component} from 'react';
import '../styles/add-ingredient-button.css';
const $ = require('jquery');

class AddButton extends Component {
    constructor() {
        super();
        this.state = {
            added: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let specificbutton = $(`[data='${this.props.data}']`).find(".add-ingredient-button");
        specificbutton.toggleClass("added");
        specificbutton.addClass("button-animation").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            specificbutton.removeClass("button-animation");
        });
        this.setState(prevState => ({
            added: !prevState.added
        }));
    }

    render() {
        return <div className="add-button-container"><button onClick={this.handleClick} className="add-ingredient-button">{this.state.added ? '-' : '+'}</button></div>;
    }
}

export default AddButton;