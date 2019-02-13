import React from "react";

const Paragraph = ({
  content,
  isRead,
  isTitle,
  handleRemove,
  handleIsRead
}) => {
  const ParagraphAsTitle = isTitle && <h2>{content}</h2>;
  const ParagraphContent = !isTitle && (
    <div
      onClick={handleIsRead}
      className={isRead ? "paragraph not-visible" : "paragraph"}
    >
     <button className="btn delete-paragraph danger" onClick={handleRemove}>
      &#10006;
      </button>
      <p className="paragraph__content">{content}</p>
    </div>
  );
  return (
    <>
      {ParagraphAsTitle}
      {ParagraphContent}
    </>
  );
};

export default Paragraph;
