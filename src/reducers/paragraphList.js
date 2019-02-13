const paragraphList = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_ALL_PARAGRAPHS":
      return [];
    case "ADD_PARAGRAPH":
      return [
        ...state,
        {
          id: action.id,
          content: action.paragraph.content,
          isRead: false
        }
      ];
    case "TOGGLE_PARAGRAPH_READ_STATE":
      return state.map(paragraph =>
        paragraph.id === action.paragraph.id
          ? { ...paragraph, isRead: !action.paragraph.isRead }
          : paragraph
      );
    case "REMOVE_PARAGRAPH":
      return state.filter(paragraph => paragraph.id !== action.paragraphId);
    default:
      return state;
  }
};

export default paragraphList;
