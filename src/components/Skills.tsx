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
  SiVite,
  SiC,
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
  SiMicrosoftsqlserver,
  SiRedis,
  SiOpenai,
  SiFastly,
  SiNuget,
  SiAuth0,
  SiBox,
  SiDotnet
} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
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
        createSkill('C', <SiC />, 75),
        createSkill('C++', <SiCplusplus />, 80),
        createSkill('C#', <SiCsharp />, 95),
        createSkill('Java', <FaJava />, 90),
        createSkill('Python', <FaPython />, 85),
        createSkill('JavaScript', <FaJs />, 90),
        createSkill('TypeScript', <SiTypescript />, 95),
        createSkill('SQL', null, 90),
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
        createSkill('.NET Core', <SiCsharp />, 95),
        createSkill('ASP.NET', <SiCsharp />, 95),
        createSkill('Entity Framework (EF Core)', <SiDotnet />, 85),
        createSkill('Linq', <SiCsharp />, 85),
        createSkill('ADO.NET', <SiCsharp />, 90),
        createSkill('MS SQL Server', <SiMicrosoftsqlserver />, 90),
        createSkill('Redis', <SiRedis />, 70),
        createSkill('MySQL', <SiMysql />, 80),
        createSkill('Node.js', <FaNode />, 75),
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        createSkill('Microsoft Azure', <SiMicrosoftazure />, 95),
        createSkill('AWS', <FaAws />, 75),
        createSkill('Google Cloud', <SiGooglecloud />, 80),
        createSkill('Docker', <FaDocker />, 95),
        createSkill('Kubernetes', <SiKubernetes />, 80),
        createSkill('Terraform', <SiTerraform />, 80),
        createSkill('Fastly CDN', <SiFastly />, 75),
      ]
    },
    {
      title: 'AI/ML Tools',
      skills: [
        createSkill('Cursor', null, 85),
        createSkill('OpenAI / ChatGPT', <SiOpenai />, 85),
        createSkill('MCPs', null, 75),
        createSkill('GitHub Copilot', <FaGithub />, 80),
        createSkill('ML.NET', <SiDotnet />, 75),
      ]
    },
    {
      title: 'Tools & Services',
      skills: [
        createSkill('Git', <FaGitAlt />, 90),
        createSkill('NPM', <FaNpm />, 90),
        createSkill('NuGet', <SiNuget />, 90),
        createSkill('Vite', <SiVite />, 80),
        createSkill('Axios', <SiAxios />, 85),
        createSkill('Stripe', <SiStripe />, 80),
        createSkill('Auth0 / MSAL', <SiAuth0 />, 85),
        createSkill('Twilio', <SiTwilio />, 80),
        createSkill('Box', <SiBox />, 75),
        createSkill('Jira', <SiJira />, 85),
        createSkill('JSON / YAML', <SiJson />, 90)
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
