import { Link } from "react-router-dom";
import cognexaLogoLight from "../../assets/cognexa-logo-light.png";

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Case Studies", to: "/case-study" },
];

const supportLinks = [
  { label: "Contact Us", to: "/contacts" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/help-topic" },
];

const followLinks = [
  {
    label: "Facebook",
    href: "https://copilot.microsoft.com/chats/DQcYCk89jzdQuAcLq4ZT5",
  },
  { label: "Twitter", href: "https://www.twitter.com/123" },
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Youtube", href: "https://www.youtube.com/watch?v=n5t0z4JhiWk" },
];

function Footer() {
  return (
    <footer className="bg-[#080b0f] pt-16 pb-6 text-sm text-gray-300">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={cognexaLogoLight}
                alt="Cognexa"
                className="mb-3 h-8 w-auto"
              />
              <p className="text-gray-400">Learn the AI, Know the Future</p>
            </Link>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-8">
            <div>
              <h5 className="mb-4 font-semibold text-white">Company</h5>
              <ul className="space-y-2">
                {companyLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-[#0E8FFB]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-semibold text-white">Support</h5>
              <ul className="space-y-2">
                {supportLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-[#0E8FFB]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-semibold text-white">Follow Us</h5>
              <ul className="space-y-2">
                {followLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0E8FFB]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-gray-400">
          <p>Baner, Pune</p>
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:+919975459600" className="hover:text-[#0E8FFB]">
              +91 99754 59600
            </a>{" "}
            | Mail:{" "}
            <a
              href="mailto:contact@cognexa.com"
              className="hover:text-[#0E8FFB]"
            >
              contact@cognexa.com
            </a>
          </p>
          <p className="mt-4 text-xs text-gray-500">
            © Cognexa. Copyright 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
