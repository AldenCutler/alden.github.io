export function SectionHeader({ text, id }) {
  return (
    <div id={id} className="section-header">
      <h2>{text}</h2>
    </div>
  );
}

export function SectionText({ text }) {
  return (
    <div className="section-text">
      <p>{text}</p>
    </div>
  );
}

