import React, { Component } from "react";
import "./styles/main.scss";
import ParagraphList from "./containers/ParagraphList";
import AddArticle from "./containers/AddArticle";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="content">
            <h1>Readous</h1>
            <p>Read with focus</p>
          </div>
        </header>
        <section className="app__section">
          <div className="content main">
            <ParagraphList />
            <AddArticle />
          </div>
        </section>
        <footer className="app__footer">
          <div className="content">v.0.5</div>
        </footer>
      </div>
    );
  }
}

export default App;
