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
  const Content =
    (isSubtitle && <h3> {content} </h3>) || (!isSubtitle && <>{content}</>);
  const ParagraphContent = !isTitle && (
    <div className={isRead ? "paragraph not-visible" : "paragraph"}>
      <button className="btn delete-paragraph danger" onClick={handleRemove}>
        &#10006;
      </button>
      <p className="paragraph__content">
        {Content}
        <button className="btn read-paragraph success" onClick={handleIsRead}>
          mark as {isRead ? <span>unread</span> : <span>read &#10003;</span>}
        </button>
      </p>
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
