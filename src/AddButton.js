import React, {Component} from 'react';
import './add-ingredient-button.css';
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
        $(".add-ingredient-button").toggleClass("added");
        $(".add-ingredient-button").addClass("button-animation").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(".add-ingredient-button").removeClass("button-animation");
        });
        this.setState(prevState => ({
            added: !prevState.added
        }));
    }

    render() {
        return <button onClick={this.handleClick} className="add-ingredient-button">{this.state.added ? '-' : '+'}</button>;
    }
}

export default AddButton;