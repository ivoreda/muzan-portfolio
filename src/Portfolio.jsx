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
  initProjectsHorizontalScroll,
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
    position: "Technical Manager",
    period: "Sep 2026 - Present",
    achievements: [
      "Accountable for end-to-end technical delivery of a multi-channel trading and portfolio management platform for a US-based client, spanning a customer mobile app, web app, back-office console and a unified backend platform",
      "Lead a cross-functional team of 9 across product, mobile, web, backend and QA, owning architecture decisions, sprint planning and delivery against a sliced, demo-able release plan",
      "Defined the delivery approach as vertical slices, starting from a deployed walking skeleton and moving through money core, dealing and settlement, then risk and compliance, so each milestone could be demonstrated to the client",
      "Drove the design of a double-entry ledger and payments core covering wallet funding, instant naira withdrawals, USD payouts and daily reconciliation, with idempotent money movement and approval controls",
    ],
  },
  {
    company: "BlackMarlin",
    location: "Lagos",
    position: "Technical Lead",
    period: "Mar 2026 - Present",
    achievements: [
      "Lead the development of BlackMarlin Payroll, a platform that lets Nigerian businesses run payroll and pay their staff directly to their bank accounts",
      "Led the product from idea to launch, covering the customer app for business owners and HR teams and an internal console for operating the platform",
      "Automated statutory payroll for Nigerian businesses, handling tax, pension and other deductions, and emailing each employee their payslip once they are paid",
      "Partnered with payment and banking providers to deliver salary payouts, and built business verification and security controls so customers can trust the platform with their money",
    ],
  },
  {
    company: "Enyata",
    location: "Lagos",
    position: "Senior Software Engineer",
    period: "Nov 2025 - Sep 2026",
    achievements: [
      "Architected a Retrieval Augmented Generation (RAG) engine that allows users to discover AI tools using intuitive queries, significantly lowering the barrier to entry for non-technical users",
      "Lead Engineer for AIDirectory, a comprehensive AI tool marketplace, spearheading the end-to-end development of the platform's architecture and core feature set",
      "Collaborated across functional teams to define the technical roadmap and MVP requirements, ensuring the project aligns with market demands for AI accessibility",
      "Developed a multi-tenant seller ecosystem, enabling developers to list, manage, and monetize their own AI products within a secure and scalable infrastructure",
      "Designed a highly scalable appointment booking system that enables patients across different timezones to create secure appointments with medical consultants",
    ],
  },
  {
    company: "7thCare Technologies",
    location: "Lagos",
    position: "Senior Software Engineer",
    period: "May 2024 - Nov 2025",
    achievements: [
      "Designed and implemented high-performance server-side architecture handling 100,000+ daily API requests for hospitals and health centres to carry out essential clinical workflows",
      "Spearheaded the re-engineering of 7thCare HybridCare V2, transitioning from a legacy monolith to a decoupled API-first architecture, improving maintainability and enabling independent scaling of frontend and backend services",
      "Mentored junior engineers through pair programming and structured feedback, fostering a culture of high-quality, maintainable code",
      "Collaborated with Product Management to translate business requirements into robust technical specifications and realistic roadmaps, delivering high-priority features on schedule",
    ],
  },
  {
    company: "RegXta",
    location: "Apapa, Lagos",
    position: "Senior Software Engineer",
    period: "Feb 2022 - May 2024",
    achievements: [
      "Designed and developed highly scalable and performant RESTful APIs capable of handling 100,000+ daily requests",
      "Implemented internal tooling for a robust staff management service that is used to handle payroll and other staff management needs",
      "Collaborated effectively with frontend, mobile, and product teams to define, design, and deliver high-quality backend solutions for critical fintech features",
      "Integrated secure third-party APIs, enhancing platform functionality and ensuring compliance with industry standards",
      "Designed and implemented a scalable microservices architecture for V2, decoupling monolithic functions into independent, high-availability services to improve system resilience and developer velocity",
      "Engineered a robust Core Banking Service from the ground up, managing critical ledger operations, transaction processing, and real-time balance updates",
      "Implemented advanced monitoring and logging across the new microservice suite using tools like Seq, reducing the Mean Time to Recovery (MTTR) for critical production incidents",
    ],
  },
  {
    company: "RegXta",
    location: "Apapa, Lagos",
    position: "Full Stack Developer",
    period: "May 2019 - Feb 2022",
    achievements: [
      "Spearheaded the creation of the frontend user interface for the beta and production iterations of our cloud-based financial technology solution",
      "Collaborated closely with executives, playing a direct role in feature development to align system functionalities with strategic business objectives",
      "Produced executive-level presentations and documentation, translating intricate technical details into actionable insights for non-technical stakeholders",
      "Architected and delivered an enhanced Web Admin Platform, providing internal stakeholders with advanced data visualization tools and granular control over account configuration and loan services",
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
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];


const metrics = [
  { value: "7+", label: "years building production systems" },
  { value: "100k+", label: "daily API requests handled" },
  { value: "99%", label: "system uptime achieved" },
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
      initProjectsHorizontalScroll();
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
