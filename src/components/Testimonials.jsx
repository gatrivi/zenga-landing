export default function Testimonials({ testimonials, mode = 'section' }) {
  const card = (
    <div className="card" style={{ padding: mode === 'card' ? '1.1rem' : '1.2rem' }}>
      <div className="contactCard">
        <div className="workImage" style={{ height: mode === 'card' ? 240 : 270, borderRadius: 16 }}>
          <img
            src={testimonials.image}
            alt={testimonials.author}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: 'center 30%', display: 'block' }}
          />
        </div>

        <div>
          <p
            className="cardText"
            style={{
              fontSize: mode === 'card' ? '1.02rem' : '1.08rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.78)',
              marginTop: 0,
            }}
          >
            “{testimonials.quote}”
          </p>

          <div style={{ marginTop: mode === 'card' ? '0.95rem' : '1.2rem' }}>
            <div className="cardTitle" style={{ fontSize: mode === 'card' ? '1.02rem' : '1.05rem' }}>
              {testimonials.author}
            </div>
            <div className="muted" style={{ marginTop: '0.35rem', fontWeight: 700 }}>
              {testimonials.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (mode === 'card') {
    return (
      <aside id="testimonials" className="testimonialSide">
        <div className="sectionHeader" style={{ marginBottom: '0.9rem' }}>
          <div className="eyebrow">Testimonials</div>
          <div className="cardTitle" style={{ fontSize: '1.18rem' }}>
            {testimonials.heading}
          </div>
        </div>
        {card}
      </aside>
    );
  }

  return (
    <section id="testimonials" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Testimonials</div>
          <h2 className="h2" style={{ marginBottom: '0.9rem' }}>
            {testimonials.heading}
          </h2>
        </div>
        {card}
      </div>
    </section>
  );
}
