import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const HelpTopic = lazy(() => import("./pages/HelpTopic"));
const VisionIQ = lazy(() => import("./pages/VisionIQ"));
const Extracto = lazy(() => import("./pages/Extracto"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app bg-white">
      <Header />
      <ScrollToTop />

      <div key={pathname} className="page-fade-in">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/get-case-study/:id" element={<CaseStudyDetail />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-topic" element={<HelpTopic />} />
            <Route path="/vision-iq" element={<VisionIQ />} />
            <Route path="/extracto" element={<Extracto />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
