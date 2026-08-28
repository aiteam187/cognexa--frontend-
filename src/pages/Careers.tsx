import { useRef, useState } from "react";
import {
  Heart,
  Rocket,
  Sparkles,
  Users,
  CheckCircle2,
  Loader2,
  Paperclip,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";

const values = [
  {
    icon: Rocket,
    title: "Move fast, ship real automation",
    description:
      "We build products that replace hours of manual work with seconds of AI, and we move at that same pace internally.",
  },
  {
    icon: Sparkles,
    title: "Work on the full stack of AI",
    description:
      "Vision, voice, document understanding, and analytics, all in production, all solving real business problems.",
  },
  {
    icon: Users,
    title: "Small team, real ownership",
    description:
      "No layers of process between you and shipping something a customer uses the next day.",
  },
  {
    icon: Heart,
    title: "Built around outcomes",
    description:
      "We care about the results our automation delivers for customers, not hours logged.",
  },
];

// In production, Azure Static Web Apps proxies /api/* to the co-located
// Azure Function on the same origin — no CORS, no separate URL needed.
// In local dev, hit the local test email server (see server/).
const SEND_APPLICATION_ENDPOINT = import.meta.env.PROD
  ? "/api/send-application"
  : `${import.meta.env.VITE_SERVER_URL ?? "http://localhost:5050"}/api/send-application`;

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the "data:<mime>;base64," prefix — only the payload is needed.
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function Careers() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fileError, setFileError] = useState("");
  const [fileName, setFileName] = useState("");
  const formMountedAt = useRef(Date.now());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name ?? "");
    if (!file) {
      setFileError("");
      return;
    }
    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      setFileError("Please upload a PDF or Word document.");
      e.target.value = "";
      setFileName("");
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setFileError("File is too large — please keep it under 4MB.");
      e.target.value = "";
      setFileName("");
      return;
    }
    setFileError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const honeypotFilled = String(formData.get("company_website") ?? "").length > 0;

    if (honeypotFilled) {
      // Silently pretend success so bots/scrapers get no signal about
      // what tripped the check — the backend also re-checks this.
      setStatus("success");
      form.reset();
      return;
    }

    const resumeFile = fileInputRef.current?.files?.[0];
    if (!resumeFile) {
      setFileError("Please attach your resume.");
      return;
    }
    if (fileError) return;

    setStatus("submitting");

    try {
      const resumeBase64 = await fileToBase64(resumeFile);
      const { resume, ...rest } = Object.fromEntries(formData.entries());
      void resume;

      const payload = {
        ...rest,
        resume_filename: resumeFile.name,
        resume_mimetype: resumeFile.type,
        resume_base64: resumeBase64,
        fill_time_ms: Date.now() - formMountedAt.current,
      };

      const response = await fetch(SEND_APPLICATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Careers"
        description="Help us build the future of intelligent automation. We're a small, fast-moving team building AI that businesses put into production."
        path="/careers"
      />
      {/* Hero */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-[#0c1b33] to-gray-950" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Careers
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Help us build the future of intelligent automation
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            We're a small, fast-moving team building AI that businesses put
            into production, not just demos.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              Why Cognexa
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What it's like to work here
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0E8FFB]/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-[#0E8FFB]" strokeWidth={2} />
                </span>
                <h4 className="mt-3 font-semibold text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No open roles / application form */}
      <Reveal as="section" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-lg font-semibold text-[#0E8FFB]">
              No open roles right now
            </h3>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              We're always open to hearing from great people
            </h2>
            <p className="mt-4 text-gray-500">
              We don't have open positions posted at the moment, but if you'd
              be a great fit for a team building AI-first automation, send us
              your resume and tell us what you'd want to work on.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Application received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-gray-500">
                  Thanks for reaching out! We've received your resume and
                  will be in touch if there's a fit.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-[#0E8FFB] hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg sm:p-10"
              >
                {status === "error" && (
                  <p
                    role="alert"
                    className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
                  >
                    Something went wrong submitting your application. Please
                    try again, or email us directly at{" "}
                    <a
                      href="mailto:support@cognexa.co.in"
                      className="font-medium underline"
                    >
                      support@cognexa.co.in
                    </a>
                    .
                  </p>
                )}

                <div className="space-y-4">
                  {/* Honeypot: hidden from real users, bots tend to fill every field they find. */}
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute h-0 w-0 opacity-0"
                    style={{ left: "-9999px" }}
                  />
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name*"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                  />
                  <div className="flex gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      className="w-1/2 rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="w-1/2 rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    name="role_interest"
                    placeholder="What role are you interested in?"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us what you'd want to work on"
                    rows={4}
                    className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                  />

                  <div>
                    <label
                      htmlFor="resume-upload"
                      className="flex cursor-pointer items-center gap-2.5 rounded-md border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-500 transition-colors duration-200 hover:border-[#0E8FFB] hover:bg-[#0E8FFB]/5"
                    >
                      <Paperclip className="h-4 w-4 shrink-0 text-[#0E8FFB]" />
                      {fileName || "Attach your resume (PDF or Word, max 4MB)*"}
                    </label>
                    <input
                      ref={fileInputRef}
                      id="resume-upload"
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                    {fileError && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600">
                        {fileError}
                      </p>
                    )}
                  </div>

                  <label className="flex items-start gap-2 text-sm text-gray-500">
                    <input
                      type="checkbox"
                      name="privacy_policy"
                      required
                      className="mt-1 accent-[#0E8FFB]"
                    />
                    By clicking submit, you acknowledge your data will be
                    processed according to our Privacy Policy.
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
                  >
                    {status === "submitting" && (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    )}
                    {status === "submitting" ? "Submitting…" : "Submit application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Careers;
