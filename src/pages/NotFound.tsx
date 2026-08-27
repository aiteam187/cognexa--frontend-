import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import SEO from "../components/SEO";
import DrawOutlineButton from "../components/DrawOutlineButton";

const popularLinks = [
  { label: "Extracto", to: "/extracto" },
  { label: "Vision IQ", to: "/vision-iq" },
  { label: "ANPR", to: "/anpr" },
  { label: "Cognexa Agent", to: "/cognexa-agent" },
  { label: "Solutions", to: "/solution" },
  { label: "Contact Us", to: "/contacts" },
];

function NotFound() {
  useEffect(() => {
    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "robots");
      document.head.appendChild(el);
    }
    el.setAttribute("content", "noindex, follow");

    return () => {
      // Restore default indexing behavior once the user navigates away,
      // so this doesn't leak a noindex tag onto the next page.
      el?.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
      />
      <section className="flex min-h-[70vh] items-center justify-center px-5 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0E8FFB]/10">
            <Compass className="h-8 w-8 text-[#0E8FFB]" strokeWidth={1.5} />
          </span>
          <p className="mt-6 text-sm font-bold tracking-widest text-[#0E8FFB] uppercase">
            404 error
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            We couldn't find that page
          </h1>
          <p className="mt-4 text-gray-500">
            The page you're looking for doesn't exist, may have been moved,
            or the link might be broken.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DrawOutlineButton
              href="/"
              lineClassName="bg-white"
              className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Back to homepage
            </DrawOutlineButton>
            <DrawOutlineButton
              href="/contacts"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB] px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB] hover:text-white"
            >
              Contact us
            </DrawOutlineButton>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm font-semibold text-gray-500">
              Or explore one of our products
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {popularLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-[#0E8FFB] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
