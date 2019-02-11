import React from "react";

const Article = props => {
  const article = props.article;
  return (
    <div className="article">
      <h2 className="article__title">{article.title}</h2>
      <p className="article__content">{article.content}</p>
    </div>
  );
};

export default Article;
