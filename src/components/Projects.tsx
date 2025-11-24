import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  image: string
}

const Projects = () => {
  const projects: Project[] = [
      {
        title: 'FlickBase',
        description: 'A comprehensive movie database platform inspired by IMDB, featuring an intuitive interface to browse, search, and explore an extensive collection of films. Built with a clean, modern design for seamless movie discovery and information retrieval.',
        tech: ['Angular', 'JSON', 'CSS3', 'GitHub Pages'],
        github: 'https://github.com/ben130/Angular-Movie-App',
        live: 'https://ben130.github.io/Angular-Movie-App/',
        image: 'project-1'
      },
    {
      title: 'Price Alert API',
      description: 'A powerful .NET REST API designed to monitor and track product prices across multiple e-commerce websites. Automatically parses HTML content to extract pricing data, stores information in SQL Server, and provides real-time price tracking with Discord integration for instant price drop notifications and alerts.',
      tech: ['.NET Core', 'SQL Server', 'HTML Parsing', 'Discord API'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'project-2'
    },
    {
      title: 'Home Lab Infrastructure',
      description: 'A comprehensive self-hosted infrastructure environment featuring media streaming, network security, virtualization, and monitoring solutions. Built with enterprise-grade tools including Plex for media management, Wireguard VPN for secure remote access, Docker/Portainer for containerization, and Uptime Kuma for system monitoring.',
      tech: ['Docker', 'VMware', 'Hyper-V', 'Linux', 'Wireguard', 'Plex', 'AdGuard Home', 'Uptime Kuma'],
      github: '',
      live: '',
      image: 'project-3'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.image}</span>
                </div>
                <div className="project-overlay">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

