import React from "react";
class Cts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 20 };
  }
  handle(count) {
    console.log(this);
    this.setState({ count: count + 1 });
  }
  render() {
    let { count } = this.state;
    return (
      <>
        <h1>Inside Cts || {count}</h1>
        <button onClick={this.handle.bind(this, count)}>
          Click For Class Update
        </button>
      </>
    );
  }
}
export default Cts;
