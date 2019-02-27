import React from "react";

const Paragraph = ({
  content,
  isRead,
  isTitle,
  isSubtitle,
  handleIsRead
}) => {
  const operationsBar = (
    <div className="operations-bar">
      <button tabIndex = "0" className="btn read-paragraph success" onClick={handleIsRead}>
        mark as {isRead ? <span>unread</span> : <span>read &#10003;</span>}
      </button>
    </div>
  );
  const ParagraphAsTitle = isTitle && <h2>{content}</h2>;
  const ParagraphAsSubtitle = !isTitle && isSubtitle && (
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <h3 className="paragraph__content">{content}</h3>
      {operationsBar}
    </div>
  );
  const ParagraphAsContent = !isTitle && !isSubtitle && (
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <p className="paragraph__content">{content}</p>
      {operationsBar}
    </div>
  );
  return (
    <>
      {ParagraphAsTitle}
      {ParagraphAsSubtitle}
      {ParagraphAsContent}
    </>
  );
};

export default Paragraph;
