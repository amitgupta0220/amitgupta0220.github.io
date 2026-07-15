import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const socialLinks = [
    { href: config.contact.github, label: "GitHub", icon: <FaGithub /> },
    { href: config.contact.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
    { href: config.contact.medium, label: "Medium", icon: <FaMedium /> },
    { href: config.contact.instagram, label: "Instagram", icon: <FaInstagram /> },
  ].filter((link) => link.href);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {socialLinks.map((link) => (
          <span key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </span>
        ))}
      </div>
      <div className="resume-button" aria-disabled="true" title="Resume not provided">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
