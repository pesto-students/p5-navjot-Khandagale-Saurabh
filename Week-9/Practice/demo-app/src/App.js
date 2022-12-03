
import './App.css';
import Cts  from './Cts';
import Demo from './Demo'
let obj={
  name:'Saurabh',
  data:[10,20,30,40,50]
}
let LastName='Khandagale'
function App() {
  return (
    <div className="App">
<Cts></Cts>
{/* <Demo  LastName={LastName}></Demo> */}
<Demo  obj={obj}></Demo>
    </div>
  );
}

export default App;
