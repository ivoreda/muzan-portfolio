import Container from "./Container";
import RetroIcon from "./RetroIcon";
import SectionHeader from "./SectionHeader";

const SkillsStack = ({ skillGroups }) => (
  <section className="skills-section" id="skills">
    <Container>
      <SectionHeader eyebrow="Skills" title="A backend toolkit told as visual puzzles." />

      <div className="skills-stack">
        {skillGroups.map((group) => (
          <article className={`skill-stack-card ${group.color}`} key={group.title}>
            <div className="skill-card-header">
              <span>{group.cue}</span>
              <RetroIcon name={group.icon} />
            </div>

            <h3>{group.title}</h3>

            <div className="skill-pill-list">
              {group.items.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default SkillsStack;
