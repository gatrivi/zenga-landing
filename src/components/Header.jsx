export default function Header({ brand, navItems }) {
  return (
    <header className="topNav">
      <div className="container topNavInner">
        <a className="brand" href="#home" aria-label={`${brand?.name ?? 'ZengaSoft'} home`}>
          {brand?.name ?? 'ZengaSoft'}
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} className="navLink" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

