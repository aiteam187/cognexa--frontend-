import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the home page at /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /custom it services and solutions for your business/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the header navigation on every page", () => {
    render(
      <MemoryRouter initialEntries={["/about-us"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /book a demo/i }).length,
    ).toBeGreaterThan(0);
  });

  it("renders a 404 page for an unmatched route", async () => {
    render(
      <MemoryRouter initialEntries={["/this-page-does-not-exist"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", {
        name: /we couldn't find that page/i,
      }),
    ).toBeInTheDocument();
  });
});
