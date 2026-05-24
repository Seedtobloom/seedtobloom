/* Header.jsx — sticky header, Terre surface, nav with Services dropdown. */

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
    padding: '0 40px',
    height: 72,
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
    fontSize: 12,
    opacity: 0.55,
    letterSpacing: '0.04em',
    marginBottom: 1,
  },
  logoWord: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 28,
    letterSpacing: '-0.005em',
    color: 'var(--paille)',
  },
  nav: {
    display: 'flex',
    gap: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
    textDecoration: 'none',
    opacity: 0.78,
    paddingBottom: 4,
    borderBottom: '1px solid transparent',
    transition: 'all 240ms var(--ease-out-soft)',
    whiteSpace: 'nowrap',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownToggle: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
    textDecoration: 'none',
    opacity: 0.78,
    paddingBottom: 4,
    borderBottom: '1px solid transparent',
    transition: 'all 240ms var(--ease-out-soft)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: 'none',
    border: 0,
    outline: 0,
    whiteSpace: 'nowrap',
  },
  dropdownCaret: {
    fontSize: 9,
    opacity: 0.6,
    transition: 'transform 200ms var(--ease-out-soft)',
  },
  dropdownPanel: {
    position: 'absolute',
    top: 'calc(100% + 18px)',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--terre-800)',
    border: '1px solid var(--line-on-terre)',
    padding: '8px 0',
    minWidth: 240,
    boxShadow: 'var(--shadow-3)',
    zIndex: 100,
  },
  dropdownItem: {
    display: 'block',
    padding: '12px 22px',
    fontFamily: 'var(--font-micro)',
    fontSize: 10.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
    textDecoration: 'none',
    opacity: 0.82,
    transition: 'background 180ms, opacity 180ms',
    whiteSpace: 'nowrap',
  },
};

const NAV_LINKS = [
  ['Accueil',   'index.html'],
  ['Portfolio', 'portfolio.html'],
  ['À propos',  'a-propos.html'],
  ['Contact',   'contact.html'],
];

const SERVICE_LINKS = [
  ['Identité visuelle éco-responsable', 'identite-visuelle.html'],
  ['Supports de communication',          'supports-de-communication.html'],
  ['Partenaire créative',                'services.html#partenaire'],
];

function ServicesDropdown() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div style={headerStyles.dropdown} ref={ref}>
      <button
        style={{
          ...headerStyles.dropdownToggle,
          opacity: open ? 1 : 0.78,
          borderBottomColor: open ? 'var(--paille)' : 'transparent',
        }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Prestations
        <span style={{
          ...headerStyles.dropdownCaret,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>▾</span>
      </button>

      {open && (
        <div style={headerStyles.dropdownPanel} role="menu">
          {SERVICE_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={headerStyles.dropdownItem}
              role="menuitem"
              onClick={() => setOpen(false)}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--terre-600)'; e.currentTarget.style.opacity = 1; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.opacity = 0.82; }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
        <a href="index.html" style={headerStyles.logoLink} aria-label="Seed to Bloom, accueil">
          <span style={headerStyles.logoKicker}>studio</span>
          <span style={headerStyles.logoWord}>Seed to Bloom</span>
        </a>

        <nav style={headerStyles.nav} aria-label="Navigation principale">
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} style={headerStyles.navLink}
               onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.borderBottomColor = 'var(--paille)'; }}
               onMouseLeave={e => { e.currentTarget.style.opacity = 0.78; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
              {label}
            </a>
          ))}
          <ServicesDropdown />
        </nav>

        <a href="contact.html" className="btn btn--paille" style={{
          padding: '12px 22px', fontSize: 10.5, letterSpacing: '0.12em',
        }}>
          Réserver un appel
        </a>
      </div>
    </header>
  );
}

window.Header = Header;
