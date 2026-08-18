export default function Team({ team }) {
  return (
    <section id="team" className="section sectionAlt">
      <div className="container">
        <div className="teamLayout">
          <div>
            <div className="eyebrow">Meet the people</div>
            <h2 className="h2">Meet the Team</h2>
            <p className="muted" style={{ marginTop: '0.7rem', fontSize: '1.05rem', lineHeight: 1.65 }}>
              When software stops working, people feel it. Our job is to make your site and tools behave
              reliably—for humans first, always.
            </p>

            <div className="heroButtons" style={{ marginTop: '1.35rem' }}>
              <a className="btn btnPrimary" href="https://calendly.com/devtrivi/15m" target="_blank" rel="noreferrer">
                Meet Us
              </a>
              <a className="btn btnSecondary" href="https://instagram.com/devzenga" target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          </div>

          <div className="grid gridTeam" style={{ marginTop: '0.3rem' }}>
            {team.map((m) => (
              <a
                key={m.name}
                className="card cardHover"
                style={{ display: 'block' }}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} (${m.role})`}
              >
                <div className="workImage" style={{ height: 190 }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center 30%', display: 'block' }}
                  />
                </div>
                <div className="cardPad">
                  <h3 className="cardTitle" style={{ fontSize: '1.05rem' }}>
                    {m.name}
                  </h3>
                  <p className="cardText" style={{ marginTop: '0.55rem' }}>
                    {m.role}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
