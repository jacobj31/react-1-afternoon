import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }       
    } 
        handleChangea(val){
        this.setState({ number1: parseInt(val, 10)})
    }
        handleChangeb(val){
        this.setState({ number2: parseInt(val, 10)})
    }
        adder(num1, num2) {
            
            this.setState({sum: num1 + num2}) 
      }


    render(){
        return(
            <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className="inputLine"onChange={ (e) => this.handleChangea(e.target.value)}></input>            
            <input className="inputLine"onChange={ (e) => this.handleChangeb(e.target.value)}></input>
            <button className="confirmationButton"onClick={ () => this.adder(this.state.number1, this.state.number2)}>Sum it up!</button>
            <span className="resultsBox">Grand Summation: {this.state.sum} </span>
        </div>
        )
    }
}