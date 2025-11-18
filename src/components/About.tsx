import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer with a passion for building scalable, efficient solutions that solve real business problems. 
              Currently serving as Lead Developer at Trinity Solar, where I architect and maintain critical internal applications 
              that power daily operations and drive business value.
            </p>
            <p>
              My expertise spans full-stack development with a strong focus on .NET Core, Angular, and cloud infrastructure. 
              I've led the development of a high-volume commission calculation system, orchestrated migrations of 24+ applications 
              to containerized infrastructure using Docker and Kubernetes, and implemented robust CI/CD pipelines with Azure DevOps.
            </p>
            <p>
              I hold a Bachelor of Science degree in Computer Science from Rowan University, with concentrations in Cybersecurity 
              Defense, Networking Systems and a minor in Spanish. When I'm not coding, I'm continuously exploring new technologies and best practices 
              to deliver better solutions.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">Lead</span>
                <span className="highlight-label">Developer</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">4+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">BS</span>
                <span className="highlight-label">Computer Science</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <div className="placeholder-image">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
