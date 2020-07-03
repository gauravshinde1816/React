import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padtothree = (number)=> (number<=999 ? `00${number}`.slice(-3):number)

class Pokecard extends Component{
    render(){
        let ImgSrc = `${POKE_API}${padtothree(this.props.id)}.png`;
        return(
        <div className='Pokecard'>
            <div className='Pokecard-image'>
                <img src={ImgSrc}/>
            </div>
            
            <h1>{this.props.name}</h1>
            <h3>Type: {this.props.type}</h3>
            <h3>Experience: {this.props.exp}</h3>
        </div>
      
        )
    }
}


export default Pokecard;