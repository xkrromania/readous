import React from "react";
import { render } from "react-testing-library";
import Article from "./Article";

describe("Article Component", () => {
  it("should render properly", () => {
      const articleMock =
        {
          id: 1,
          title: "Article Title",
          content: `Test content`
        }

    const { getByText } = render(
      <Article article={articleMock}/>
    );

    const article = getByText(/Article Title/);
    const articleText = article.textContent;

    expect(articleText).toBe("Article Title");
  });
});
