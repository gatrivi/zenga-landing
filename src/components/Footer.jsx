export default function Footer({ footer }) {
  return (
    <footer style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container footerInner">
        <div>
          <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
            Follow us
          </div>
          <div className="socialRow">
            {footer.socials.map((s) => (
              <a
                key={s.label}
                className="socialIcon"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <img src={s.image} alt={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="muted" style={{ fontWeight: 800, fontSize: '0.95rem' }}>
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}

