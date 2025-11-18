import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

interface MousePosition {
  x: number
  y: number
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = (): void => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div 
        className="hero-background" 
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1), transparent 50%)`
        }}
      ></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting fade-in-up">Welcome, I'm</div>
          <h1 className="hero-name">
            <span className="gradient-text">Ben Herrman</span>
          </h1>
          <h2 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </h2>
          <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
            I craft beautiful, functional, and user-centered digital experiences.
            Passionate about clean code, modern design, and bringing ideas to life.
          </p>
          <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-social fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/ben130" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:benherrman17@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-glow"></div>
            <div className="code-snippet">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-property">name</span>: <span className="code-string">'Ben Herrman'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">role</span>: <span className="code-string">'Full Stack Developer'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">skills</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">'Angular'</span>, <span className="code-string">'C#'</span>, <span className="code-string">'TypeScript'</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">'.NET'</span>, <span className="code-string">'Azure'</span>, <span className="code-string">'...'</span>
              </div>
              <div className="code-line indent">]</div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero

