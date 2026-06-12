const StackRibbon = ({ stackRibbon }) => (
  <section className="stack-ribbon" aria-label="Technology stack">
    <div className="stack-ribbon-track">
      {[0, 1, 2, 3].map((group) => (
        <div className="stack-ribbon-group" key={group}>
          {stackRibbon.map((item) => (
            <span className="stack-ribbon-item" key={`${group}-${item}`}>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default StackRibbon;
