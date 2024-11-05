interface CardProps {
  urlid: string;
  logo?: string;
  image: string;
  date: string;
  title: string;
  content: string;
  participants: string;
  days: number;
  hashtags: Array<string>;
  labs?: string;
  resources?: Array<{ name: string; link: string }>;
}

export const pastCards: CardProps[] = [
  {
    urlid: "PastEvents",
    title: "GenAI Study Jams",
    logo: "/images/genailogo.jpg",
    image: "/images/GENai.jpg",
    date: "Oct 11th 2024 - Nov 11th 2024",
    content:
      "GENAI Study Jams typically focus on introducing developers and learners to Generative AI technologies, tools, and applications through hands-on labs",
    participants: "140",
    days: 30,
    hashtags: ["genai", "studyjams"],
    labs: "15+",
  },
  {
    urlid: "PastEvents",
    title: "Inauguration",
    logo: "/images/inaugurationlogo.jpg",
    image: "/images/inauguration.png",
    date: "Oct 16th 2024",
    content:
      "Inaugural Event of Google Developer Groups (GDG) On Campus at Vignan’s Institute of Information Technology! 🚀",
    participants: "240",
    days: 1,
    hashtags: ["inauguration", "gdg"],
    resources: [
      { name: "Wellfound", link: "https://wellfound.com/" },
      { name: "Linkedin", link: "https://www.linkedin.com/" },
    ],
  },
  // { title: "Past Event 2", logo: "logo.png", image: "/images/devfest.png", date: "Aug 15th 2024", content: "Details of past event 2"},
  // { title: "Past Event 3", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 3"},
  // { title: "Past Event 4", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 4" },
  // { title: "Past Event 5", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 5"},
];

export const upcomingCards: CardProps[] = [
  // {
  //   urlid: "UpcomingEvents",
  //   title: "Inauguration",
  //   logo: "/images/inaugurationlogo.jpg",
  //   image: "/images/inauguration.png",
  //   date: "Oct 16th 2024",
  //   content:
  //     "Inaugural Event of Google Developer Groups (GDG) On Campus at Vignan’s Institute of Information Technology! 🚀",
  // },
  // { title: "Artificial Intelligence and Machine Learning", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Discover how AI is changing the world."},
  // { title: "Android Development", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Build powerful Android apps using modern frameworks."},
  // { title: "Data Science", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Explore the world of data and analytics."},
  // { title: "Cloud Computing", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Learn about scalable cloud infrastructure."},
];