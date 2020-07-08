import React, { Component } from 'react';
import Die from './Die'
import './Rolldice.css'
class Rolldice extends Component {
    static defaultProps = {
        side : ['one','two','three','four','five','six']
};
    constructor(props){
        super(props);
        this.state={
            die1:'one',
            die2:'two',
            is_rolling:false
        }
    }
    roll(){
        //pick the two numbers
        const newdice1 = this.props.side[Math.floor(Math.random()*this.props.side.length)]
        const newdice2 = this.props.side[Math.floor(Math.random()*this.props.side.length)]

        //set the state
        this.setState({die1:newdice1 , die2:newdice2 ,is_rolling:true})

        //settime function to reset the rolling button

        setTimeout(()=>{
            this.setState({is_rolling:false})
        },1000)

       

    }
    render() {
        return (
            <div className='Rolldice'>
                <div className='Dice'>
                    <Die face={this.state.die1} is_rolling = {this.state.is_rolling}/>
                    <Die face={this.state.die2} is_rolling = {this.state.is_rolling}/>
                </div>
                
                <button className='btn btn-lg btn-dark' onClick={this.roll.bind(this)} disabled={this.state.is_rolling}>
                    {this.state.is_rolling ? 'Rolling....' :'Roll Dice !'}
                </button>
                
            </div>
        );
    }
}

export default Rolldice;
