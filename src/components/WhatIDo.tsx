import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Description</h4>
              <p>
                I create robust applications with a focus on performance and user experience. 
                My expertise spans from Android app development to full-stack web solutions, 
                leveraging modern technologies and best practices.
              </p>
              <h5>Programming Languages & Frameworks</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">C & C++</div>
                <div className="what-tags">PHP</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS / SASS</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Web Engineering</div>
                <div className="what-tags">Three.js</div>
              </div>
              <h5 style={{ marginTop: '1rem' }}>Databases & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Android Development</div>
                <div className="what-tags">Fullstack Development</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PROFESSIONAL SKILLS</h3>
              <h4>Description</h4>
              <p>
                Beyond technical expertise, I bring strong interpersonal and strategic capabilities. 
                I excel in project management, problem-solving, and fostering collaboration across teams.
              </p>
              <h5>Core Competencies</h5>
              <div className="what-content-flex">
                <div className="what-tags">Project Management</div>
                <div className="what-tags">Problem Solving</div>
                <div className="what-tags">Software Design</div>
                <div className="what-tags">Program Development</div>
                <div className="what-tags">Research Skills</div>
                <div className="what-tags">Strategy</div>
                <div className="what-tags">Teamwork</div>
                <div className="what-tags">Presentations</div>
                <div className="what-tags">Engineering</div>
                <div className="what-tags">Microsoft Excel</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
