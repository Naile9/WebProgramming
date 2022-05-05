
import { useState } from 'react';
import './App.css';

function App() {
  const [number , setNumber ] = useState(0)
  return (

    <div className="Ap">
      <h1>Hello World! Naile</h1>
      <h1>Name: Naile Emini</h1>
      <h1>Message: Wellcome Message!</h1>
      <h1>Counter value is: {number}</h1>
      <div>
        <button onClick={e => setNumber(number + 1)}>Increase</button>
        <button onClick={e => setNumber(number - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
