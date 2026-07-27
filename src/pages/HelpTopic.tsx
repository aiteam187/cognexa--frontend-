import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of systems do you support?",
    a: "We pride ourselves on being “ecosystem agnostic”: whether you use Google Apps or Office365, Windows or Mac, Android or iOS, we will support your team. Need to install a server onsite or host one virtually on Amazon or Azure? We will support you. Need to transition from one ecosystem to another? We'll be there for you.",
  },
  {
    q: "How does a flat rate billing save me money?",
    a: "Flat-rate billing gives you the ability to budget your IT expenses so you can better focus on your core business goals. We customize each service package for your unique business, so you only pay for what you need. Cognexa serves as your “one stop shop” for all your managed IT services needs. And we do it all for one fixed monthly cost — We Don't Profit from your Pain!",
  },
  {
    q: "What if we already have an internal IT department?",
    a: "No problem! We offer scalable solutions that can be tailored to meet your specific needs. Whether you need a full package of managed IT services and consulting, security solutions or service desk support, Cognexa makes it simple with an affordable and customized flat rate service plan.",
  },
  {
    q: "What does having Managed IT Services cost?",
    a: "Our service model uses a fixed monthly fee, which is based on the size and complexity of your particular network. Once contracted, your Managed IT Services will cover maintenance and support for every component of your network, providing you with peace of mind and the ability to accurately forecast your IT maintenance costs.",
  },
  {
    q: "What should I do before I call for help?",
    a: "When possible, write down any information about error messages and take screen shots your issue. Next, attempt to recreate the issue. Often times, it helps to close the program and restart the computer to reset the system, and possibly resolve the problem.",
  },
  {
    q: "How Long is a Managed Services Contract For?",
    a: "Managed IT Services Contracts vary by provider. Some providers offer month-to-month programs, while others require a multi-year contract. Some have a very high startup cost and lower monthly, while others offer a middle of the road monthly cost and spread the cost of startup over the term of the agreement.",
  },
  {
    q: "What kind of response times I can expect?",
    a: "We work with each client to establish specific expectations. Our measurable service levels specify clear consequences for not living up to agreed-upon expectations.",
  },
  {
    q: "What is cloud backup? 567",
    a: "Cloud backup also known as Online Backup is the process where your onsite backups are transferred to an offsite server every night. The server is located in a secure data centre in Perth. Cloud Backup replaces the need for someone to take a backup home each night. It is more secure, reliable and easier to manage and monitor.",
  },
  {
    q: "Are free Anti-Virus software any good?",
    a: "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
  },
  {
    q: "What exactly are Managed IT Services? 123",
    a: "Simply put, Cognexa Managed IT Services means we take care of your entire information technology requirement. We manage all your hardware and software sourcing, installation, technical support, and IT staffing needs. It also means Cognexa acts as your go-to consultancy and support team, providing scheduled maintenance and upgrading of your systems, along with emergency assistance to keep your business up and running.",
  },
];

function HelpTopic() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-[#0c1b33] py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="text-4xl font-bold text-white">
            WHAT ARE YOU LOOKING FOR?
          </h1>
          <p className="mt-3 text-white/90">
            Find answers and solutions to common IT issues. If you cant find
            an answer, contact us and we will be happy to help.
          </p>
          <p className="mt-6 text-base text-white/90">
            Please call our office at +91 98765 43210 or email us with your
            question
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <h4 className="font-semibold text-gray-900">{item.q}</h4>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#0E8FFB] transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="pb-5 text-gray-600">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpTopic;
