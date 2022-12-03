import { map } from "lodash";
import React from "react";
class Class extends React.Component {
  state = {
    data:0,
    arr: [],
  };
  handleInput(e) {
    this.setState.data = e;
    console.log(e.target.value);
    this.setState.arr.push(this.setState.data);
  }
  render() {
    return (
      <>
        hi
        <input
          type="textbox"
          value={this.state.data}
          onClick={this.handleInput}
        ></input>
        
{
           this.state.arr.map((e)=>{
              return  <h1>{e}</h1>
           })
}
           
      </>
    );
   
  }
}
export default Class;
