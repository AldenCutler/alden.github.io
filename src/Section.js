export function SectionHeader({ text, id }) {
 return (
    <div className="section-header" id={id}>
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

