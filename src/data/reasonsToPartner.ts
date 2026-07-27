import {
  Laptop,
  Users,
  Rocket,
  HeartHandshake,
  Zap,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  RefreshCw,
  Timer,
} from "lucide-react";

export interface Reason {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const reasonsToPartner: Reason[] = [
  {
    title: "Direct Access to Leadership",
    description:
      "We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location.",
    icon: Laptop,
  },
  {
    title: "Individualized Support",
    description:
      "In more than 20 years of IT outsourcing, we have gained experience in a wide spectrum of technologies, industries, and application types.",
    icon: Users,
  },
  {
    title: "Startup Spirit",
    description:
      "You deserve to have your questions answered in plain English. Our technicians will clearly explain what is happening so you understand.",
    icon: Rocket,
  },
  {
    title: "Collaborative Environment",
    description:
      "We design, evaluate and justify technology solutions from a thorough understanding of the business benefit for your company.",
    icon: HeartHandshake,
  },
  {
    title: "Agile Decision-Making",
    description:
      "We handle all aspects of your IT infrastructure including hardware, software management and any other related technology needs.",
    icon: Zap,
  },
  {
    title: "Inclusive Culture",
    description:
      "We bring diverse perspectives to every engagement, so the solutions we build work for every team and every user, not just the average case.",
    icon: Sparkles,
  },
  {
    title: "Versatility and Ownership",
    description:
      "From strategy to support, we own the outcome end to end, across hardware, software, and everything in between, so you have one team to rely on.",
    icon: ShieldCheck,
  },
  {
    title: "Efficient Communication Channels",
    description:
      "Clear status updates, fast response times, and a dedicated point of contact mean you're never left wondering where things stand.",
    icon: MessageCircle,
  },
  {
    title: "Adaptability and Flexibility",
    description:
      "As your business grows and changes, our solutions scale with you, so you're never locked into a system that no longer fits.",
    icon: RefreshCw,
  },
  {
    title: "Quick Problem Resolution",
    description:
      "Most issues are triaged and resolved fast, often before they impact your team, thanks to proactive monitoring and rapid response.",
    icon: Timer,
  },
];
