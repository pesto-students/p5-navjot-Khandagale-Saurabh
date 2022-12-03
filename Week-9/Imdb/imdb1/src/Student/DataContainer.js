import React, { useState } from "react";
import { Std } from "./Std";
import "./Abc.css";

let studentobj = [
  {
    name: "Saurabh",
    age: 22,
  },
  {
    name: "Chetan",
    age: 18,
  },
];

let ans = studentobj.map((e, idx) => <li key={idx}>{e.name}</li>);
let DataContainer = () => {
  let [name, setName] = useState("");
  let [data, setData] = useState(["Saurabh", "Ram"]);
  let changeLog = (e) => {
    setName(e.target.value);
    console.log(e.target.value, "++++");
  };

  let addData = () => {
    let temp = data;
    console.log(typeof temp, ...temp);
    temp.push(name);
    setData = [...temp];

    console.log(data, "=>>kkk");
    setName("");
  };
  let yy = data.map((e) => {
    // console.log('data',data)
  });

  let obj1 = {
    color: "red",
    fontFamily: "Arial",
    fontSize: "20px",
  };

  let DeleteData = () => {
    console.log("Inside Delete");
    let y = data.pop();
    console.log(data, "After pop");
    let u = [...data];
    setData(u);
  };
  let valu=0

  function handleRemove(id)
  {
    let newList=data.filter((item)=>item !==id)
   setData(newList)
   console.log(data)
  }

  return (
    <>
      <ul style={obj1}>{ans}</ul>
      <input type="text" onChange={changeLog} value={name}></input>
      <button style={obj1} onClick={addData}>
        Click
      </button>
      Kel
      <ul style={obj1}>
        {data.map((tt, idx) => (
          <>
            <li key="idx">
            
              {tt}{" "}  {idx}
              <button
                onClick={(idx) => {
                  // console.log(tt, idx);
                  tt='try to change'
                  console.log(tt, valu);
                 
                 data.slice(valu,1,'Ok chnaged')
                  console.log(data,'after edit')
                }}
              >
                Edit
              </button>
 <button  onClick={handleRemove}>Delete</button>

            </li>
          </>
        ))}
        <button onClick={DeleteData}>Delete</button>
      </ul>
    </>
  );
};

export { DataContainer, studentobj };

//BKID0008775
//8775116610000228
