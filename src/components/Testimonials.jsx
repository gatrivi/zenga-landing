export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Testimonials</div>
          <h2 className="h2" style={{ marginBottom: '0.9rem' }}>
            {testimonials.heading}
          </h2>
        </div>

        <div className="card" style={{ padding: '1.2rem' }}>
          <div className="contactCard">
            <div className="workImage" style={{ height: 270, borderRadius: 16 }}>
              <img src={testimonials.image} alt={testimonials.author} />
            </div>

            <div>
              <p
                className="cardText"
                style={{
                  fontSize: '1.08rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.78)',
                  marginTop: 0,
                }}
              >
                “{testimonials.quote}”
              </p>

              <div style={{ marginTop: '1.2rem' }}>
                <div className="cardTitle" style={{ fontSize: '1.05rem' }}>
                  {testimonials.author}
                </div>
                <div className="muted" style={{ marginTop: '0.35rem', fontWeight: 700 }}>
                  {testimonials.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

