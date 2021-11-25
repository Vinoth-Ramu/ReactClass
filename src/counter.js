import React,{Component} from "react";
class Counter extends Component
{
    constructor()
    {
        super()
        this.state={
           initial:0
    
        }
    }

    incVal()
    {
        this.setState({
            initial:this.state.initial+1
        })
    }

    decVal()
    {
        this.setState({
            initial:this.state.initial-1
        })
    }
    reset()
    {
        this.setState({
            initial:0
        })
    }
    render()
    {
      return(
        <div>
     <h1>counter component</h1>
     <h3>
     initial value:{this.state.initial}
     </h3>
      
      <button onClick={()=>this.incVal()}>increment</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>this.reset()}>reset</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>this.decVal()}>decrement</button></div>
      
      ) 
    }

}
export default Counter