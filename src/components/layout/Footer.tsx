import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import cognexaLogoLight from "../../assets/cognexa-logo-light.png";

const exploreLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Solutions", to: "/solution" },
  { label: "Contact Us", to: "/contacts" },
  { label: "Careers", to: "/careers" },
];

const legalLinks = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/help-topic" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
  { label: "Twitter", href: "https://www.twitter.com/", icon: FaTwitter },
  { label: "Linkedin", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Youtube", href: "https://www.youtube.com/", icon: FaYoutube },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="mb-5 text-xs font-semibold tracking-wider text-white uppercase">
      {children}
    </h5>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b0f] pt-16 pb-8 text-sm text-gray-300">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src={cognexaLogoLight}
                alt="Cognexa"
                className="mb-4 h-8 w-auto"
              />
            </Link>
            <p className="max-w-xs leading-relaxed text-gray-400">
              AI automation products for invoices, cameras, calls, and
              reports, built to run your business on autopilot.
            </p>
            <div className="mt-6 flex items-center gap-3">
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

          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
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

          <div className="lg:col-span-2">
            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
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

          <div className="lg:col-span-4">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/9P8FYwYJNYivCEdX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-gray-400 transition-colors duration-200 hover:text-[#0E8FFB]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                  <span>
                    Office No. 6, SR. No. 1/1A/1/7/2 &amp; 3, Revati Arcade
                    II, Baner, Pune, Maharashtra 411069
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                <a
                  href="tel:+917557576999"
                  className="transition-colors duration-200 hover:text-[#0E8FFB]"
                >
                  +91 91 7557 6999
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                <a
                  href="mailto:support@cognexa.co.in"
                  className="transition-colors duration-200 hover:text-[#0E8FFB]"
                >
                  support@cognexa.co.in
                </a>
              </li>
            </ul>

            <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Cognexa office location, Baner, Pune"
                src="https://www.google.com/maps?q=DAccess+Security+Systems+Pvt.+Ltd,18.5583791,73.791428&output=embed"
                width="100%"
                height="130"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[40%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© Cognexa. Copyright 2026</p>
          <p>Made with care, in Pune.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
