import React, {Component} from 'react';

export default class EandO extends Component{
    constructor(){
        super();
            this.state={
                evenArray: [],
                oddArray: [],
                userInput: '',
            }
        }
                handleChange(val){
                this.setState({userInput: val})
                }

                assignEvenAndOdds(userInput){
                    let arr = userInput.split(',')
                    let odds = []
                    let evens = []
                    arr.map((num) => num%2 === 0 ? evens.push(num):
                    odds.push(num)
                    )
                    this.setState({evenArray: evens, oddArray: odds})
                }
         
    
        
 
 
 
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e) =>
                this.handleChange(e.target.value)}></input>
              <button className="confirmationButton" onClick={ () => 
                { this.assignEvenAndOdds(this.state.userInput) }}> Sort </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}