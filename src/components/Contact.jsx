export default function Contact({ contact }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contactBg" style={{ padding: '1.15rem' }}>
          <div className="contactCard">
            <div style={{ padding: '0.35rem 0.2rem 0' }}>
              <div className="eyebrow">Contact</div>
              <h2 className="h2" style={{ marginTop: '0.55rem' }}>
                {contact.title}
              </h2>
              <p className="muted" style={{ marginTop: '0.8rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {contact.lead}
              </p>

              <div className="cardTags" style={{ marginTop: '1.1rem' }}>
                {['Web apps', 'Stores', 'Dashboards', 'Automation', 'AI workflows'].map((t) => (
                  <span key={t} className="tagSoft">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <form action={contact.formAction} method="POST" className="contactFormPanel">
              <div className="formRow2">
                <div className="field">
                  <label htmlFor="first-name">{contact.fields.firstNameLabel}</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    placeholder={contact.placeholders.firstName}
                    autoComplete="given-name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="last-name">{contact.fields.lastNameLabel}</label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    placeholder={contact.placeholders.lastName}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="field" style={{ marginTop: '1rem' }}>
                <label htmlFor="email">{contact.fields.emailLabel}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contact.placeholders.email}
                  autoComplete="email"
                />
              </div>

              <div className="field" style={{ marginTop: '1rem' }}>
                <label htmlFor="message">{contact.fields.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={contact.placeholders.message}
                  rows={4}
                />
              </div>

              <div className="formActions">
                <button type="submit" className="btn btnPrimary">
                  {contact.submitLabel}
                </button>
              </div>

              <p className="muted" style={{ marginTop: '0.9rem', fontSize: '0.95rem' }}>
                No spam. We’ll respond with a practical next step.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

