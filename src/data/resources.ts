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
  timeline: string;
  rvsplink?: string;
}

export const pastCards: CardProps[] = [
  {
    urlid: "PastEvents",
    title: "GenAI Study Jams",
    logo: "/images/genaistudy.jpg",
    image: "/images/GENai.jpg",
    timeline: "Oct 11th 2024 - Nov 11th 2024",
    date: "2024-10-11 to 2024-11-11",
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
    timeline: "Oct 16th 2024",
    date: "2024-10-16",
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
  {
    urlid: "PastEvents",
    title: "Intro to Gen AI",
    logo: "/images/genai_speakers_logo.jpg",
    image: "/images/genai_speakers.jpg",
    timeline: "Nov 7th 2024",
    date: "2024-11-7",
    content:
      "The Gen AI Study Jams session by GDG On Campus at Vignan’s Institute of Information Technology 🚀 introduces participants to Generative AI technologies 🤖. The session includes real-world examples 🌍, offering insights into AI applications and tools.",
    participants: "350",
    days: 1,
    hashtags: ["genai", "gdg"],
    resources: [
      {
        name: "Article",
        link: "https://medium.com/@lakshmisriramadari1427/gemini-ai-with-socket-io-in-nodejs-dff232348619",
      },
      { name: "Sample Project", link: "https://geminiapi-9rsv.onrender.com/" },
    ],
  },
  // { title: "Past Event 2", logo: "logo.png", image: "/images/devfest.png", date: "Aug 15th 2024", content: "Details of past event 2"},
  // { title: "Past Event 3", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 3"},
  // { title: "Past Event 4", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 4" },
  // { title: "Past Event 5", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 5"},
];

export const upcomingCards: CardProps[] = [
];