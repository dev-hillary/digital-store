
import './Section.css';

function Section({ title, titleAlign = 'left', link, children }) {
  const linkText = typeof link === 'object' ? link.text : 'Ver todos';
  const linkHref = typeof link === 'object' ? link.href : link;

  return (
    <section className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2>{title}</h2>

        {link && (
          <a href={linkHref}>
            {linkText}
          </a>
        )}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
