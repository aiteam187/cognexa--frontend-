import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const HelpTopic = lazy(() => import("./pages/HelpTopic"));
const VisionIQ = lazy(() => import("./pages/VisionIQ"));
const Extracto = lazy(() => import("./pages/Extracto"));
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
      <Header />
      <ScrollToTop />
      <AnalyticsPageView />

      <div key={pathname} className="page-fade-in">
        <Suspense fallback={null}>
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
            <Route path="/cognexa-agent" element={<CognexaAgent />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
