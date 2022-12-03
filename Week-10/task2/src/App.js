import React, { createContext, useEffect, useState } from "react";
import useRandomJoke from "./demo/useRandomJoke";
// import "./App.css";
import File from "./demo/File1";
import Task2 from "./demo/Task2";
import Task from "./demo/Task";
import UseState_object from "./demo/UseState_Object";
import A from "./Context/A";
import B from "./Context/B";
import Fetch from "./demo/Fetch";
import Nav1 from "./Nav/Nav1";
import Parent from "./UseMemo.js/Parent";
import Child from "./UseMemo.js/Child";
import SearchFilter from "./Interview/SearchFilter";
import React_Demo from "./Interview/React_Demo";
import Todo1 from "./Class  Component/Todo1";
import Movie from "./Movie/Movie";
import Grid from "./Movie/Grid";
import Review from "./Github/Review";
import Question from "./Question_Asnwer/Question";
import MenuShow from "./Menu/MenuShow";
import Tabs1 from "./Tabs_Project/Tabs1";

// export let NameContext = createContext();
function App() {
  // let joke = useRandomJoke();
  let name1 = "Saurabh Khandagale";
  let url = `https://jsonplaceholder.typicode.com/todos/`;
  let abc = () => {
    console.log("object");
  };
  //memo=[arr,obj]
  //call=> memorize(function)
  return (
    <>
      {/* <File  url={url}>Passing Data as Child</File> */}
      {/* {console.log(joke, "===")} */}
      {/* {joke} */}
      {/* <Task></Task> */}
      {/* <UseState_object></UseState_object>
      <NameContext.Provider value={'Rahul KumarJi'}>
        <B/>
      </NameContext.Provider> */}
      {/* <B user={name1}></B> */}
      {/* <Fetch></Fetch> */}
      {/* <Nav1></Nav1> */}
      {/* <B></B> */}

      {/* <Parent></Parent> */}
      {/* <SearchFilter></SearchFilter> */}
      {/* <React_Demo></React_Demo> */}
      {/* <Todo1></Todo1> */}
      {/* <Movie></Movie> */}
      {/* <Grid></Grid> */}
     {/* <Review></Review> */}
     {/* <Question></Question> */}
     {/* <MenuShow></MenuShow> */}
     <Tabs1></Tabs1>
    </>
  );
}

export default App;
// useme:=
// pa=> Child
// App.js => pa{pa}
