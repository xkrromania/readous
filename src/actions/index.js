let nextParagraphId = 0;
export const addParagraph = paragraph => {
  return {
    type: "ADD_PARAGRAPH",
    id: nextParagraphId++,
    paragraph
  };
};

export const removeParagraph = paragraphId => {
  return {
    type: "REMOVE_PARAGRAPH",
    paragraphId
  };
};

export const toggleParagraphReadState = paragraph => {
  return {
    type: "TOGGLE_PARAGRAPH_READ_STATE",
    paragraph
  }
}
