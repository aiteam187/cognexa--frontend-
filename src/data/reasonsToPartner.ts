import {
  Laptop,
  Users,
  MessageCircle,
  ShieldCheck,
  RefreshCw,
  Rocket,
} from "lucide-react";

export interface Reason {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const reasonsToPartner: Reason[] = [
  {
    title: "Remote-First Support",
    description:
      "We can log in to your PC or server remotely and resolve most issues immediately, without waiting for a technician to travel to your location.",
    icon: Laptop,
  },
  {
    title: "20+ Years of Experience",
    description:
      "In more than two decades of IT outsourcing, we've built deep expertise across a wide range of technologies, industries, and application types.",
    icon: Users,
  },
  {
    title: "Plain-English Communication",
    description:
      "You deserve to have your questions answered clearly. Our team explains exactly what's happening so you always understand what's going on.",
    icon: Rocket,
  },
  {
    title: "End-to-End Ownership",
    description:
      "From strategy to support, we own the outcome across hardware, software, and everything in between, so you have one team to rely on.",
    icon: ShieldCheck,
  },
  {
    title: "Fast, Transparent Updates",
    description:
      "Clear status updates, fast response times, and a dedicated point of contact mean you're never left wondering where things stand.",
    icon: MessageCircle,
  },
  {
    title: "Scales With Your Business",
    description:
      "As your business grows and changes, our solutions scale with you, so you're never locked into a system that no longer fits.",
    icon: RefreshCw,
  },
];
