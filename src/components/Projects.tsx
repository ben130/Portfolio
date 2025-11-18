import { ReactNode } from 'react'
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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'project-1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'project-2'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
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

