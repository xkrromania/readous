const articleParser = {
  parse: article => {
    let paragraphs = article.content.split("\n");

    return paragraphs
      .filter(paragraph => paragraph.length > 0)
  }
};

export default articleParser;
