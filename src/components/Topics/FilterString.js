import React, {Component} from 'react';

export default class FilterStr extends Component{
    constructor(){
        super();
        this.state={
            unFilteredArray: ['bread', 'tomato','lettuce','mustard',
            'cheese','mayo','brisket'
            ],
            userInput:'',
            filteredArray: []
        }       
    } 
        handleChange(val){
        this.setState({ userInput: val})
    }
        filterString(prop) {
        let string = this.state.unFilteredArray;
        let filtered = [];
    
        for ( let i = 0; i < string.length; i++ ) {
          if ( string[i].includes(prop) ) {
            filtered.push(string[i]);
          }
        }
    
        this.setState({ filteredArray: filtered });
      }
    
    
    
    
    
    
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>
        )
    }
}