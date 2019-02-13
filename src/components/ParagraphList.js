import React, { Component } from "react";
import Paragraph from "./Paragraph";
import Timer from "./Timer";

class ParagraphList extends Component {
  INITIAL_TIME = 5;

  constructor(props) {
    super(props);
    this.state = {
      startTime: this.INITIAL_TIME,
      isTimerVisible: true
    };
  }

  resetTimer = () => {
    this.setState({ startTime: this.INITIAL_TIME, isTimerVisible: true });
  };

  handleTimerEnded = () => {
    this.setState({ isTimerVisible: false });
  };

  render() {
    const {
      paragraphList,
      removeParagraph,
      toggleParagraphReadState
    } = this.props;

    const { startTime, isTimerVisible } = this.state;
    const hasParagraphs = paragraphList.length > 0;
    const TimerRender = hasParagraphs && isTimerVisible && (
      <Timer startTime={startTime} timerEnded={this.handleTimerEnded} />
    );

    const listRender = paragraphList.map(paragraph => (
      <Paragraph
        key={paragraph.id}
        content={paragraph.content}
        isRead={paragraph.isRead}
        handleDelete={() => removeParagraph(paragraph.id)}
        handleIsRead={() => toggleParagraphReadState(paragraph)}
      />
    ));
    return (
      <>
        <div
          className={
            isTimerVisible ? "paragraph-list" : "paragraph-list not-visible"
          }
        >
          {TimerRender}
          {listRender}
        </div>

        {!isTimerVisible && (
          <div class="timer-container">
            <button className="btn restart-timer" onClick={this.resetTimer}>
              Restart Reading
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ParagraphList;
