import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Paginate } from "../src";

afterEach(cleanup);

describe("Pagination", () => {
  it("Renders mobile pagination correctly", () => {
    const { asFragment } = render(
      <Paginate page={0} setPage={() => {}} totalPages={10} isMobile />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders desktop pagination correctly", () => {
    const { asFragment } = render(
      <Paginate page={0} setPage={() => {}} totalPages={10} isMobile={false} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Can go to a different page on mobile", () => {
    let page = 0;

    const { rerender, getByTestId } = render(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile
      />,
    );

    // starts at 0, but cannot go back
    fireEvent.click(getByTestId("prevPage"));
    fireEvent.click(getByTestId("nextPage"));

    rerender(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile
      />,
    );

    expect(page).toBe(1);

    fireEvent.click(getByTestId("prevPage"));

    rerender(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile
      />,
    );

    expect(page).toBe(0);
  });

  it("Should not move past totalPages", () => {
    let page = 10;

    const { rerender, getByTestId } = render(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile
      />,
    );

    fireEvent.click(getByTestId("nextPage"));

    rerender(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile
      />,
    );

    expect(page).toBe(10);
  });

  it("Can go to a different page on desktop", () => {
    let page = 0;

    const { rerender, getByTestId } = render(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile={false}
      />,
    );

    fireEvent.click(getByTestId("nextPage"));

    rerender(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile={false}
      />,
    );

    expect(page).toBe(1);

    fireEvent.click(getByTestId("prevPage"));

    rerender(
      <Paginate
        page={page}
        setPage={(newPage: number) => {
          page = newPage;
        }}
        totalPages={10}
        isMobile={false}
      />,
    );

    expect(page).toBe(0);
  });
});
