import { connect } from 'react-redux';
import { addParagraph } from '../actions/index';
import AddArticle from '../components/AddArticle';

const mapDispatchToProps = {
  addParagraph,
};

export default connect(null, mapDispatchToProps)(AddArticle);