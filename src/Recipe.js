import React, {Component} from 'react';
import recipejson from './samplerecipe.json';

const Fraction = require('fraction.js');

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            data: recipejson
        };
        this.renderPrepTime = this.renderPrepTime.bind(this);
    }

    renderPrepTime(type, hour, min) {
        let hourFormat = (hour) ? hour + ' h ' : '';
        if (hour || min) {
            return (<li className="prepTime__item">
                <p>{type}</p>
                <span>{hourFormat}{min} m</span>
            </li>)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.data.name}</h1>
                <ul id="ingredients-list">
                    {
                        this.state.data.ingredients.map((item) => {
                            let unit = (item.unit) ? ' ' + item.unit : '';
                            let descriptor = (item.descriptor) ? ', ' + item.descriptor : '';
                            let quantity = new Fraction(item.quantity);
                            return <li><label
                                style={{float: 'left'}}>{quantity.toFraction(true)}{unit} {item.name}{descriptor}</label>
                            </li>
                        })
                    }
                </ul>
                <h3>Directions</h3>
                <ul id="directions-prep-time" style={{overflow: 'hidden'}}>
                    {
                        this.renderPrepTime('Prep', this.state.data.directions.prep.hour, this.state.data.directions.prep.minute)
                    }
                    {
                        this.renderPrepTime('Cook', this.state.data.directions.cook.hour, this.state.data.directions.cook.minute)
                    }
                    {
                        this.renderPrepTime('Ready In', this.state.data.directions['ready in'].hour, this.state.data.directions['ready in'].minute)
                    }
                </ul>
                <ol id="directions-steps">
                    {
                        this.state.data.directions.steps.map((item) => {
                            return <li style={{'text-align': 'left'}}><label>{item}</label></li>
                        })
                    }
                </ol>
            </div>);
    }
}

export default Recipe;