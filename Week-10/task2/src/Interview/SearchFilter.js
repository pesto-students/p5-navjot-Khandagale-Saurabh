import React, { useState } from "react";
import { useEffect } from "react";

export default function SearchFilter() {
  let User = [
    { id: 1, name: "Saurabh" },
    { id: 2, name: "Rahul" },
  ];

  let [name, setName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((val) => {
        let y = val;
        let ans = y.map((e) => e.title);
        console.log(ans);
        setName(ans);
      });
  }, []);

  let [found, setFound] = useState(User);
  let searchItem = (e) => {
    setTimeout(() => {
      let keyword = e.target.value;
      console.log(name, found, "Here");
      if (keyword !== "") {
        let result = User.filter((ele) => {
          return ele.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFound(result);
      } else {
        setFound(User);
      }
      setName(keyword);
    }, 1000);
  };
  return (
    <div>
      <input onChange={searchItem} placeholder="Type To Search"></input>
      {found && found.length > 0 ? (
        found.map((usr, id) => <p id={id}>{usr.name}</p>)
      ) : (
        <h1>No user Found</h1>
      )}
      {/* {console.log('found value',found)} */}
    </div>
  );
}
