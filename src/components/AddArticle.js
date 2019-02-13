import React from "react";

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      textareaHeight: "37px"
    };
    this.textareaRef = React.createRef();
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollStep() {
    const scrollStepInPx = 50;
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  scrollToTop() {
    const delayInMs = 17;
    let intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId: intervalId });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
      textareaHeight: Number(event.target.scrollHeight) + "px"
    });
  }

  handleSubmit(event) {
    const article = this.state;
    this.props.removeAllParagraphs();
    let paragraphs = article.content.split("\n");
    for (let i in paragraphs) {
      if (paragraphs[i].length > 0) {
        this.props.addParagraph({
          content: paragraphs[i]
        });
      }
    }
    this.setState({
      content: "",
      textareaHeight: "37px"
    });
    this.scrollToTop();
    event.preventDefault();
  }

  render() {
    const { content, textareaHeight } = this.state;
    const textareaStyle = { height: textareaHeight };
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Article</label>
          <textarea
            ref={this.textareaRef}
            style={textareaStyle}
            className="input-control"
            value={content}
            onChange={this.handleContentChange}
          />
        </div>
        <button className="btn action" onClick={this.handleSubmit}>
          Add Article
        </button>
      </form>
    );
  }
}

export default AddArticle;
