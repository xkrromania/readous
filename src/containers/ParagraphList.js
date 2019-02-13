import { connect } from 'react-redux'
import { toggleParagraphReadState, removeParagraph } from '../actions'
import ParagraphList from '../components/ParagraphList'

const mapStateToProps = state => ({
  paragraphList: state.paragraphList
})

const mapDispatchToProps = dispatch => ({
  toggleParagraphReadState: paragraph => dispatch(toggleParagraphReadState(paragraph)),
  removeParagraph: paragraphId => dispatch(removeParagraph(paragraphId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParagraphList)