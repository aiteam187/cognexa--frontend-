import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTopButton from "./components/BackToTopButton";
import PageLoader from "./components/PageLoader";
import CookieConsent from "./components/CookieConsent";
import { isAnalyticsLoaded } from "./lib/analytics";
import Home from "./pages/Home";

const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const HelpTopic = lazy(() => import("./pages/HelpTopic"));
const VisionIQ = lazy(() => import("./pages/VisionIQ"));
const Extracto = lazy(() => import("./pages/Extracto"));
const ANPR = lazy(() => import("./pages/ANPR"));
const CognexaAgent = lazy(() => import("./pages/CognexaAgent"));
const Careers = lazy(() => import("./pages/Careers"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsPageView() {
  const location = useLocation();
  useEffect(() => {
    if (!isAnalyticsLoaded()) return;
    window.gtag?.("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);
  return null;
}

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[#0E8FFB] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header />
      <ScrollToTop />
      <AnalyticsPageView />

      <main id="main-content" key={pathname} className="page-fade-in">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-topic" element={<HelpTopic />} />
            <Route path="/vision-iq" element={<VisionIQ />} />
            <Route path="/extracto" element={<Extracto />} />
            <Route path="/anpr" element={<ANPR />} />
            <Route path="/cognexa-agent" element={<CognexaAgent />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTopButton />
      <CookieConsent />
    </div>
  );
}

export default App;
