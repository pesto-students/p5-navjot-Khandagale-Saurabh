import React, { Component } from "react";
class NewTodo extends Component {
  constructor(props) 
  {
    super(props);
    this.state={
        name:'Saurabh',
        arr:[]
    }
    this.changeName=this.changeName.bind(this)
    this.change=this.change.bind(this)
  }
  changeName(e)
  {
    
      console.log(this.state.arr,'====')
    this.setState({arr:[...this.state.arr,this.state.name]})
 
    console.log(this.state.arr,'++++')
  }
  change(e)
  {
    this.setState({name:e.target.value})
    // console.log(this.state.arr);
  }
  deleteData(idx)
  {
    let y=this.state.arr.filter((ele,i)=>i!==idx)
    this.setState({arr:y})
  }
  render() {
      let u=this.state.arr.map((e,idx)=>(<li>{e}  <button onClick={()=>this.deleteData(idx)}>Delete</button>  </li>  ))
    return <>
       <button onClick={this.changeName}>Click</button>
       <input onChange={this.change}></input>
       {this.state.name}
       {u}
       
    </>;
  }
}
export default NewTodo;
