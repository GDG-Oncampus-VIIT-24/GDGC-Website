import { TeamMember } from "../components/index";
import MOTImage from "../assets/mot.svg";
import HimaPic from "../assets/hima.jpg";
import SujithPic from "../assets/sujith.jpg";
import VarunPic from "../assets/varun.jpeg";
import GaneshPic from "../assets/ganesh.jpeg";
import DurgeshPic from "../assets/durgesh.jpeg";
import NikhilPic from "../assets/nikhil.jpeg";
import SowmyaPic from "../assets/sowmya.jpg";
import KoushikPic from "../assets/koushik.jpeg";
import SidharthPic from "../assets/sidharth.jpeg";
import RagavendraPic from "../assets/raghavendra.jpeg";
import AshrithPic from "../assets/ashrith.jpg";
import TejeshPic from "../assets/tejesh.jpg";
import ShirinPic from "../assets/shirin.jpeg";
import GiriPic from "../assets/giri.jpg";
import VarshithaPic from "../assets/varshitha.jpg";
import VivekPic from "../assets/vivek.jpg";
import ThanushaPic from "../assets/thanusha.jpg";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const Team = () => {

  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const Members: Array<{
    MemberName: string;
    Role: string;
    Image: any;
    GithubLink: string;
    LinkedinLink: string;
  }> = [
    {
      MemberName: "Hima Varshini",
      Role: "GDG OnCampus Organizer",
      Image: HimaPic,
      GithubLink: "https://github.com/himavarshini28",
      LinkedinLink:
        "https://www.linkedin.com/in/himavarshini-mahapatruni-285121269/",
    },
    {
      MemberName: "Sujith Srikar",
      Role: "Co-Lead",
      Image: SujithPic,
      GithubLink: "https://github.com/Sujith-Srikar",
      LinkedinLink: "https://www.linkedin.com/in/sujith-srikar/",
    },
    {
      MemberName: "Varun Kumar",
      Role: "Technical Lead",
      Image: VarunPic,
      GithubLink: "https://github.com/Padala-Varun",
      LinkedinLink:
        "https://www.linkedin.com/in/padala-venkata-sai-varun-kumar-37b844291/",
    },
    {
      MemberName: "Sri Ganesh",
      Role: "CP / DSA Lead",
      Image: GaneshPic,
      GithubLink: "https://github.com/sri-ganeshk",
      LinkedinLink: "https://www.linkedin.com/in/sri-ganesh-k-5706ab269/",
    },
    {
      MemberName: "Durgesh",
      Role: "CP / DSA Lead",
      Image: DurgeshPic,
      GithubLink: "https://github.com/bot-durgesh",
      LinkedinLink: "https://www.linkedin.com/in/ankoji-durgesh-877a032a1/",
    },
    {
      MemberName: "Guru Nikhil",
      Role: "Web Development Lead",
      Image: NikhilPic,
      GithubLink: "https://github.com/MGuruNikhil",
      LinkedinLink: "https://www.linkedin.com/in/gurunikhilm/",
    },
    {
      MemberName: "Sowmya",
      Role: "Web Development Lead",
      Image: SowmyaPic,
      GithubLink: "https://www.linkedin.com/in/sowmya-musti-531715257/",
      LinkedinLink: "https://github.com/m-sowmya7",
    },
    {
      MemberName: "Koushik",
      Role: "AI/ML Lead",
      Image: KoushikPic,
      GithubLink: "https://github.com/kskkoushik",
      LinkedinLink: "https://www.linkedin.com/in/kskkoushik135/",
    },
    {
      MemberName: "Sidharth",
      Role: "Android Lead",
      Image: SidharthPic,
      GithubLink: "https://github.com/elitedeveloper05",
      LinkedinLink: "https://www.linkedin.com/in/elitedeveloper05",
    },
    {
      MemberName: "Ragavendra",
      Role: "Cloud Lead",
      Image: RagavendraPic,
      GithubLink: "https://github.com/Raghava1329",
      LinkedinLink: "https://www.linkedin.com/in/avula-ragavendra-ba1276266",
    },
    {
      MemberName: "Ashrith",
      Role: "UI/UX Lead",
      Image: AshrithPic,
      GithubLink: "https://github.com/ashrith24",
      LinkedinLink: "https://www.linkedin.com/in/srinivasa-ashrith-b-20388826b",
    },
    {
      MemberName: "Tejesh",
      Role: "Graphic Design Lead",
      Image: TejeshPic,
      GithubLink: "https://github.com/tejesh2709",
      LinkedinLink: "https://www.linkedin.com/in/mylapalli-tejesh-b1a174270",
    },
    {
      MemberName: "Shirin",
      Role: "Video Editing Lead",
      Image: ShirinPic,
      GithubLink: "https://github.com/SHIRIN-WAFIQAH-M4",
      LinkedinLink: "https://www.linkedin.com/in/shirin-wafiqah-563a8a292",
    },
    {
      MemberName: "Giri Krishna",
      Role: "Event Management Lead",
      Image: GiriPic,
      GithubLink: "https://github.com/girikrishnajetti",
      LinkedinLink: "https://www.linkedin.com/in/giri-krishna-365ab9271",
    },
    {
      MemberName: "Varshitha",
      Role: "Event Management Lead",
      Image: VarshithaPic,
      GithubLink: "https://github.com/varshithalalam",
      LinkedinLink: "https://www.linkedin.com/in/varshitha-lalam-784533270",
    },
    {
      MemberName: "Vivek Vardhan",
      Role: "Content Writing Lead",
      Image: VivekPic,
      GithubLink: "https://github.com/vivek-310",
      LinkedinLink:
        "https://www.linkedin.com/in/vivek-vardhan-chinni-418843268/",
    },
    {
      MemberName: "Thanusha",
      Role: "Content Writing Lead",
      Image: ThanushaPic,
      GithubLink: "https://github.com/thanusha-korada",
      LinkedinLink: "https://www.linkedin.com/in/thanusha-korada-55b2642b2",
    },
  ];
  
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  
    const targetElement = matches ? innerRef.current : outerRef.current;
  
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
  
    if (targetElement) {
      const lenis = new Lenis({
        wrapper: targetElement,
        content: targetElement.firstChild as HTMLElement,
        lerp: 0.05,
        duration: 2.0,
      });
  
      lenisRef.current = lenis;
  
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
  
      requestAnimationFrame(raf);
    }
  
    return () => {
      window.matchMedia("(min-width: 768px)").removeEventListener('change', handler);
  
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [matches]);

  return (
    <div ref={outerRef} className="relative font-GSD_Regular w-full h-screen m-auto bg-[#D8E2F9] px-6 py-12 flex flex-col gap-4 md:gap-0 md:flex-row overflow-auto md:overflow-hidden">
      <div className="md:w-1/2">
        <p className="text-center md:text-start text-4xl md:text-5xl font-bold">MEET OUR TEAM:</p>
        {matches && <img className="absolute left-0 bottom-0 w-[70%]" src={MOTImage} alt="image" />}
      </div>
      <div ref={innerRef} className="overscroll-auto z-10 w-full md:w-1/2 flex flex-col gap-2 md:overflow-y-scroll p-2 no-scrollbar">
        {Members.map((member, index) => <TeamMember key={index} {...member} />)}
      </div>
    </div>
  )
}

export default Team;
