import React, { Component } from "react";
import { decorate, observable } from "mobx";

import "./styles/main.scss";
import Articles from "./components/Articles";
import Timer from "./components/Timer";

class Store {
  articles = [
    {
      id: 1,
      title: "Content again?",
      content: `
      Now that you have your component hierarchy, it’s time to implement your
      app. The easiest way is to build a version that takes your data model and
      renders the UI but has no interactivity. It’s best to decouple these
      processes because building a static version requires a lot of typing and
      no thinking, and adding interactivity requires a lot of thinking and not
      a lot of typing. We’ll see why.
      To build a static version of your app that renders your data model,
      you’ll want to build components that reuse other components and pass data
      using props. props are a way of passing data from parent to child. If
      you’re familiar with the concept of state, don’t use state at all to
      build this static version. State is reserved only for interactivity,
      that is, data that changes over time. Since this is a static version
      of the app, you don’t need it.`
    }
  ];

  addArticle(article) {
    this.articles.push(article);
  }
}

decorate(Store, {
  articles: observable
});

const appStore = new Store();

class App extends Component {
  INITIAL_TIME = 5;

  constructor(props) {
    super(props);
    this.state = { startTime: this.INITIAL_TIME, isTimerVisible: true };
  }
  resetTimer = () => {
    this.setState({ startTime: this.INITIAL_TIME, isTimerVisible: true });
    console.log("Reset timer");
  };
  handleTimerEnded = () => {
    this.setState({ isTimerVisible: false });
    console.log("Timer Ended");
  };
  render() {
    const { startTime, isTimerVisible } = this.state;
    const TimerRender = isTimerVisible && (
      <Timer startTime={startTime} timerEnded={this.handleTimerEnded} />
    );
    return (
      <div className="app">
        <header className="app__header">
          <div className="content">
            <h1>Readous</h1>
            <p>Read in focused sessions</p>
          </div>
        </header>
        <section className="app__section">
          <div className="content">
            <Articles isTimerVisible={isTimerVisible} store={appStore} />
            {TimerRender}
            {!isTimerVisible && (
              <button className="btn restart-reading" onClick={this.resetTimer}>
                Restart Reading
              </button>
            )}
          </div>
        </section>
        <footer className="app__footer">
          <div className="content">Dev in Progress</div>
        </footer>
      </div>
    );
  }
}

export default App;
