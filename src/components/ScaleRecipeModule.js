import React, {Component} from 'react';
import '../styles/scale-recipe-module.css';
import $ from 'jquery';

const Fraction = require('fraction.js');

class ScaleRecipeModule extends Component {
    constructor() {
        super();
        this.scaleup = this.scaleup.bind(this);
        this.scaledown = this.scaledown.bind(this);
        this.scale = this.scale.bind(this);
    }

    scaleup() {
        $("#increment-button").val(this.props.scale.add(1).toFraction());
        this.props.onScaleChange(this.props.scale.add(1));
    }

    scaledown() {
        if (this.props.scale > 1) {
            $("#increment-button").val(this.props.scale.sub(1).toFraction());
            this.props.onScaleChange(this.props.scale.sub(1));
        }
    }

    scale(event) {
        try {
            this.props.onScaleChange(new Fraction(event.target.value));
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (<div><input type="text" id="increment-button" defaultValue={1} onChange={this.scale}/><div className="buttons"><button className="arrow-button up" onClick={this.scaleup}/><button className="arrow-button" onClick={this.scaledown}/></div></div>);
    }
}

export default ScaleRecipeModule;