import React, {Component} from 'react';
import recipejson from './samplerecipe.json';

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            data: recipejson
        };
    }
    render() {
        return (
            <div>
                <ul id="ingredients-list">
                    {
                        this.state.data.ingredients.map((item) => {
                            let unit = (item.unit) ? ' ' + item.unit : '';
                            let descriptor = (item.descriptor) ? ', ' + item.descriptor : '';
                            return <li>{item.quantity}{unit} {item.name}{descriptor}</li>
                        })
                    }
                </ul>
            </div>);
    }
}

export default Recipe;