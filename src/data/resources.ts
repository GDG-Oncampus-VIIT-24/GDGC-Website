interface CardProps {
  urlid: string;
  outer_logo?: string;
  inner_image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
  participants: string;
  days: number;
  hashtags: Array<string>;
  labs?: string;
  resources?: Array<{ name?: string; link?: string }>;
  timeline: string;
  rvsplink?: string;
}

export const pastCards: CardProps[] = [
  {
    urlid: "PastEvents",
    title: "GenAI Study Jams",
    alt: "GENAI Study Jams",
    outer_logo: "/images/genaistudy.jpg",
    inner_image: "/images/GENai.jpg",
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
    alt: "Inauguration",
    outer_logo: "/images/inaugurationlogo.jpg",
    inner_image: "/images/inauguration.webp",
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
    alt: "Intro to Gen AI",
    outer_logo: "/images/genai_speakers_logo.jpg",
    inner_image: "/images/genai_speakers.webp",
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
  {
    urlid: "PastEvents",
    title: "Tech Winter Break",
    alt: "Tech Winter Break",
    outer_logo: "/images/Tech_Winter_Break_logo.webp",
    inner_image: "/images/Tech_Winter_Break_poster.webp",
    timeline: "2024-12-31",
    date: "2024-12-31",
    content:
      "Kickstart your web development career in 2025 with this exciting session! Explore the roadmap, master fundamentals, and discover top resources to build a strong foundation. Don’t miss it—start your journey today!",
    participants: "200",
    days: 1,
    hashtags: ["techwinterbreak", "web", "angular", "flutter", "android"],
    resources: [
      { name: "Pomodoro Timer Chrome Extension" },
      { name: "I love PDF clone using their API" },
      { name: "Chat Application" },
      { name: "Github Profile Search" },
      { name: "Caption Generator" },
    ],
  },
];

export const upcomingCards: CardProps[] = [
  {
    urlid: "UpcomingEvents",
    title: "Intro to Cloud",
    alt: "Intro to Cloud",
    outer_logo: "/images/cloud_banner.jpg",
    inner_image: "/images/cloud_poster.webp",
    timeline: "2025-2-21",
    date: "2025-2-21",
    content:
      "Get started with cloud computing and explore how AWS simplifies building, scaling, and managing applications. Learn key concepts, core AWS services like EC2, S3, and Lambda, and how businesses leverage the cloud for efficiency and innovation. 🚀",
    participants: "200",
    days: 1,
    hashtags: ["cloud", "aws"],
  },
];