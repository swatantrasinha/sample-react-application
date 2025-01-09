import { useState, useRef } from 'react'
import './App.css'
import isEvenLengthString from 'web-dev-package';
import {Button, useCounter} from 'counter-pkg-react'

function App() {
  const inputRef = useRef(null);
  const [userText, setUserText] = useState('');
  const {count, increment, decrement} = useCounter();
  
  const clickHandler= () => {
    const result= isEvenLengthString(userText);
    console.log(` ${userText} typed by user and its length is even : ${result}`);
  };

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
      
      <input 
        ref={inputRef} 
        type='text' 
        id='user-text' 
        value={userText}  
        onChange={(event) => setUserText(event.target.value)}
        />

        <button onClick={clickHandler}>Click Me</button>
       
      </div>
      <hr />
      <div className="card">
      <div><Button onClick={increment}>Plus</Button></div>
        <h2>Count : {count}</h2>
        <div><Button onClick={decrement} > MINUS </Button></div>
        </div> 
     
   
    </>
  )
}

export default App
