import React, { Component } from 'react';
import './Die.css'
class Die extends Component {
    render() {
        return (
            <div className='Die'>
                <i class={`die fas fa-dice-${this.props.face} ${this.props.is_rolling ? "shaking":''}`}></i>
            </div>
        );
    }
}

export default Die;
