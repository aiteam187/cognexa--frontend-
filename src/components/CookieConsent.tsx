import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import {
  getStoredConsent,
  loadAnalytics,
  storeConsent,
} from "../lib/analytics";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === "granted") {
      loadAnalytics();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    storeConsent("granted");
    loadAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    storeConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 px-5 py-4 shadow-[0_-4px_20px_-4px_rgb(0_0_0_/_0.1)] backdrop-blur-sm sm:px-8"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-[#0E8FFB]" />
          <p>
            We use cookies to understand how visitors use our site and
            improve your experience. See our{" "}
            <Link
              to="/privacy-policy"
              className="font-medium text-[#0E8FFB] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="min-h-11 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition duration-200 hover:bg-gray-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="min-h-11 rounded-md bg-[#0E8FFB] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
