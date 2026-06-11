import Container from "./Container";
import RetroIcon from "./RetroIcon";
import SectionHeader from "./SectionHeader";

const ProjectsScrollStack = ({ projects }) => (
  <section className="projects-scroll-section" id="projects">
    <Container>
      <div className="projects-section-head">
        <SectionHeader eyebrow="Projects" title="Backend case files, stacked for review." />
        <p data-reveal>
          A compact view of systems I have led, optimized, and scaled across
          microservices, healthcare, fintech, real estate, and blockchain.
        </p>
      </div>
    </Container>

    <Container>
      <div className="project-stage-label" aria-hidden="true">
        <span>Selected work</span>
        <span>{projects.length} systems</span>
      </div>
    </Container>

    <div className="projects-horizontal-wrap" aria-label="Scrollable project cards">
      <div className="projects-horizontal-track">
        {projects.map((project, index) => (
          <article className="project-horizontal-card" key={project.title}>
            <div className="project-topline">
              <div>
                <span className="project-index">0{index + 1}</span>
                <span className="project-type">Backend system</span>
              </div>
              <div className="project-folder-tab">
                <RetroIcon name="folder" />
              </div>
            </div>

            <div className="project-card-body">
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-side">
                <h4>Highlights</h4>
                <ul className="project-highlight-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsScrollStack;
