import React, { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import ContactCTA from "./components/ContactCTA";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import ProjectsScrollStack from "./components/ProjectsScrollStack";
import SkillsStack from "./components/SkillsStack";
import StackRibbon from "./components/StackRibbon";
import {
  disableMotion,
  initExperienceReveals,
  initFloatingIcons,
  initHeroAnimations,
  initScrollReveals,
  initSkillStack,
  initStackRibbon,
  initTextReveals,
  gsap,
} from "./lib/animations";
import "./Portfolio.css";

const skills = {
  languages: [
    "Go",
    "Java (Core, EE)",
    "Python",
    "JavaScript",
    "TypeScript",
    "C#",
    "C",
    "C++",
    "Solidity",
    "PHP",
    "Rust",
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
    "Laravel",
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
    company: "Enyata",
    location: "Lagos",
    position: "Senior Software Engineer",
    period: "Nov 2025 - Present",
    achievements: [
      "Established engineering best practices, including code review processes, testing protocols, and deployment automation, achieving 99.9% system uptime",
      "Led a team of engineers across frontend and backend implementing agile methodologies and reducing development cycle time by 40%",
      "Defined and executed technical roadmap, implementing RESTful APIs and microservices architecture to support rapid product iteration",
      "Architected and implemented a scalable microservices-based platform, significantly enhancing user engagement and driving a substantial growth in monthly active users",
    ],
  },
  {
    company: "SafeGarage",
    location: "Lagos",
    position: "Co-Founder & Technical Lead",
    period: "Apr 2024 - Nov 2025",
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
    period: "May 2024 - Nov 2025",
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
    period: "June 2021 - May 2024",
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
    highlights: ["99.9% system uptime", "40% reduction in development cycle time"],
  },
  {
    title: "7thCare HybridCare Platform V2",
    description:
      "Led the team to build and scale the second version of the HybridCare platform, handling high-volume API requests.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs", "AWS EC2"],
    highlights: ["100,000+ daily API requests", "Improved team development speed"],
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
    highlights: ["20% reduction in API response times", "100,000+ daily requests"],
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

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const metrics = [
  { value: "5+", label: "years building production systems" },
  { value: "100k+", label: "daily API requests handled" },
  { value: "99.9%", label: "system uptime achieved" },
  { value: "40%", label: "faster delivery cycles led" },
];

const stackRibbon = [
  ...skills.languages,
  ...skills.frameworks,
  ...skills.databases,
  ...skills.devops,
];

const skillGroups = [
  {
    title: "Programming Languages",
    cue: "I speak in",
    icon: "brackets",
    items: skills.languages,
    color: "orange",
  },
  {
    title: "Frameworks & Libraries",
    cue: "I ship with",
    icon: "window",
    items: skills.frameworks,
    color: "coral",
  },
  {
    title: "Databases & ORM",
    cue: "I persist through",
    icon: "database",
    items: skills.databases,
    color: "mint",
  },
  {
    title: "Cloud & DevOps",
    cue: "I deploy by",
    icon: "cloud",
    items: skills.devops,
    color: "yellow",
  },
  {
    title: "Soft Skills & Methodologies",
    cue: "I lead with",
    icon: "compass",
    items: skills.soft,
    color: "pink",
  },
];

const Portfolio = () => {
  const rootRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      disableMotion();
      return () => document.body.classList.remove("reduced-motion");
    }

    const context = gsap.context(() => {
      initHeroAnimations();
      initScrollReveals();
      initTextReveals();
      initSkillStack();
      initStackRibbon();
      initFloatingIcons();
      initExperienceReveals();
    }, rootRef.current);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio" ref={rootRef}>
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main>
        <Hero />
        <Metrics metrics={metrics} />
        <About />
        <StackRibbon stackRibbon={stackRibbon} />
        <SkillsStack skillGroups={skillGroups} />
        <ProjectsScrollStack projects={projects} />
        <ExperienceTimeline experiences={experiences} />
        <Certifications certifications={certifications} />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
