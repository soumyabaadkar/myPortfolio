
import taskbuddyImg from "../assets/TodoList.png";
import vibestoreImg from "../assets/VibeStore.png";
import portfolioImg from "../assets/portfolio.png";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress} from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      title: "TaskBuddy",
      desc: "A React-based task management application to manage daily tasks .",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/soumyabaadkar/TaskBuddy",
      live: "https://taskbuddyyy.netlify.app/",
      img: taskbuddyImg,
      techIcons: [<FaReact />, <SiJavascript />, <FaCss3Alt />, <FaHtml5/>],
    },
    {
      title: "VibeStore",
      desc: "A full-stack e-commerce web application with cart and product management.",
      tech: "React, Node.js, Express",
      github: "https://github.com/soumyabaadkar/VibeStore",
      live: "https://vibe-store.netlify.app/",
      img: vibestoreImg,
      techIcons: [<FaReact />, <FaNodeJs />, <SiExpress />],
    },
    {
      title: "Interactive Portfolio",
      desc: "A responsive personal portfolio website built with HTML, CSS, and JavaScript.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/soumyabaadkar/Interactive-Portfolio-Website",
      live: "https://interactiveportfolio-soumya.netlify.app/",
      img: portfolioImg,
      techIcons: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tech-icons">
              {project.techIcons.map((icon, idx) => (
                <span key={idx} className="tech-icon">{icon}</span>
              ))}
            </div>
            <span>{project.tech}</span>

            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noreferrer" className="live-btn">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="code-btn">
                View Code
              </a>
            </div>         
           </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;