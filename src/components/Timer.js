import React, { useState, useEffect } from "react";

const Timer = function(props) {
  const [time, setTime] = useState(Number(props.startTime));
  var timerID = null;

  function cleanup() {
    clearInterval(timerID);
  }

  useEffect(() => {
    timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    if (time > 0) {
      setTime(time - 1);
    } else {
      props.timerEnded();
      cleanup();
    }
  }

  return (
    <div className='timer-container'>
      <span className='timer'>Remaining: {time}s.</span>
    </div>
  );
};

export default Timer;
