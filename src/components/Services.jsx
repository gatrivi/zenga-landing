export default function Services({ services, features }) {
  return (
    <section id="services" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Services</div>
          <h2 className="h2">ZengaSoft builds sharp web tools for small businesses</h2>
          <p className="muted" style={{ marginTop: '0.45rem', maxWidth: 760 }}>
            Landing pages, stores, dashboards, booking systems, automations, and AI helpers—built to save
            time and keep things reliable.
          </p>
        </div>

        <div className="grid gridServices" style={{ marginTop: '1.3rem' }}>
          {services.map((s) => (
            <article key={s.title} className="card cardHover">
              <div className="cardPad">
                <h3 className="cardTitle">{s.title}</h3>
                <p className="cardText">{s.description}</p>
                <div className="cardTags" aria-label={`${s.title} tags`}>
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="sectionHeader" style={{ marginTop: '2.3rem' }}>
          <div className="eyebrow">What you get</div>
          <h2 className="h2">Practical builds, not template work</h2>
        </div>

        <div className="grid gridServices" style={{ marginTop: '1.2rem' }}>
          {features.map((f) => (
            <article key={f.title} className="card">
              <div className="cardPad">
                <h3 className="cardTitle" style={{ fontSize: '1.05rem' }}>
                  {f.title}
                </h3>
                <p className="cardText" style={{ marginTop: '0.55rem' }}>
                  {f.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

