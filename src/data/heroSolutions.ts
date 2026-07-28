import { Receipt, Users, BarChart3, Bot, MessageCircle, Car } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroSolution {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const heroSolutions: HeroSolution[] = [
  {
    title: "Extracto",
    description: "AI-powered invoice data extraction",
    icon: Receipt,
    href: "#aiAgent",
  },
  {
    title: "Vision IQ",
    description: "Smart image and video analysis",
    icon: MessageCircle,
    href: "#visionIQ",
  },
  {
    title: "Cognexa Agent",
    description: "Real-time voice AI assistant",
    icon: Users,
    href: "#cognexa-agent",
  },
  {
    title: "AI analytics",
    description: "Real-time reports and dashboards",
    icon: BarChart3,
    href: "#dashboardID",
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Uses robots to automate repetitive tasks",
    icon: Bot,
    href: "#rpaCard",
  },
  {
    title: "ANPR",
    description: "Automatic number plate recognition & tracking",
    icon: Car,
    href: "#anpr",
  },
];
