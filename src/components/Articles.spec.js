import React from "react";
import { render } from "react-testing-library";
import Articles from "./Articles";

describe("Articles Component", () => {
  it("should render properly", () => {
    const StoreMock = {
      articles: [
        {
          id: 1,
          title: "Article 1",
          content: `Test content`
        }
      ]
    };

    const { getByText } = render(
      <Articles store={StoreMock} isTimerVisible={true} />
    );

    const article = getByText(/Article 1/);
    const articleText = article.textContent;

    expect(articleText).toBe("Article 1");
  });
});
