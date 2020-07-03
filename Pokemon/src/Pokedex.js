import React, { Component } from 'react';
import Pokecard  from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    static defaultProps={
        pokemon:
        [
            {id: 4, name: 'Charmander', type: 'fire', exp: 62},
            {id: 7, name: 'Squirtle', type: 'water', exp: 63},
            {id: 11, name: 'Metapod', type: 'bug', exp: 72},
            {id: 12, name: 'Butterfree', type: 'flying', exp: 178},
            {id: 25, name: 'Pikachu', type: 'electric', exp: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', exp: 95},
            {id: 94, name: 'Gengar', type: 'poison', exp: 225},
            {id: 133, name: 'Eevee', type: 'normal', exp: 65}
          ]
    }
    render() {
        let title

        if(this.props.isWinner){
            title = <h1 className='Winning'>Winning Hand</h1>
        }else{
            title = <h1 className='Losing'> Losing Hand</h1>
        }

       
        return (

              <div className='Pokedex'>
                  <p>Total Experience: {this.props.exp}</p>
        <p> {title}  </p>
                  <div className='Pokedex-card'> 
                
                   {this.props.pokemon.map((p)=>(
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
            ))}

                
            </div>
              </div>
            
        );
    }
}

export default Pokedex;
