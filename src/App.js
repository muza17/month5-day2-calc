
import { useState } from 'react';
import './App.css';

function App() {
    const[x1, setX1] = useState(0);
    const[y1, setY1] = useState(0);
    const[x2, setX2] = useState(0);
    const[y2, setY2] = useState(0);
    const[x3, setX3] = useState(0);
    const[y3, setY3] = useState(0);
    const[x4, setX4] = useState(0);
    const[y4, setY4] = useState(0);


  return (
    <>
      <div className='container'>
        <h1>Calculator</h1>
        <div className='plus'>
          <input onChange={(e) => setX1(Number(e.target.value))}/>+
          <input onChange={(e) => setY1(Number(e.target.value))}/> = {x1+y1}
        </div>
        <div className='minus'>
          <input onChange={(e) => setX2(Number(e.target.value))}/>-
          <input onChange={(e) => setY2(Number(e.target.value))}/> = {x2-y2}
        </div>
        <div className='multiply'>
          <input onChange={(e) => setX3(Number(e.target.value))}/>x
          <input onChange={(e) => setY3(Number(e.target.value))}/> = {x3*y3}
        </div>
        <div className='divide'>
          <input onChange={(e) => setX4(Number(e.target.value))}/>/
          <input onChange={(e) => setY4(Number(e.target.value))}/> = {x4/y4}
        </div>
      </div>

    </>
    
    
  );
}

export default App;
