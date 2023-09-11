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
  {
    id: "imprint",
    title: "Imprint",
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

export { services, projects};
