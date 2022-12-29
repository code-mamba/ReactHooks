import React ,{Component} from 'react'

class ClassCount extends Component{
    constructor(props){
        super()
        this.state = {
            count:0,
            name: ''
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){

            if(prevState.count != this.state.count){
                console.log("Updating title...")
                document.title = `clicked ${this.state.count} times`
            }
            

           
            
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange = {e=>{this.setState({name:e.target.value}) }}></input>
                <button onClick={()=>{this.setState({count: this.state.count+1})}}>clicked{this.state.count}times</button>
            </div>
        )
    }
}
export default ClassCount