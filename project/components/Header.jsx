/* Header.jsx — sticky header, Terre surface, fine hairline divider on scroll */

const headerStyles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'var(--terre)',
    color: 'var(--paille)',
    transition: 'box-shadow 240ms var(--ease-out-soft)',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '22px 40px',
    display: 'grid',
    gridTemplateColumns: '180px 1fr auto',
    alignItems: 'center',
    gap: 24,
  },
  logoLink: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    color: 'inherit',
    lineHeight: 1,
  },
  logoKicker: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 13,
    opacity: 0.6,
    letterSpacing: '0.04em',
    marginBottom: 1,
  },
  logoWord: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 30,
    letterSpacing: '-0.005em',
    color: 'var(--paille)',
  },
  nav: {
    display: 'flex',
    gap: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
    textDecoration: 'none',
    opacity: 0.82,
    paddingBottom: 4,
    borderBottom: '1px solid transparent',
    transition: 'all 240ms var(--ease-out-soft)',
  },
};

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      ...headerStyles.bar,
      boxShadow: scrolled ? '0 1px 0 var(--line-on-terre)' : 'none',
    }}>
      <div style={headerStyles.inner}>
        <a href="#" style={headerStyles.logoLink} aria-label="Seedtobloom, accueil">
          <span style={headerStyles.logoKicker}>studio</span>
          <span style={headerStyles.logoWord}>Seedtobloom</span>
        </a>
        <nav style={headerStyles.nav}>
          {[
            ['Services',  'services.html'],
            ['Portfolio', 'portfolio.html'],
            ['À propos',  'a-propos.html'],
            ['Contact',   'contact.html'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={headerStyles.navLink}
               onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.borderBottomColor = 'var(--paille)'; }}
               onMouseLeave={e => { e.currentTarget.style.opacity = 0.82; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--paille" style={{
          padding: '12px 22px', fontSize: 11, letterSpacing: '0.12em',
        }}>
          Appel découverte
        </a>
      </div>
    </header>
  );
}

window.Header = Header;
