import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");

      if (boxes.length === 0) return;

      const container = document.querySelector(".work-container");

      if (!container || !boxes[0].parentElement) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth =
        boxes[0].parentElement.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding, 10) / 2 || 0;

      translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

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
          {config.projects.slice(0, 5).map((project, index) => (
            <a
              className="work-box work-project-link"
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              data-cursor="disable"
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />

              <span className="work-link-label">
                View project ↗
              </span>
            </a>
          ))}

          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>

              <Link
                to="/myworks"
                className="see-all-btn"
                data-cursor="disable"
              >
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;