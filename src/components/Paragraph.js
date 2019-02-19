import React from "react";

const Paragraph = ({
  content,
  isRead,
  isTitle,
  isSubtitle,
  handleRemove,
  handleIsRead
}) => {
  const ParagraphAsTitle = isTitle && <h2>{content}</h2>;
  const ParagraphAsSubtitle = isSubtitle && (
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <h3 className="paragraph__content">{content}</h3>
      <button className="btn delete-paragraph danger" onClick={handleRemove}>
        &#10006;
      </button>
      <button className="btn read-paragraph success" onClick={handleIsRead}>
        mark as {isRead ? <span>unread</span> : <span>read &#10003;</span>}
      </button>
    </div>
  );
  const ParagraphAsContent = !isTitle && !isSubtitle && (
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <button className="btn delete-paragraph danger" onClick={handleRemove}>
        &#10006;
      </button>
      <p className="paragraph__content">
        {content}
        <button className="btn read-paragraph success" onClick={handleIsRead}>
          mark as {isRead ? <span>unread</span> : <span>read &#10003;</span>}
        </button>
      </p>
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
