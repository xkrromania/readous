import React from 'react';

const Score = ({readCount, total}) => {
  const percentRead = readCount/total * 100;
  const percentStyle = {width: percentRead + '%'};

  return (
  <section className="read-status">
    <div className="progress-bar">
        <span className="progress" style={percentStyle}></span>
    </div>
    <span>{readCount} out of {total}</span>
  </section>
)};

export default Score;