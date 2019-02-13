import React from "react";

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      textareaHeight: "37px"
    };
    this.textareaRef = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
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

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    const article = this.state;
    let paragraphs = article.content.split("\n");
    for (let i in paragraphs) {
      if (paragraphs[i].length > 0) {
        this.props.addParagraph({
          content: paragraphs[i]
        });
      }
    }
    this.setState({
      title: "",
      content: "",
      textareaHeight: "37px"
    });
    this.scrollToTop();
    event.preventDefault();
  }

  render() {
    const { title, content, textareaHeight } = this.state;
    const textareaStyle = { height: textareaHeight };
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="input-control"
            value={title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
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
