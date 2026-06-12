import { Github, Mail } from "lucide-react";
import Container from "./Container";

const heroStack = ["Go", "Spring Boot", "PostgreSQL", "Docker", "AWS EC2"];

const Hero = () => (
  <section className="hero" id="top">
    <Container className="hero-grid">
      <div className="hero-copy-block">
        <p className="hero-kicker" data-reveal>Senior Backend Developer</p>
        <h1 className="hero-title">
          Reliable backend systems for ambitious products.
        </h1>
        <p className="hero-copy" data-reveal>
          I design APIs, microservices, databases, infrastructure, and backend
          platforms that are scalable, observable, and built for real production
          use.
        </p>
        <div className="hero-actions" data-reveal>
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="mailto:ivoredafej@gmail.com">
            <Mail size={18} />
            Download Résumé
          </a>
          <a
            className="btn btn-icon"
            href="https://github.com/IvorEda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
        </div>
        <div className="hero-stack-labels hero-stack-inline" data-stagger>
          {heroStack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
