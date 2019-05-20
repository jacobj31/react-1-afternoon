import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();
        this.state={
            birds: [
                {
                    type: 'duck', 
                    place: 'water', 
                    eats: 'bread'
                },
                {
                    type: 'owl', 
                    eats: 'mice', 
                    noise: 'nope' 
                },
                {
                    type: 'swallow', 
                    place: 'parking garages', 
                    coolness:'crazy high'
                }
        ],
            userInput:'',
            filteredBirds: []
        }       
    } 
        handleChange(val){
        this.setState({ userInput: val})
    }
        filterBirds(prop) {
        let birds = this.state.birds;
        let filteredBirds = [];
    
        for ( let i = 0; i < birds.length; i++ ) {
          if ( birds[i].hasOwnProperty(prop) ) {
            filteredBirds.push(birds[i]);
          }
        }
    
        this.setState({ filteredBirds: filteredBirds });
      }




    render(){
    return(
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Unfiltered: { JSON.stringify(this.state.birds, null, 10) }</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterBirds(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredBirds, null, 10) }</span>
        </div>
    )
}
}

