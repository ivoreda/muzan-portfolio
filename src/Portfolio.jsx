import React, { useState } from "react";
import {
  Mail,
  Code,
  Database,
  Server,
  Briefcase,
  Award,
  BookOpen,
  User,
  ChevronRight,
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = {
    languages: [
      "Java (Core, EE)",
      "Python",
      "JavaScript",
      "TypeScript",
      "C#",
      "Solidity",
    ],
    frameworks: [
      "Spring",
      "Spring Boot",
      "JUnit",
      "Django",
      "FastAPI",
      "NestJS",
      "NodeJS",
      "React",
      "React Native",
      ".NET",
    ],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Hibernate/JPA"],
    devops: ["Git", "GitHub Actions", "Docker", "AWS EC2"],
    soft: [
      "Technical Leadership",
      "Project Management",
      "Cross-functional Team Collaboration",
      "Strategic Planning",
      "Agile",
      "Scrum",
      "Test-Driven Development",
    ],
  };

  const experiences = [
    {
      company: "SafeGarage",
      location: "Lagos",
      position: "Co-Founder & Chief Technology Officer",
      period: "Apr 2024 - Present",
      achievements: [
        "Established engineering best practices, including code review processes, testing protocols, and deployment automation, achieving 99.9% system uptime",
        "Led a team of engineers across frontend and backend implementing agile methodologies and reducing development cycle time by 40%",
        "Defined and executed technical roadmap, implementing RESTful APIs and microservices architecture to support rapid product iteration",
        "Architected and implemented a scalable microservices-based platform, significantly enhancing user engagement and driving a substantial growth in monthly active users",
      ],
    },
    {
      company: "7thCare",
      location: "Wuse II, Abuja",
      position: "Senior Backend Developer",
      period: "May 2024 - Present",
      achievements: [
        "Designed and implemented high-performance server-side architecture handling 100,000+ daily API requests",
        "Successfully lead the team to build and scale the V2 of 7thCare HybridCare platform",
        "Mentored junior developers and led technical design reviews, improving team development speed significantly",
        "Collaborated with product management to define technical specifications and delivery timelines for key features",
      ],
    },
    {
      company: "RegXta",
      location: "Apapa, Lagos",
      position: "Senior Backend Developer",
      period: "Nov 2023 - Present",
      achievements: [
        "Designed and developed highly scalable and performant RESTful APIs capable of handling 100,000+ daily requests",
        "Implemented performance optimizations resulting in a 20% reduction API response times",
        "Collaborated effectively with frontend, mobile, and product teams to define, design, and deliver high-quality backend solutions for critical fintech features",
        "Integrated secure third-party APIs, enhancing platform functionality and ensuring compliance with industry standards",
      ],
    },
    {
      company: "99Apartments",
      location: "Lekki, Lagos",
      position: "Backend Developer",
      period: "Feb 2023 - Nov 2023",
      achievements: [
        "Led development of RESTful APIs supporting real-time property matching system",
        "Managed 5-person development team, reducing project delivery time by 35%",
        "Implemented automated testing suite achieving 90% code coverage",
        "Optimized database performance, reducing query response times by 45%",
      ],
    },
    {
      company: "TheSociaLiga",
      location: "Victoria Island, Lagos",
      position: "Backend Developer",
      period: "Feb 2022 - Feb 2023",
      achievements: [
        "Managed full lifecycle development for ~5 backend feature releases, resulting in at least a 35% reduction in downtime",
        "Optimized databases to improve performance by at least 40% and decrease retrieval time of complex queries by 50%",
        "Played a pivotal role in ensuring that projects remained aligned with the company's strategic vision and objectives",
      ],
    },
  ];

  const projects = [
    {
      title: "Microservices Platform at SafeGarage",
      description:
        "Led the architecture and implementation of a scalable microservices platform that significantly enhanced user engagement.",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "Microservices",
        "REST APIs",
        "Docker",
      ],
      highlights: [
        "99.9% system uptime",
        "40% reduction in development cycle time",
      ],
    },
    {
      title: "7thCare HybridCare Platform V2",
      description:
        "Led the team to build and scale the second version of the HybridCare platform, handling high-volume API requests.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "RESTful APIs",
        "AWS EC2",
      ],
      highlights: [
        "100,000+ daily API requests",
        "Improved team development speed",
      ],
    },
    {
      title: "RESTful API Optimization at RegXta",
      description:
        "Designed and optimized high-performance APIs for a fintech platform, ensuring secure and compliant operations.",
      technologies: [
        "C#",
        ".NET",
        "PostgreSQL",
        "API Security",
        "Third-party integrations",
      ],
      highlights: [
        "20% reduction in API response times",
        "100,000+ daily requests",
      ],
    },
    {
      title: "Real-time Property Matching System",
      description:
        "Led the development of RESTful APIs supporting a real-time property matching system at 99Apartments.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "CI/CD"],
      highlights: ["90% code coverage", "45% faster query response times"],
    },
    {
      title: "Blockchain-based Content Sharing System",
      description:
        "University final year project implementing a decentralized content sharing platform.",
      technologies: ["Solidity", "JavaScript", "React", "NodeJS", "IPFS"],
      highlights: ["Secure content distribution", "Decentralized architecture"],
    },
  ];

  const certifications = [
    {
      title: "Advanced Backend Engineering",
      provider: "Udemy",
      year: "2023",
      description:
        "Covered system design, scalability, and microservices architecture",
    },
    {
      title: "Advanced Data Structures and Algorithms",
      provider: "Udemy",
      description:
        "Focused on implementing highly scalable and performant algorithms",
    },
    {
      title: "Build a backend REST API with Python & Django",
      provider: "Udemy",
      description:
        "Focused on API design, security, and performance optimization",
    },
  ];

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Ivor Edafe</h1>
          <h2>Senior Backend Developer & CTO</h2>
          <p>
            Results-driven Software Engineer with 5+ years of experience
            architecting and implementing scalable applications with a focus on
            high-performance backend systems.
          </p>
          <div className="btn-container">
            <a href="mailto:ivoredafej@gmail.com" className="btn-primary">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <a
              href="https://linkedin.com/in/ivor-edafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/IvorEda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-container">
            <button
              onClick={() => setActiveSection("about")}
              className={`nav-btn ${activeSection === "about" ? "active" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("skills")}
              className={`nav-btn ${
                activeSection === "skills" ? "active" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className={`nav-btn ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("projects")}
              className={`nav-btn ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection("education")}
              className={`nav-btn ${
                activeSection === "education" ? "active" : ""
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`nav-btn ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* About Section */}
          {activeSection === "about" && (
            <section id="about">
              <div className="section-header">
                <User className="section-icon" size={28} />
                <h2>About Me</h2>
              </div>
              <div className="card">
                <p className="text-lg">
                  I'm a results-driven Software Engineer with 5+ years of
                  experience architecting and implementing scalable
                  applications. I specialize in backend development with Java
                  and Spring Boot, creating high-performance systems and RESTful
                  APIs.
                </p>
                <p className="text-lg">
                  With a strong background in microservices architecture and
                  technical leadership, I've delivered high-impact solutions
                  that drive business growth across multiple industries,
                  including fintech and property technology.
                </p>
                <p className="text-lg">
                  Currently serving as CTO of SafeGarage, where I lead technical
                  strategy and team development, establishing engineering best
                  practices and implementing scalable architecture.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <h3 className="subheading">Quick Facts</h3>
                  <ul className="quick-facts">
                    <li>
                      <ChevronRight className="text-blue" size={20} />
                      <span>Based in Lagos, Nigeria</span>
                    </li>
                    <li>
                      <ChevronRight className="text-blue" size={20} />
                      <span>5+ years in software development</span>
                    </li>
                    <li>
                      <ChevronRight className="text-blue" size={20} />
                      <span>Specialized in Java backend development</span>
                    </li>
                    <li>
                      <ChevronRight className="text-blue" size={20} />
                      <span>Experience in fintech and real estate tech</span>
                    </li>
                    <li>
                      <ChevronRight className="text-blue" size={20} />
                      <span>B.Sc. Computer Science, University of Benin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <section id="skills">
              <div className="section-header">
                <Code className="section-icon" size={28} />
                <h2>Technical Skills</h2>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <h3>
                    <Code size={20} className="text-blue" />
                    Programming Languages
                  </h3>
                  <div className="skill-tag-container">
                    {skills.languages.map((skill, index) => (
                      <span key={index} className="skill-tag tag-blue">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card">
                  <h3>
                    <Server size={20} className="text-blue" />
                    Frameworks & Libraries
                  </h3>
                  <div className="skill-tag-container">
                    {skills.frameworks.map((skill, index) => (
                      <span key={index} className="skill-tag tag-green">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card">
                  <h3>
                    <Database size={20} className="text-blue" />
                    Databases & ORM
                  </h3>
                  <div className="skill-tag-container">
                    {skills.databases.map((skill, index) => (
                      <span key={index} className="skill-tag tag-purple">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card">
                  <h3>
                    <Server size={20} className="text-blue" />
                    Cloud & DevOps
                  </h3>
                  <div className="skill-tag-container">
                    {skills.devops.map((skill, index) => (
                      <span key={index} className="skill-tag tag-yellow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card col-span-2">
                  <h3>Soft Skills & Methodologies</h3>
                  <div className="skill-tag-container">
                    {skills.soft.map((skill, index) => (
                      <span key={index} className="skill-tag tag-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <section id="experience">
              <div className="section-header">
                <Briefcase className="section-icon" size={28} />
                <h2>Professional Experience</h2>
              </div>
              <div>
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-card">
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-company">{exp.company}</h3>
                        <p className="exp-position">{exp.position}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p className="exp-period">{exp.period}</p>
                        <p className="exp-location">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="exp-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <ChevronRight
                            className="text-blue"
                            size={16}
                            style={{ marginTop: "4px" }}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <section id="projects">
              <div className="section-header">
                <Code className="section-icon" size={28} />
                <h2>Key Projects</h2>
                
              </div>
              <p className="text-lg">
                  Some of the projects that i am able to share include:
                </p>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="project-body">
                      <p style={{ marginBottom: "1rem" }}>
                        {project.description}
                      </p>
                      <div style={{ marginBottom: "1rem" }}>
                        <h4
                          style={{ fontWeight: "600", marginBottom: "0.5rem" }}
                        >
                          Technologies:
                        </h4>
                        <div className="tech-tags">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4
                          style={{ fontWeight: "600", marginBottom: "0.5rem" }}
                        >
                          Highlights:
                        </h4>
                        <ul className="highlight-list">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>
                              <ChevronRight
                                className="text-blue"
                                size={16}
                                style={{ marginTop: "4px" }}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {activeSection === "education" && (
            <section id="education">
              <div className="section-header">
                <BookOpen className="section-icon" size={28} />
                <h2>Education & Certifications</h2>
              </div>
              <div className="education-card">
                <div className="edu-header">
                  <div>
                    <h3 className="university">University of Benin</h3>
                    <p className="degree">B.Sc. Computer Science</p>
                  </div>
                  <p className="edu-period">Sep 2016 - Jul 2019</p>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    Relevant Coursework:
                  </h4>
                  <p>
                    Data Structures, Algorithms, Database Management, Software
                    Engineering
                  </p>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    Final Year Project:
                  </h4>
                  <p>Blockchain based content sharing system</p>
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                Certifications
              </h3>
              <div className="cert-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-card">
                    <div className="cert-header">
                      <Award className="text-blue" size={20} />
                      <h4 className="cert-title">{cert.title}</h4>
                    </div>
                    <p className="cert-provider">
                      {cert.provider} {cert.year && `| ${cert.year}`}
                    </p>
                    <p>{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <section id="contact">
              <div className="section-header">
                <Mail className="section-icon" size={28} />
                <h2>Contact Me</h2>
              </div>
              <div className="card">
                <p className="text-lg">
                  I'm currently open to new opportunities and collaborations.
                  Feel free to reach out to me through any of the following
                  channels:
                </p>
                <div style={{ marginTop: "1.5rem" }}>
                  <a
                    href="mailto:ivoredafej@gmail.com"
                    className="contact-link"
                  >
                    <Mail size={24} className="text-blue" />
                    <div>
                      <h3 className="contact-title">Email</h3>
                      <p>ivoredafej@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/ivor-edafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <h3 className="contact-title">LinkedIn</h3>
                      <p>Connect with me professionally</p>
                    </div>
                  </a>
                  <a href="tel:+2348037719940" className="contact-link">
                    <div>
                      <h3 className="contact-title">Phone</h3>
                      <p>+234 803 771 9940</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-info">
              <h3 className="footer-title">Ivor Edafe</h3>
              <p>Senior Backend Developer & CTO</p>
            </div>
            <div className="footer-links">
              <a href="mailto:ivoredafej@gmail.com" className="footer-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Ivor Edafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
