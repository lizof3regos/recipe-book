import React, {Component} from 'react';
import recipejson from '../samplerecipe.json';
import AddButton from "./AddButton";
import ScaleRecipeModule from "./ScaleRecipeModule";
import HeartButton from "./HeartButton";

const Fraction = require('fraction.js');

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            data: recipejson,
            scale: new Fraction(1)
        };
        this.renderPrepTime = this.renderPrepTime.bind(this);
        this.handleScaleChange = this.handleScaleChange.bind(this);
        this.scaleRecipe = this.scaleRecipe.bind(this);
        this.pluralize = this.pluralize.bind(this);
    }

    handleScaleChange(num) {
        this.setState({scale: num});
    }

    pluralize(num, unit) {
        if (num > 1) {
            return unit + 's';
        }
        return unit;
    }

    scaleRecipe(scale, quantity, unit) {
        if (unit.trim() === 'teaspoon') {
            if (((scale * quantity) % 3) === 0) {
                let num = new Fraction(scale * quantity).div(3).toFraction();
                return num + ' ' + this.pluralize(num, 'tablespoon');
            } else {
                let num = Fraction(scale * quantity).toFraction();
                return num + ' ' + this.pluralize(num, unit);
            }
        } else if (unit.trim() === 'tablespoon') {
            if (((scale * quantity) * 3) % 3 === 0) {
                let num = new Fraction(scale * quantity).mul(3).toFraction();
                return num + ' ' + this.pluralize(num, 'teaspoon');
            } else {
                let num = Fraction(scale * quantity).toFraction();
                return num + ' ' + this.pluralize(num, unit);
            }
        } else if (unit.trim() === 'cup') {
            if (((scale * quantity)) === 0.125) {
                let num = new Fraction(scale * quantity).mul(16).toFraction();
                return num + ' ' + this.pluralize(num, 'tablespoon');
            } else {
                let num = Fraction(scale * quantity).toFraction();
                return num + ' ' + this.pluralize(num, unit);
            }
        }
        return new Fraction(scale * quantity).toFraction() + ' ' + unit;
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
                <HeartButton/>
                <ScaleRecipeModule scale={this.state.scale} onScaleChange={this.handleScaleChange}/>
                <ul id="ingredients-list">
                    {
                        this.state.data.ingredients.map((item) => {
                            let unit = (item.unit) ? ' ' + item.unit : '';
                            let descriptor = (item.descriptor) ? ', ' + item.descriptor : '';
                            let quantity = new Fraction(item.quantity);
                            return <li style={{height: '40px', 'listStyleType': 'none'}} key={item.name} data={item.name}><AddButton data={item.name}/><label
                                style={{float: 'left', lineHeight: '40px'}}>{this.scaleRecipe(this.state.scale, quantity, unit)} {item.name}{descriptor}</label>
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
                            return <li key={item} style={{'textAlign': 'left'}}><label>{item}</label></li>
                        })
                    }
                </ol>
            </div>);
    }
}

export default Recipe;