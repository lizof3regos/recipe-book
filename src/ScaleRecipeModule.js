import React, {Component} from 'react';
import './scale-recipe-module.css';
import $ from 'jquery';

class ScaleRecipeModule extends Component {
    constructor() {
        super();
        this.state = {
            scale: 1
        };
        this.scaleup = this.scaleup.bind(this);
        this.scaledown = this.scaledown.bind(this);
        this.scale = this.scale.bind(this);
    }

    scaleup() {
        $("#increment-button").val(this.state.scale + 1);
        this.setState(prevState => ({
            scale: prevState.scale + 1
        }));
    }

    scaledown() {
        if (this.state.scale > 1) {
            $("#increment-button").val(this.state.scale - 1);
            this.setState(prevState => ({
                scale: prevState.scale - 1
            }));
        }
    }

    scale(event) {
        this.setState({scale: parseFloat(event.target.value)});
    }

    render() {
        return <div><input type="text" id="increment-button" defaultValue={1} onChange={this.scale}/><div className="buttons"><button className="arrow-button up" onClick={this.scaleup}/><button className="arrow-button" onClick={this.scaledown}/></div></div>
    }
}

export default ScaleRecipeModule;