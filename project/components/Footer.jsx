/* Footer.jsx — Nuit surface, editorial 4-column footer with a hairline divider band on top
   and a small final line with mentions légales + social. */

const ftStyles = {
  footer: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '96px 0 32px',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
  },
  topBand: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))',
    gap: 56,
    paddingBottom: 64,
    borderBottom: '1px solid var(--line-on-nuit)',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  },
  logoKicker: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 14,
    opacity: 0.55,
    letterSpacing: '0.04em',
  },
  logoWord: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 36,
    color: 'var(--brume)',
    letterSpacing: '-0.005em',
    lineHeight: 1,
  },
  tagline: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: '4px 0 0',
    maxWidth: 320,
  },
  contactRow: {
    marginTop: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  contactItem: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--brume)',
    textDecoration: 'none',
    paddingBottom: 2,
    width: 'fit-content',
    borderBottom: '1px solid transparent',
    transition: 'border-color 240ms var(--ease-out-soft)',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  colHead: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
    margin: '0 0 4px',
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: 15.5,
    color: 'var(--brume)',
    textDecoration: 'none',
    paddingBottom: 1,
    borderBottom: '1px solid transparent',
    transition: 'border-color 240ms var(--ease-out-soft)',
    width: 'fit-content',
  },
  bottomBand: {
    marginTop: 32,
    paddingTop: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  copyright: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
  },
  legalRow: {
    display: 'flex',
    gap: 22,
    fontFamily: 'var(--font-micro)',
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
  },
  legalLink: {
    color: 'var(--fg-on-nuit-muted)',
    textDecoration: 'none',
  },
};

function FooterLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} style={{
      ...ftStyles.link,
      borderBottomColor: hover ? 'var(--brume)' : 'transparent',
    }}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer style={ftStyles.footer} data-screen-label="08 Footer">
      <div style={ftStyles.inner}>
        <div style={ftStyles.topBand}>
          <div style={ftStyles.brandCol}>
            <div>
              <div style={ftStyles.logoKicker}>studio</div>
              <div style={ftStyles.logoWord}>Seedtobloom</div>
            </div>
            <p style={ftStyles.tagline}>
              Communication visuelle pour structures engagées et métiers de bouche. Pensée pour la vraie vie.
            </p>
            <div style={ftStyles.contactRow}>
              <a href="mailto:bonjour@seedtobloom.fr"
                 style={ftStyles.contactItem}
                 onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--brume)'}
                 onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>
                bonjour@seedtobloom.fr
              </a>
              <a href="tel:+33000000000"
                 style={ftStyles.contactItem}
                 onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--brume)'}
                 onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>
                Lille · sur rendez-vous
              </a>
            </div>
          </div>

          <div style={ftStyles.col}>
            <h4 style={ftStyles.colHead}>Services</h4>
            <FooterLink href="identite-visuelle.html">Identité visuelle</FooterLink>
            <FooterLink href="supports-de-communication.html">Supports de communication</FooterLink>
            <FooterLink href="services.html#partenaire">Partenaire créative</FooterLink>
            <FooterLink href="services.html">Tous les services →</FooterLink>
          </div>

          <div style={ftStyles.col}>
            <h4 style={ftStyles.colHead}>Le studio</h4>
            <FooterLink href="portfolio.html">Portfolio</FooterLink>
            <FooterLink href="a-propos.html">À propos</FooterLink>
            <FooterLink href="#approche">Approche</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </div>

          <div style={ftStyles.col}>
            <h4 style={ftStyles.colHead}>Suivre</h4>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Newsletter trimestrielle</FooterLink>
            <FooterLink href="contact.html">Contact direct →</FooterLink>
          </div>
        </div>

        <div style={ftStyles.bottomBand}>
          <span style={ftStyles.copyright}>© 2026 Seedtobloom · Cindy F.</span>
          <div style={ftStyles.legalRow}>
            <a href="#" style={ftStyles.legalLink}>Mentions légales</a>
            <a href="#" style={ftStyles.legalLink}>Confidentialité</a>
            <a href="#" style={ftStyles.legalLink}>CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
