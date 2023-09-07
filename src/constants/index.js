import {
  Amsterdam_Fashion_Week,
  podcast,
  spotify,
  tiktok,
  twitch,
  instagram,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Twitch",
    link: "https://www.twitch.tv/di1araas",
    icon: twitch,
  },
  {
    title: "Tiktok",
    link: "tiktok.com/@di1araa.s",
    icon: tiktok,
  },
  {
    title: "Instagram",
    link: "instagram.com/dilaraa.s",
    icon: instagram,
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/@Di1araa.s",
    icon: youtube,
  },
];

const technologies = [
  {
    name: "Youtube",
    icon: youtube,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spotify Event",
    description:
      "Spotify Event in Netherlands",
    tags: [
      {
        name: "spotify",
        color: "green-text-gradient",
      }
    ],
    image: spotify,
    source_code_link: "https://spotify.com/",
  },
  {
    name: "Amsterdam Fashion Week",
    description:
      "Amsterdam Fashion Week",
    tags: [
      {
        name: "fashion",
        color: "blue-text-gradient",
      }
    ],
    image: Amsterdam_Fashion_Week,
    source_code_link: "https://amsterdamfashionweek.nl/",
  },
  {
    name: "The never ending Podcast",
    description:
      "Der Podcast von stegi & dilara, es kommen noch neue folge aber das kann noch dauern.",
    tags: [
      {
        name: "spotify",
        color: "green-text-gradient",
      }
    ],
    image: podcast,
    source_code_link: "https://open.spotify.com/show/6TO4xct99QnisHKnKy31ID",
  },
];

export { services, technologies, experiences, testimonials, projects };
