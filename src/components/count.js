import React, { useEffect, useState } from 'react';

const NumberCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 1000 / 60; // 60 FPS
    const step = (targetNumber / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [targetNumber, duration]);

  return (
    <div className='font-semibold text-6xl'>
      {count}
    </div>
  );
};

export default NumberCounter;
