import leaderMonali from "../assets/about/leader-monali.png";
import leaderNikhil from "../assets/about/leader-nikhil.png";
import leaderNeetu from "../assets/about/leader-neetu.png";

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ashish Nalhe",
    role: "Founder & CEO",
    photo: leaderMonali,
  },
  {
    name: "Amit Pawar",
    role: "Co-Founder & COO",
    photo: leaderNikhil,
  },
  {
    name: "Namrata Pawar",
    role: "Co-Founder & CTO",
    photo: leaderNeetu,
  },
  {
    name: "Dhananjay Sonawane",
    role: "Marketing Head",
    photo: leaderNeetu,
  },
];
