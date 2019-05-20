import React , {Component} from 'react';
import EandO from '../Topics/EvenAndOdd'
import FilterObj from '../Topics/FilterObject'
import FilterStr from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'


export default class TopicBrowser extends Component{
    
    render(){
        return(
            <div>
                <EandO/>
                <FilterObj/>
                <FilterStr/>
                <Palindrome/>
                <Sum/>
            </div>
        )
    }
}



