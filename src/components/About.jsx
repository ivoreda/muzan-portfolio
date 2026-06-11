import Container from "./Container";
import SectionHeader from "./SectionHeader";

const About = () => (
  <section className="about-section" id="about">
    <Container>
      <div className="about-grid">
        <SectionHeader
          eyebrow="About"
          title="Backend systems, built with clarity."
        />
        <div className="about-copy" data-stagger>
          <p>
            I’m a senior backend developer focused on designing dependable
            software behind modern products. My work covers APIs, databases,
            microservices, integrations, queues, infrastructure, and production
            operations.
          </p>
          <p>
            I care about clean architecture, readable code, strong team
            practices, system reliability, and building backend platforms that
            other engineers can confidently extend.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
