import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Saurabh",
      text: "",
      divList: ["A", "B"],
      newDivList:[{
        name:'A',id:1 //id timeStamp
      }]
    };
    this.createDiv = this.createDiv.bind(this);
    this.deleteSearch=this.deleteSearch.bind(this)
    this.collectData=this.collectData.bind(this)
  }

  deleteSearch(deleteThis) {
    console.log(deleteThis);
    
    let newData = this.state.divList.filter( (searchItem,idx )=> idx!== deleteThis )
    this.setState({
        divList: newData
    })
}
collectData(e)
{
 this.setState({text:e.target.value})
 
}
  render() {
    
    return (
        
        <>
        {this.state.name}
        {console.log(this.state)}
        Todo
        <input onChange={this.collectData}></input>
        <button onClick={this.createDiv}>Create Div</button>
        <div>
          Start
          
         {
         this.state.divList.map((e, idx) => (
                 <li key={idx}>{e}    <button  onClick={()=>this.deleteSearch(idx)} >Delete</button></li>
            ))
         }
          <br></br>
          End
        </div>
      </>
    );
  }
//   DeleteData=()=>{
   
// }

  createDiv(e) {
   
    this.setState({
        
        
      divList: [...this.state.divList, this.state.text],
    });
    console.log(this.state.text)
    // this.setState.divList(divList.concate(<this.Div1 key={this.divList.length}></this.Div1>))

  }

  

  
}
export default Todo;

//    createDiv() {
//     //       let add=   React.createElement('div',{},'Element ')
//     //    console.log(add);
//     //    const root=document.getElementById('global')
//     //    root.render(add)
//     //  createRoot(React.render(add))
//     // ReactDOM.render(add ,document.querySelector('#root'))
//     this.setState(this.state.divList.concate(<div></div>));
//     console.log("555", this.state);
//   }
