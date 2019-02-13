import { connect } from "react-redux";
import { addParagraph, removeAllParagraphs } from "../actions/index";
import AddArticle from "../components/AddArticle";

const mapDispatchToProps = {
  addParagraph,
  removeAllParagraphs
};

export default connect(
  null,
  mapDispatchToProps
)(AddArticle);
