import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';
import { Counter } from './component/Counter.jsx';



function App() {
  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
