import { ReactNode } from 'react'
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaJs, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNpm
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiVite,
  SiCsharp,
  SiCplusplus,
  SiMicrosoftazure,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiAngular,
  SiIonic,
  SiJira,
  SiStripe,
  SiTwilio,
  SiJson,
  SiMysql,
  SiJquery,
  SiAxios,
  SiMicrosoftsqlserver
} from 'react-icons/si'
import './Skills.css'

interface Skill {
  name: string
  icon: ReactNode
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

// Helper function to create skill with icon or fallback
const createSkill = (name: string, icon: ReactNode | null, level: number): Skill => ({
  name,
  icon: icon || <span className="skill-icon-fallback">{name[0]}</span>,
  level
})

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        createSkill('C', null, 75),
        createSkill('C++', <SiCplusplus />, 80),
        createSkill('C#', <SiCsharp />, 90),
        createSkill('Java', <FaJava />, 85),
        createSkill('Python', <FaPython />, 85),
        createSkill('JavaScript', <FaJs />, 90),
        createSkill('TypeScript', <SiTypescript />, 88),
        createSkill('SQL', null, 85),
        createSkill('HTML', <FaHtml5 />, 95),
        createSkill('CSS', <FaCss3Alt />, 90),
      ]
    },
    {
      title: 'Frontend Frameworks',
      skills: [
        createSkill('Angular', <SiAngular />, 90),
        createSkill('React', <FaReact />, 80),
        createSkill('React Native', <FaReact />, 75),
        createSkill('Ionic', <SiIonic />, 75),
        createSkill('Bootstrap', <FaBootstrap />, 85),
        createSkill('jQuery', <SiJquery />, 80),
        createSkill('Ajax', null, 80),
      ]
    },
    {
      title: 'Backend & .NET',
      skills: [
        createSkill('Node.js', <FaNode />, 85),
        createSkill('ASP.NET', <SiCsharp />, 90),
        createSkill('.NET Core', <SiCsharp />, 90),
        createSkill('Entity Framework', null, 85),
        createSkill('EF Core', null, 85),
        createSkill('Linq', null, 85),
        createSkill('ADO.NET', null, 80),
        createSkill('MySQL', <SiMysql />, 85),
        createSkill('MS SQL Server', <SiMicrosoftsqlserver />, 85),
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        createSkill('Microsoft Azure', <SiMicrosoftazure />, 85),
        createSkill('AWS', <FaAws />, 80),
        createSkill('Google Cloud', <SiGooglecloud />, 75),
        createSkill('Docker', <FaDocker />, 85),
        createSkill('Kubernetes', <SiKubernetes />, 75),
        createSkill('Terraform', <SiTerraform />, 80),
        createSkill('Fastly CDN', null, 75),
      ]
    },
    {
      title: 'AI/ML Tools',
      skills: [
        createSkill('Cursor', null, 85),
        createSkill('OpenAI', null, 80),
        createSkill('MCPs', null, 75),
        createSkill('ChatGPT', null, 85),
        createSkill('GitHub Copilot', null, 80),
      ]
    },
    {
      title: 'Tools & Services',
      skills: [
        createSkill('Git', <FaGitAlt />, 90),
        createSkill('NPM', <FaNpm />, 90),
        createSkill('NuGet', null, 85),
        createSkill('Axios', <SiAxios />, 85),
        createSkill('Stripe', <SiStripe />, 80),
        createSkill('Auth0 / MSAL', null, 80),
        createSkill('Twilio', <SiTwilio />, 75),
        createSkill('Box', null, 75),
        createSkill('Jira', <SiJira />, 85),
        createSkill('JSON / YAML', <SiJson />, 85),
        createSkill('Agile/Scrum', null, 85),
      ]
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
