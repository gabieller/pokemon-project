import React from "react";
import { render } from "@testing-library/react";
import Pagination from ".";

describe("Pagination component", () => {
  it("should render the current page and total number of pages", () => {
    const { getByText } = render(
      <Pagination
        page={2}
        totalPages={5}
        handlePreviousPage={undefined}
        handleNextPage={undefined}
      />
    );
    const textElement = getByText("2 of 5");
    expect(textElement).toBeInTheDocument();
  });

  it("should render the previous page button if page is not the first page", () => {
    const { getByTestId } = render(
      <Pagination
        page={2}
        totalPages={5}
        handlePreviousPage={undefined}
        handleNextPage={undefined}
      />
    );
    const previousButton = getByTestId("previous-button");
    expect(previousButton).toBeInTheDocument();
  });

  it("should not render the previous page button if page is the first page", () => {
    const { queryByRole } = render(
      <Pagination
        page={1}
        totalPages={5}
        handlePreviousPage={undefined}
        handleNextPage={undefined}
      />
    );
    const previousButton = queryByRole("button", { name: /previous page/i });
    expect(previousButton).not.toBeInTheDocument();
  });

  it("should render the next page button if page is not the last page", () => {
    const { getByTestId } = render(
      <Pagination
        page={4}
        totalPages={5}
        handlePreviousPage={undefined}
        handleNextPage={undefined}
      />
    );
    const nextButton = getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
  });

  it("should not render the next page button if page is the last page", () => {
    const { queryByRole } = render(
      <Pagination
        page={5}
        totalPages={5}
        handlePreviousPage={undefined}
        handleNextPage={undefined}
      />
    );
    const nextButton = queryByRole("button", { name: /next page/i });
    expect(nextButton).not.toBeInTheDocument();
  });
});
