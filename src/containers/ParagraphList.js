import { connect } from "react-redux";
import {
  toggleParagraphReadState,
  removeParagraph,
  removeAllParagraphs
} from "../actions";
import ParagraphList from "../components/ParagraphList";

const countRead = list => {
  return list.filter(function(paragraph) {
    return paragraph.isRead;
  }).length;
};

const mapStateToProps = state => ({
  paragraphList: state.paragraphList,
  paragraphReadCount: countRead(state.paragraphList)
});

const mapDispatchToProps = dispatch => ({
  toggleParagraphReadState: paragraph =>
    dispatch(toggleParagraphReadState(paragraph)),
  removeParagraph: paragraphId => dispatch(removeParagraph(paragraphId)),
  removeAllParagraphs: () => dispatch(removeAllParagraphs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParagraphList);
