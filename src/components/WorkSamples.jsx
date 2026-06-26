import Testimonials from './Testimonials.jsx';

export default function WorkSamples({ samples, testimonials }) {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="sectionHeader" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Work samples</div>
          <h2 className="h2">See what we build</h2>
          <p className="muted" style={{ marginTop: '0.45rem', maxWidth: 760 }}>
            A few live examples of the kinds of systems we design: fast storefronts, clean dashboards, and
            automation-ready web apps.
          </p>
        </div>

        <div className="caseLayout" style={{ marginTop: '1.3rem' }}>
          <div className="caseGrid">
            {samples.map((s) => (
              <article key={s.title} className="card cardHover">
                <div className="workImage" style={{ height: 170 }}>
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="cardPad">
                  <h3 className="cardTitle">{s.title}</h3>
                  <p className="cardText">{s.description}</p>

                  <div className="cardTags" style={{ marginTop: '0.85rem' }}>
                    {s.tags.slice(0, 3).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.05rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <a className="btn btnSecondary" href={s.href} target="_blank" rel="noreferrer">
                      See it live
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {testimonials ? <Testimonials testimonials={testimonials} mode="card" /> : null}
        </div>
      </div>
    </section>
  );
}

