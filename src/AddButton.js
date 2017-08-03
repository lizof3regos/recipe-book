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
        if (this.state.added) {
            $(".add-ingredient-button").removeClass("added");
        } else {
            $(".add-ingredient-button").addClass("added");
        }
        this.setState(prevState => ({
            added: !prevState.added
        }));
    }

    render() {
        return <button onClick={this.handleClick} className="add-ingredient-button">{this.state.added ? '-' : '+'}</button>;
    }
}

export default AddButton;