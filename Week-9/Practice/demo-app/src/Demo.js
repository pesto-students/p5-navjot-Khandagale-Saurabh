import React, { useState } from "react";

let Demo = (props) => {
  let subtitle = "colre is red";
  let { name, data } = props.obj;
  let [count,setCount] = useState( 0);
  let y = props.obj.name;
  console.log(props.obj.data, y, "Line 8", name, data);
  const handleClick = (e) => {
    setCount(count=count+1);
    console.log(count, e);
  };
  return (
    <>
      <h1> INside Demo {subtitle.toUpperCase()}</h1>
      {/* <h1> {props.LastName} {}</h1> */}
      {data.map((ele) => {
        return <li>{ele}</li>;
      })}
      <button onClick={handleClick}>Click to Incremenr  </button>
      {count}
      <img src='/image/cat-picture.jpg'></img>
      <img src='/cat-picture.jpg'></img>
    </>
  );
};

export default Demo;
