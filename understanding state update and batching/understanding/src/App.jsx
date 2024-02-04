import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from 'react'
// Your task is to explain why the console.log shows the older value of count

/*The reason you see the older value of count in the console is due to the asynchronous nature of the setCount function in React.
When you call setCount(count + 1), React schedules an update to the state with the new value of count. However, this update is not applied immediately. React will continue with the execution of the function, and the console.log(count) statement will execute before the state is actually updated. */




function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App


/*import React from 'react'

// Your task is to explain why count value is not updated to 3 as expected

In Code 2, the count value is not updated to 3 as expected because of the asynchronous nature of state updates in React and the way the setCount function works



function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
* */