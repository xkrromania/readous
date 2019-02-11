import React from "react";
import Article from "./Article";

const Articles = props => {
  const {store, isTimerVisible} = props;
  const articlesRender = store.articles.map(article => <Article key={article.id} article={article} />);
  return <div className = {(isTimerVisible ? "articles" : "articles not-visible")}>{articlesRender}</div>;
};

export default Articles;
