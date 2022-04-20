import React, { useState} from "react";

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  const onButtonClick = () => {
    setCurrentCount(currentCount + 1);
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>

      <h1>Current Count: {currentCount}</h1>
    </div>
  )
}

