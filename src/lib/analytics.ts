export const GA_MEASUREMENT_ID = "G-CFPS4MNW6Y";
export const CONSENT_STORAGE_KEY = "cognexa-cookie-consent";

export type ConsentValue = "granted" | "denied";

let analyticsLoaded = false;

export function getStoredConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // localStorage unavailable (private mode, blocked storage) — consent
    // just won't persist across visits, which is an acceptable fallback.
  }
}

/** Loads the GA4 script and starts sending events. Safe to call multiple times. */
export function loadAnalytics() {
  if (analyticsLoaded || typeof window === "undefined") return;
  analyticsLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

export function isAnalyticsLoaded() {
  return analyticsLoaded;
}

/** Test-only: resets the module's loaded flag between test cases. */
export function __resetAnalyticsForTests() {
  analyticsLoaded = false;
}
