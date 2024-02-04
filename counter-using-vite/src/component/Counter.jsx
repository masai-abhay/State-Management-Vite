// Counter.jsx

import React, { useState } from 'react';




export function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <p className="count">{count}</p>
      <button className="increase-btn" onClick={handleIncrease}>
        Increase
      </button>
      <button className="decrease-btn" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}
