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
  const isSubtitle = content => {
    const lastCharacter = content[content.length - 1];
    const endOfSequence = ["?", "!", ".", ":", "…", "”", '"', "'"];
    return endOfSequence.indexOf(lastCharacter) < 0;
  };
  const listRender = paragraphList.map((paragraph, index) => (
    <>
      <Paragraph
        isTitle={index === 0}
        key={index}
        isSubtitle={isSubtitle(paragraph.content)}
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
    <button
      className="btn danger remove-all-paragraphs"
      onClick={removeAllParagraphs}
    >
      Clear All
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
