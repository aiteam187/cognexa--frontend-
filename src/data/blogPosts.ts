export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Improving lives with technology – HSE lighthouse project",
    date: "May 8, 2018",
    author: "linethemes",
    excerpt:
      "The 'Lighthouse Projects' are in the clinical disciplines of the chronic diseases Epilepsy, Haemophilia and Bipolar Disorder...",
    href: "/blog/improving-lives-with-technology-hse-lighthouse-project",
  },
  {
    title: "Tips to make your workforce a security front line",
    date: "May 8, 2018",
    author: "linethemes",
    excerpt:
      "Cyber security is something that is constantly on our mind here at Unit. This is because, according to Bloomberg, cyber security related issues...",
    href: "/blog/tips-to-make-your-workforce-a-security-front-line",
  },
  {
    title: "Scan & index manager delivers productivity at Beaumont Hospital",
    date: "May 8, 2018",
    author: "linethemes",
    excerpt:
      "Beaumont Hospital is a large academic teaching hospital 5km north of Dublin City centre. They provide emergency and acute care services...",
    href: "/blog/scan-index-manager-delivers-productivity-at-beaumont-hospital",
  },
  {
    title:
      "Partnering with IT provider helps Erie manufacturing company thrive in 21st century",
    date: "May 8, 2018",
    author: "linethemes",
    excerpt:
      "Berman Bedding, Inc. has been in business since 1912. But when this mattress manufacturer started producing medical pads in the 1950s, it re...",
    href: "/blog/partnering-with-it-provider-helps-erie-manufacturing-company-thrive",
  },
];
