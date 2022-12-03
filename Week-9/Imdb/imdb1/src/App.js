
import './App.css';
import Home from './Page/home/Home';
import Form1 from './Class/Form';
import Header from './component/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mounting1  from './component/mounting/Mounting1';
import About from './component/About'
// import Class from './Class/Class';
import{Std} from'./Student/Std'
import M2 from './component/mounting/M2';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route exact path='/' element={<Header></Header>}/>
    
      <Route exact path='/home' element={<Home></Home>}/>
      <Route exact path='movie/:id' element={<h1>Movie Details</h1>}/>
      <Route exact path='/movies/:type' element={<Home></Home>}/>
      <Route exact path='/*' element={<h1>Error</h1>}/>
      <Route exact path='/Mounting1'   element={<Mounting1 city='Nagpur'></Mounting1>} />
      {/* <Route exact path='/About' element={<About></About>}/> */}
      <Route exact path='/h1' element={<Form1></Form1>}/>
      <Route exact path='/m2' element={<M2></M2>}/>
      <Route exact path='/std' element={<Std></Std>}/>
     
   </Routes>
        
   </BrowserRouter>
    </div>
  );
}

export default App;
