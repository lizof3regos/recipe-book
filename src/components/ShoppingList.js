import React, {Component} from 'react';
import ingredientList from '../sampleingredients.json';
import AddButton from "./AddButton";

const Fraction = require('fraction.js');

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            data: ingredientList
        };
        this.removeFromList = this.removeFromList.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    removeFromList(ingredient) {

    }

    addToList(ingredient) {

    }

    render() {
        return (<div>
            <h1>Shopping List</h1>
            <ul id="ingredients-list">
                {
                    this.state.data.ingredients.map((item) => {
                        console.log(item);
                        let unit = (item.unit) ? ' ' + item.unit : '';
                        let descriptor = (item.descriptor) ? ', ' + item.descriptor : '';
                        let quantity = new Fraction(item.quantity);
                        return <li style={{height: '40px', listStyleType: 'none', marginBottom: '5px'}} key={item.name} data={item.name}><AddButton start='true' data={item.name}/><input
                            style={{float: 'left', lineHeight: '30px', width: '80%'}} defaultValue={`${quantity.toFraction()}${unit} ${item.name}${descriptor}`}/>
                        </li>
                    })
                }
            </ul>
        </div>);
    }
}

export default ShoppingList;
