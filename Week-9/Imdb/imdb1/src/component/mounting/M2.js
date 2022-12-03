import { render } from "@testing-library/react";
import React, { Component } from "react";
class M2 extends Component {
  constructor(prp) {
    super(prp);
    this.state = {
      name: "Saurabh",
      Lname: "Khandagale",
      age:8
    };
    console.log('Inside Constructor')
  }
  shouldComponentUpdate()
  {
      console.log('Inside Should Componett with false');
      return true;
  }
  render() {
    console.log('Inside Render')
    let changeData=()=>
    {
        this.setState({
            name:'Juhi'
        })
    }
    return <>
   <button onClick={changeData}>Click</button> 
     {this.state.name}
     {
        this.state.Lname
     }
     {this.state.age>18?<h1>Eligible to vote</h1>:<h1>Not Eligible to vote</h1>}
    </>
  }
}
export default M2;
