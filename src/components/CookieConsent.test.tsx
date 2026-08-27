import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CookieConsent from "./CookieConsent";
import { CONSENT_STORAGE_KEY, __resetAnalyticsForTests } from "../lib/analytics";

function renderBanner() {
  return render(
    <MemoryRouter>
      <CookieConsent />
    </MemoryRouter>,
  );
}

describe("CookieConsent", () => {
  beforeEach(() => {
    localStorage.clear();
    __resetAnalyticsForTests();
  });

  afterEach(() => {
    cleanup();
    document
      .querySelectorAll("script[src*='googletagmanager']")
      .forEach((node) => node.remove());
  });

  it("shows the banner on a first visit with no stored consent", () => {
    renderBanner();
    expect(
      screen.getByRole("dialog", { name: /cookie consent/i }),
    ).toBeInTheDocument();
  });

  it("does not show the banner if consent was already granted", () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
    renderBanner();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not show the banner if consent was already declined", () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
    renderBanner();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores 'granted' and hides the banner when Accept is clicked", async () => {
    const user = userEvent.setup();
    renderBanner();

    await user.click(screen.getByRole("button", { name: /accept/i }));

    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("granted");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores 'denied' and hides the banner when Decline is clicked", async () => {
    const user = userEvent.setup();
    renderBanner();

    await user.click(screen.getByRole("button", { name: /decline/i }));

    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("denied");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("only injects the GA script after Accept, never after Decline", async () => {
    const user = userEvent.setup();
    renderBanner();

    await user.click(screen.getByRole("button", { name: /decline/i }));
    expect(
      document.querySelector("script[src*='googletagmanager']"),
    ).not.toBeInTheDocument();
  });

  it("injects the GA script once Accept is clicked", async () => {
    const user = userEvent.setup();
    renderBanner();

    await user.click(screen.getByRole("button", { name: /accept/i }));
    expect(
      document.querySelector("script[src*='googletagmanager']"),
    ).toBeInTheDocument();
  });
});
