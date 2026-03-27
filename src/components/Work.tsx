import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Image OCR",
    category: "Java GUI Application",
    tools: "Java, Swing/JavaFX, Tesseract, Image Processing",
    link: "https://github.com/Rohit4programme/image-OCR",
    image: "/images/project-image-ocr-updated.svg",
    description: "Desktop application for optical character recognition that extracts text from images with a modern Java GUI interface.",
    status: "completed"
  },
  {
    title: "Attendance Manager",
    category: "Desktop Application",
    tools: "Java, JavaFX, SQLite, MySQL, BCrypt",
    link: "https://github.com/Rohit4programme/Attendance-manager",
    image: "/images/project-attendance-manager-updated.svg",
    description: "Comprehensive attendance & proxy management system with role-based access (Admin, Teacher, Student), secure authentication, reporting, and notifications.",
    status: "completed"
  },
  {
    title: "Cursor Free VIP",
    category: "Utility Tool",
    tools: "JavaScript, Browser Extension",
    link: "https://github.com/Rohit4programme/cursor-free-vip",
    image: "/images/project-cursor-free-vip.svg",
    status: "completed"
  },
  {
    title: "2D Game Engine",
    category: "Game Development Framework",
    tools: "Java, Game Physics, Graphics Rendering, Event System",
    link: "#coming-soon",
    image: "/images/project-game-engine.svg",
    description: "Custom 2D game engine built in Java with sprite rendering, collision detection, physics simulation, and event-driven architecture for efficient game development.",
    status: "upcoming"
  },
  {
    title: "WheelMate",
    category: "Accessibility Application",
    tools: "Java, UI/UX Design, Accessibility APIs, Voice Control",
    link: "#coming-soon",
    image: "/images/project-wheelmate.svg",
    description: "Inclusive mobility application designed for specially abled humans with adaptive UI, voice commands, wheelchair-friendly navigation, and real-time accessibility features.",
    status: "upcoming"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
              className={`work-card-link ${project.status === "upcoming" ? "work-card-upcoming" : ""}`}
              onClick={project.status === "upcoming" ? (e) => e.preventDefault() : undefined}
              aria-label={`${project.title} - ${project.category}${project.status === "upcoming" ? " (Coming Soon)" : ""}`}
            >
              <div className="work-box">
                {project.status === "upcoming" && (
                  <div className="work-status-badge">UPCOMING</div>
                )}
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools & Tech</h4>
                  <p>{project.tools}</p>
                  {project.status === "completed" && (
                    <div className="work-github-link">
                      <span className="work-github-label">View on GitHub</span>
                      <MdArrowOutward className="work-github-icon" />
                    </div>
                  )}
                </div>
                <WorkImage image={project.image} alt={project.title} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
