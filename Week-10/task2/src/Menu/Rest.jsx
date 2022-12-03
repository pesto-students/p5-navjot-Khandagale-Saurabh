import React, { Component } from "react";

export default class Rest extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      y: [],
      menuitem: [],
      category: [],
    };
  }
 
    filteritem = (catg) => {
      console.log(this.state.category)
      let newitem = [...this.state.category].filter((itm) => itm == 'Sides');
      this.setState({
        category: newitem,
      });
      
      console.log("Click Desert");
    };
  
  componentDidMount() {
    this.setState({
      menuitem: this.state.y,
    });
    // console.log(this.props.item[0]["menu-items"]);
    // this.setState({ arr: this.props.item[0]["menu-items"] });

    let y = new Set(
      this.props.item.map(({ id, name }) => {
        return name;
      })
    );
    console.log(y,'Did')
    this.setState({
      category:y
    })
  }

  
  render() {
    return (
      <div>
        {console.log(this.state.category)}
        {[...this.state.category].map((e) =>  console.log(e))}
        <div>
          <button onClick={ this.filteritem}>Desert</button>
          <p>{this.state.category}</p>
        </div>
      </div>
    );
  }
}
