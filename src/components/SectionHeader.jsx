const SectionHeader = ({ eyebrow, title, className = "" }) => {
  const words = title.split(" ");

  return (
    <div className={`section-header ${className}`} data-reveal>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="reveal-text">
        {words.map((word, index) => (
          <span className="word-wrap" key={`${word}-${index}`}>
            <span className="word">{word}</span>
          </span>
        ))}
      </h2>
    </div>
  );
};

export default SectionHeader;
