import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const Increment = () => {  //Function to Increase value of counter

    setCounter(counter + 1) // For UI updation.

    console.log("Incrementing, Count is : ", counter + 1)
  }
  const Decrement = () => { //Function to Decrease value of counter

    setCounter(counter - 1) // For UI updation.

    console.log("Decrementing, Count is : ", counter - 1)
  }
  return (
    <>
      <h1>This is a Counter!</h1>
      <p>Count : {counter}</p>

      <h1>This is another Counter!</h1>
      <p>Count : {counter}</p>

      <h1>One More!</h1>  
      <p>Count : {counter}</p>

      <button onClick={Increment}>UP</button>
      <button onClick={Decrement}>DOWN</button>
    </>
  )
}

export default App

/*  *********Notes*************
    1. There is no problem with Variable updation or function or anything else because it is classic Javascript. Variable is getting update with each click.
    2. The problem is with UI Updation.
    3. The changes and updates done with UI is decided by "React" because updating one variable can cause changes at several different places or sections in code.
    4. React "reacts" when then variables are updated or modified.
     4.1. If there are more than one use of same variable in a webpage in different sections, In classic Javascript we have to access each element first then update the variable which can be hectic in a large code.
    5. This is where HOOKS come in picture.
    6. React tells programmer that you can decide which variable to update, modify or doing any other operation on veriables..But the Updation in UI will be only handled by React.
    7. These updations are done using HOOKS.
    8. It is the concept of using one function to make changes in variable all across the page.
    9. There are several Hooks like useState, useRef, useReducer
*/
