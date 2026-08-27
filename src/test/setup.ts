import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement IntersectionObserver, which components like
// Reveal and CountUp use to trigger scroll-based animations.
class MockIntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly scrollMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
  takeRecords = (): IntersectionObserverEntry[] => [];
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// jsdom doesn't implement smooth scrolling; ScrollToTop/BackToTopButton
// call this on route changes and button clicks.
window.scrollTo = vi.fn();
