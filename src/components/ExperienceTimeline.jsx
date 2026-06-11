import { MapPin } from "lucide-react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const ExperienceTimeline = ({ experiences }) => (
  <section className="experience-section" id="experience">
    <Container>
      <SectionHeader eyebrow="Experience" title="Leadership, architecture, delivery." />

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={`${experience.company}-${experience.period}`}>
            <span className="experience-index">0{index + 1}</span>
            <div className="experience-card-body">
              <div className="experience-header">
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.position}</p>
                </div>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span><MapPin size={15} /> {experience.location}</span>
                </div>
              </div>

              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default ExperienceTimeline;
