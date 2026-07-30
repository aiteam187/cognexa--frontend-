import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import cognexaLogoLight from "../../assets/cognexa-logo-light.png";

const companyLinks = [{ label: "About Us", to: "/about-us" }];

const supportLinks = [
  { label: "Contact Us", to: "/contacts" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/help-topic" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  { label: "Twitter", href: "https://www.twitter.com/", icon: FaTwitter },
  { label: "Linkedin", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Youtube", href: "https://www.youtube.com/", icon: FaYoutube },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b0f] pt-16 pb-8 text-sm text-gray-300">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={cognexaLogoLight}
                alt="Cognexa"
                className="mb-3 h-8 w-auto"
              />
            </Link>
            <p className="max-w-xs text-gray-400">
              AI automation products for invoices, cameras, calls, and
              reports, built to run your business on autopilot.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors duration-200 hover:border-[#0E8FFB] hover:text-[#0E8FFB]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-4 font-semibold text-white">Company</h5>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors duration-200 hover:text-[#0E8FFB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-semibold text-white">Support</h5>
            <ul className="space-y-2.5">
              {supportLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors duration-200 hover:text-[#0E8FFB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-semibold text-white">Get in touch</h5>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                <span>Baner, Pune</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                <a
                  href="tel:+917557576999"
                  className="transition-colors duration-200 hover:text-[#0E8FFB]"
                >
                  +91 91 7557 6999
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                <a
                  href="mailto:support@cognexa.co.in"
                  className="transition-colors duration-200 hover:text-[#0E8FFB]"
                >
                  support@cognexa.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© Cognexa. Copyright 2026</p>
          <p>Made with care, in Pune.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
