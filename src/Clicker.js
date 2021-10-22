import React, { Component } from 'react'

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = {num : 1};
        this.getRandom = this.getRandom.bind(this);
    }
    getRandom(){
        //pick a random number btw 1-10
        let rand = Math.floor(Math.random() * 10)+1;
        //update state with new rnd
        this.setState({num: rand});        
    }
    render(){
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num === 7 
                ? <h2>YOU WIN!</h2>
                : <button onClick={this.getRandom}>Random Number</button>
                }
            </div>
        )
    }
}
export default Clicker;