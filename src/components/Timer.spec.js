import React from "react";
import { render } from "react-testing-library";
import Timer from "./Timer";

describe("Timer Component", () => {
  it("should render properly", () => {
    const timerEndedMock = jest.fn();

    const { getByText } = render(
      <Timer startTime="10" timerEnded={timerEndedMock} />
    );

    const timer = getByText(/Time Left/);
    const timerText = timer.textContent;

    expect(timerText).toBe("Time Left 10.");
  });
});
