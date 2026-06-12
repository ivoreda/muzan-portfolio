import Container from "./Container";

const Metrics = ({ metrics }) => (
  <section className="metrics-section" aria-label="Portfolio metrics">
    <Container>
      <div className="metrics-grid" data-stagger>
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <strong className="metric-value">{metric.value}</strong>
            <span className="metric-label">{metric.label}</span>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default Metrics;
