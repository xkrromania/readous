import React from "react";
import Paragraph from "./Paragraph";
import Score from "./Score";

const ParagraphList = ({
  paragraphList,
  paragraphReadCount,
  removeParagraph,
  removeAllParagraphs,
  toggleParagraphReadState
}) => {
  const listRender = paragraphList.map((paragraph, index) => (
    <>
      <Paragraph
        isTitle={index === 0}
        key={paragraph.id}
        content={paragraph.content}
        isRead={paragraph.isRead}
        handleRemove={() => removeParagraph(paragraph.id)}
        handleRemoveAll={() => removeAllParagraphs()}
        handleIsRead={() => toggleParagraphReadState(paragraph)}
      />
    </>
  ));
  const paragraphsWithoutTitleLength = paragraphList.length - 1;
  const hasParagraphs = paragraphsWithoutTitleLength > 0;
  const statusRender = hasParagraphs && (
    <Score
      readCount={paragraphReadCount}
      total={paragraphsWithoutTitleLength}
    />
  );
  const clearAllButton = hasParagraphs && (
    <button className="btn action remove-all-paragraphs" onClick={removeAllParagraphs}>
      Remove All
    </button>
  );

  return (
    <>
      {statusRender}
      <div className="paragraph-list">
        {listRender}
        {clearAllButton}
      </div>
    </>
  );
};

export default ParagraphList;
