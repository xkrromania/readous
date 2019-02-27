import React from "react";

const Score = ({ readCount, total }) => {
  const percentRead = (readCount / total) * 100;
  const percentStyle = { width: percentRead + "%" };
  const uncompletedMessage = percentRead !== 100 && (
    <span>
      read {readCount} out of {total}
    </span>
  );
  const completedMessage = percentRead === 100 && <span>Completed!</span>;

  return (
    <section className="read-status">
      <div className="progress-bar">
        <span className="progress" style={percentStyle} />
      </div>
      {uncompletedMessage}
      {completedMessage}
    </section>
  );
};

export default Score;
