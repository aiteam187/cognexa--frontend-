import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpTopic from "./pages/HelpTopic";
import VisionIQ from "./pages/VisionIQ";

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
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
