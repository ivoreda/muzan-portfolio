import Container from "./Container";
import RetroIcon from "./RetroIcon";
import SectionHeader from "./SectionHeader";

const Certifications = ({ certifications }) => (
  <section className="certifications-section" id="education">
    <Container>
      <SectionHeader
        eyebrow="Education"
        title="Computer science foundations, sharpened in production."
      />

      <div className="education-cert-grid">
        <article className="education-card" data-reveal>
          <RetroIcon name="badge" />
          <div>
            <span>University</span>
            <h3>University of Benin</h3>
            <p>B.Sc. Computer Science</p>
            <p>Sep 2016 - Jul 2019</p>
            <p>
              Relevant Coursework: Data Structures, Algorithms, Database
              Management, Software Engineering.
            </p>
            <p>Final Year Project: Blockchain based content sharing system.</p>
          </div>
        </article>

        <div className="cert-card-list" data-stagger>
          {certifications.map((certification) => (
            <article className="cert-card" key={certification.title}>
              <RetroIcon name="badge" />
              <div>
                <h3>{certification.title}</h3>
                <p className="cert-provider">
                  {certification.provider}
                  {certification.year && ` | ${certification.year}`}
                </p>
                <p>{certification.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Certifications;
