import React, { Component } from "react";
class AutoInc extends Component{
    constructor(props){
        super(props)
        this.state = {
            increament:0
        }
    }

  componentDidMount(){
    this.interval = setInterval(this.Increment,1000)
  }
  componentWillUnmount(){
    if(this.state.increament>50){
        clearInterval(this.interval)
    }
  }
  Increment = ()=>{
    this.setState({increament:this.state.increament+1})
  }
    render(){
        return(
            <div>
                <h1>{this.state.increament}</h1>
            </div>
        )
    }
}
export default AutoInc