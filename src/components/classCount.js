import React, { Component } from 'react'
class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    } 
    handleClick =()=>{
        this.setState(
            {count: this.state.count+1}
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}
export default Counter