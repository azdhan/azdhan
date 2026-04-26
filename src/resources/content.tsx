import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/* ================= PERSON ================= */

const person: Person = {
  firstName: "Azdhan",
  lastName: "",
  name: "Azdhan",
  role: "Tech Journalist with public policy lens",
  avatar: "/images/avatar.webp",
  email: "azdhan.thescribe@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Telugu"],
};

/* ================= SOCIAL ================= */

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/azdhan",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/azdhan-basha/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:azdhan.thescribe@gmail.com",
    essential: true,
  },
];

/* ================= NEWSLETTER ================= */

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on technology, policy, and media</>,
};

/* ================= HOME ================= */

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Portfolio`,
  description: `Tech journalism, public policy analysis, and editorial work by ${person.name}`,
  headline: <>From writing on tech (and policy) to building tech, with AI</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Selected Work</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Journalists are thinkers by training and end up generalists in practice. We learn fast, we know where to look, and we synthesize across domains to translate complexity into clarity. The journalistic foundation coupled with AI is a different kind of leverage: now I can build what I once analyse to write. This site is not a blog, it's a portfolio of the apps and tools that I keep building. If you are curious about my blogs, visit my Substack.
    </>
  ),
};

/* ================= ABOUT ================= */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `From writing on tech (and policy) to building tech, with AI`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I've spent the last few years reporting and writing on the systems that govern digital life in India, from who controls platforms, to how Indian law makers are responding to AI, and how governments use those same systems for online censorship and to suppress free speech. Journalism trained me to move fast across unfamiliar terrain, synthesize and distill what matters, and raise questions that may not have easy answers.
        
        Now I'm pairing that with AI to build things: tools, products, experiments. The medium has changed, but the journalistic instinct is the same: trying to understand complex systems and build something useful with that understanding.
      </>
    ),
  },

  /* ===== WORK EXPERIENCE ===== */

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MediaNama",
        timeframe: "Apr 2025 – Present",
        role: "Tech Journalist",
        achievements: [
          <>Cover OTT regulation, AI governance, and digital media policy.</>,
          <>Write research-driven explanatory articles simplifying complex regulatory frameworks.</>,
          <>Produce scripts and edit video interviews for YouTube content.</>,
          <>Document and synthesise discussions from policy events and industry panels.</>,
        ],
        images: [],
      },
      {
        company: "Telugu Funda",
        timeframe: "May 2024 – Feb 2025",
        role: "Chief Editor",
        achievements: [
          <>Led editorial operations including publishing, reviews, and quality control.</>,
          <>Managed CMS workflows, basic server operations, and social monitoring.</>,
          <>Handled hiring, team coordination, and editorial planning.</>,
        ],
        images: [],
      },
      {
        company: "Vaishali Gauba Media Inc.",
        timeframe: "Oct 2024 – Mar 2025",
        role: "Public Relations Executive (Freelance)",
        achievements: [
          <>Supported PR strategy and communications for international clients.</>,
          <>Built media lists and conducted journalist outreach.</>,
          <>Focused on research-driven pitching and editorial tracking.</>,
        ],
        images: [],
      },
      {
        company: "Guardians of Dreams (NGO)",
        timeframe: "Aug 2024 – Jan 2025",
        role: "Budget Analyst",
        achievements: [
          <>Prepared annual budget estimates for child care institutions.</>,
          <>Contributed to structured documentation and reporting workflows.</>,
        ],
        images: [],
      },
      {
        company: "UNICEF",
        timeframe: "Dec 2023 – Feb 2024",
        role: "Field Associate",
        achievements: [
          <>Supported field data collection and documentation.</>,
          <>Maintained accuracy in reporting workflows.</>,
        ],
        images: [],
      },
      {
        company: "ICSSR",
        timeframe: "Dec 2023 – Feb 2024",
        role: "Field Investigator",
        achievements: [
          <>Conducted structured field research and data collection.</>,
          <>Maintained consistency in reporting outputs.</>,
        ],
        images: [],
      },
      {
        company: "The Hindu BusinessLine",
        timeframe: "Jun 2023 – Aug 2023",
        role: "Staff Writer Intern",
        achievements: [
          <>Reported and wrote business and news stories.</>,
          <>Built strong foundations in fact-checking and editorial workflows.</>,
        ],
        images: [],
      },
    ],
  },

  /* ===== EDUCATION ===== */

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Hyderabad",
        description: <>M.A. Communication (2022–2024) | UGC NET qualified</>,
      },
      {
        name: "Kristu Jayanti College",
        description: <>B.A. Journalism, Psychology, English Literature (2019–2022)</>,
      },
    ],
  },

  /* ===== SKILLS ===== */

  technical: {
    display: true,
    title: "Core Skills",
    skills: [
      {
        title: "Writing & Research",
        description: <>Technical writing, explanatory journalism, policy research, structured reporting.</>,
        tags: [{ name: "Writing", icon: "edit" }],
        images: [],
      },
      {
        title: "Editing",
        description: <>Copyediting, clarity improvement, consistency checks.</>,
        tags: [{ name: "Editing", icon: "check" }],
        images: [],
      },
      {
        title: "Multimedia",
        description: <>Video scripting, short-form explainers, basic storyboarding.</>,
        tags: [{ name: "Video", icon: "play" }],
        images: [],
      },
      {
        title: "Tools",
        description: <>WordPress, Figma, Adobe Illustrator, Photoshop, After Effects (basic).</>,
        tags: [{ name: "Tools", icon: "tool" }],
        images: [],
      },
    ],
  },
};

/* ================= BLOG ================= */

const blog: Blog = {
  path: "/blog",
  label: "Apps & Tools",
  title: "Apps & Tools",
  description: "Tools and experiments I build",
};

/* ================= WORK ================= */

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected writing and documentation work`,
};

/* ================= GALLERY ================= */

const gallery: Gallery = {
  path: "https://azdhanthescribe.wordpress.com",
  label: "Blog",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };