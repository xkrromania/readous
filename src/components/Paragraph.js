import React from "react";

const Paragraph = ({content, isRead, handleDelete, handleIsRead}) => (
  <>
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <p className="paragraph__content">{content}</p>
    </div>
    <div className="operations-bar">
      <div className="btn-group">
        <button className="btn primary" onClick={handleIsRead}>
          {isRead ? "Read Again" : "Mark as Read"}
        </button>
        <button className="btn danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  </>
);

export default Paragraph;
