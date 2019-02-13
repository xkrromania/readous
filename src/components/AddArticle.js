import React from "react";

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      textareaHeight: ""
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
    const delayInMs = 10;
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
    this.props.removeAllParagraphs();
    const article = this.state;
    this.parseArticleToParagraphs(article);
    this.setState({
      content: "",
      textareaHeight: "37px"
    });
    this.scrollToTop();
    event.preventDefault();
  }

  parseArticleToParagraphs(article) {
    let paragraphs = article.content.split("\n");
    for (let i in paragraphs) {
      if (paragraphs[i].length > 0) {
        this.props.addParagraph({
          content: paragraphs[i]
        });
      }
    }
  }
  render() {
    const { content, textareaHeight } = this.state;
    const textareaStyle = { height: textareaHeight };
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea
            ref={this.textareaRef}
            style={textareaStyle}
            className="input-control"
            value={content}
            onChange={this.handleContentChange}
            placeholder="Copy the article content here..."
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
