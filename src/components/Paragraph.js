import React from "react";

const Paragraph = ({
  content,
  isRead,
  isTitle,
  handleDelete,
  handleIsRead
}) => {
  const ParagraphAsTitle = isTitle && <h2>{content}</h2>;
  const ParagraphContent = !isTitle && (
    <>
      <p className="paragraph__content">{content}</p>
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
  return (
    <>
      {ParagraphAsTitle}
      <div className={isRead ? "paragraph not-visible" : "paragraph"}>
        {ParagraphContent}
      </div>
    </>
  );
};

export default Paragraph;
