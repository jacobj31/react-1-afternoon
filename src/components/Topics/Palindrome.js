import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            palindrome:''
        }       
    } 
        handleChange(val){
        this.setState({ userInput: val})
    }
        pally(userInput) {
            let arr = userInput
            let reversed = userInput
            reversed = arr.split('').reverse().join('')


            arr === reversed ? this.setState({palindrome: 'Heck Yes'}): 
            this.setState({palindrome: 'Nope!'})     
      }


    render(){
        return(
            <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input className="inputLine"onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton"onClick={ () => this.pally(this.state.userInput)}>Check it!</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
        </div>
        )
    }
}