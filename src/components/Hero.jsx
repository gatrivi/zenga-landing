export default function Hero({ hero, sideImage }) {
  return (
    <section id="home" className="hero">
      <div className="heroBg" style={{ backgroundImage: `url(${hero.backgroundImage})` }} />
      <div className="heroOverlay" />

      <div className="container heroInner">
        <div className="heroLayout">
          <div style={{ position: 'relative' }}>
            <div className="eyebrow">Small sharp software studio</div>
            <h1 className="h1">{hero.headline}</h1>
            <p className="heroLead">{hero.lead}</p>

            <div className="heroButtons">
              <a className="btn btnPrimary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btnSecondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>

            {hero.pills?.length ? (
              <div className="heroBullets" aria-label="Highlights">
                {hero.pills.map((pill) => (
                  <span key={pill} className="pill">
                    <span className="pillIcon" aria-hidden="true">
                      ⚡
                    </span>
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {sideImage ? (
            <div className="heroSideCard" aria-hidden="true">
              <img
                src={sideImage}
                alt=""
                decoding="async"
                fetchPriority="high"
                style={{ objectFit: 'contain', objectPosition: 'top center' }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
