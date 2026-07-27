import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cognexaLogo from "../../assets/cognexa-logo-dark.png";
import NavSlideTabs from "./NavSlideTabs";
import DrawOutlineButton from "../DrawOutlineButton";

const productLinks = [
  { label: "Vision IQ", to: "/vision-iq" },
  { label: "Extracto", to: "/extracto" },
  { label: "Cognexa Agent", to: "/cognexa-agent" },
];

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Contact", to: "/contacts" },
  { label: "Careers", to: "/careers" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", children: productLinks },
  { label: "Solutions", to: "/solution" },
  { label: "Company", children: companyLinks },
];

const mobileNavLinks = [
  { label: "Home", to: "/" },
  ...productLinks,
  { label: "Solutions", to: "/solution" },
  ...companyLinks,
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200/70 bg-white/80 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white shadow-none"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between gap-6 px-6 transition-all duration-300 sm:px-10 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          <Link
            to="/"
            className="shrink-0 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={cognexaLogo}
              alt="Cognexa"
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-6" : "h-8"
              }`}
            />
          </Link>

          <div className="ml-auto hidden items-center gap-8 md:flex">
            <nav>
              <NavSlideTabs items={navLinks} />
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <DrawOutlineButton
                href="https://ashishnalhe2025.github.io/A2N-AI-Demo/"
                target="_blank"
                rel="noopener noreferrer"
                lineClassName="bg-[#0E8FFB]"
                className="rounded-md border border-[#0E8FFB]/30 px-5 py-2.5 font-semibold text-[#0E8FFB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB]/10"
              >
                Existing Customer
              </DrawOutlineButton>
              <DrawOutlineButton
                href="/contacts"
                lineClassName="bg-white"
                className="rounded-md bg-[#0E8FFB] px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
              >
                Book a Demo
              </DrawOutlineButton>
            </div>
          </div>

          <button
            className="transition-transform duration-200 hover:scale-110 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-overlay fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="mobile-drawer h-full w-72 bg-[#080b0f] p-6 text-white">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-8 ml-auto block transition-transform duration-200 hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="space-y-5">
              {mobileNavLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium transition-colors duration-200 hover:text-[#0E8FFB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <Link
                to="/contacts"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-[#0E8FFB] px-5 py-2.5 text-center font-semibold text-white"
              >
                Book a Demo
              </Link>
              <a
                href="https://ashishnalhe2025.github.io/A2N-AI-Demo/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md border border-[#0E8FFB]/40 px-5 py-2.5 text-center font-semibold text-[#0E8FFB]"
              >
                Existing Customer
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
