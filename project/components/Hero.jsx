/* Hero.jsx — Terre surface, éditoriale.
   H1 SEO caché + surtitre + titre principal + sous-texte + CTAs + portrait halftone. */

const heroStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    paddingTop: 64,
    paddingBottom: 0,
    overflow: 'hidden',
    position: 'relative',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px 0',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.18fr) minmax(0, 1fr)',
    gap: 56,
    alignItems: 'end',
    minHeight: 'calc(100vh - 72px)',
  },
  left: {
    paddingBottom: 88,
    paddingTop: 56,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
  surtitle: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11.5,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    margin: 0,
  },
  surtitleDot: {
    width: 22, height: 1, background: 'var(--paille)', opacity: 0.55, display: 'inline-block',
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(40px, 5.2vw, 78px)',
    lineHeight: 1.03,
    letterSpacing: '-0.015em',
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
    maxWidth: 680,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--fg-on-terre-muted)',
    margin: 0,
    maxWidth: 500,
  },
  trustStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 0,
    marginTop: 6,
    borderTop: '1px solid var(--line-on-terre)',
    borderBottom: '1px solid var(--line-on-terre)',
  },
  trustCell: {
    padding: '18px 20px 18px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    borderRight: '1px solid var(--line-on-terre)',
  },
  trustCellLast: {
    padding: '18px 0 18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  trustNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    opacity: 0.65,
  },
  trustLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    lineHeight: 1.35,
    color: 'var(--paille)',
  },
  ctaRow: {
    display: 'flex',
    gap: 22,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  right: {
    position: 'relative',
    alignSelf: 'end',
    paddingBottom: 0,
  },
  portraitWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '0.86 / 1',
    maxWidth: 460,
    marginLeft: 'auto',
    overflow: 'hidden',
  },
  portrait: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    display: 'block',
    filter: 'contrast(1.02)',
  },
  gutter: {
    position: 'absolute',
    right: 0,
    top: 24,
    bottom: 24,
    width: 28,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--fg-on-terre-muted)',
  },
  gutterNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 14,
  },
  gutterWord: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.30em',
    textTransform: 'lowercase',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 24,
    right: 40,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
};

const TRUST_ITEMS = [
  ['10+', 'Structures accompagnées'],
  ['Lille', 'et partout en France'],
  ['100%', 'Fichiers livrés, vous êtes autonome'],
];

function Hero({ portraitVariant = 'terre', showTrustStrip = true }) {
  const portraitSrc = portraitVariant === 'nuit'
    ? 'assets/portrait-halftone-nuit.png'
    : 'assets/portrait-halftone-terre.png';

  return (
    <section style={heroStyles.section} data-screen-label="00 Hero">
      <h1 style={heroStyles.srOnly}>Graphiste éco-responsable pour structures engagées</h1>

      <div style={heroStyles.inner}>
        <div style={heroStyles.left}>
          <p style={heroStyles.surtitle}>
            <span style={heroStyles.surtitleDot} />
            Graphiste &amp; partenaire créative basée à Lille
          </p>

          <p style={heroStyles.h1} aria-hidden="true" role="presentation">
            Des supports pensés pour <em style={heroStyles.emp}>durer</em>,
            évoluer et être vraiment utilisés.
          </p>

          <p style={heroStyles.sub}>
            J'aide les structures engagées à créer une communication claire,
            cohérente et facile à faire vivre au quotidien.
          </p>

          {showTrustStrip && (
            <div style={heroStyles.trustStrip}>
              {TRUST_ITEMS.map(([num, label], i) => (
                <div key={i} style={i === TRUST_ITEMS.length - 1 ? heroStyles.trustCellLast : heroStyles.trustCell}>
                  <span style={heroStyles.trustNum}>{num}</span>
                  <span style={heroStyles.trustLabel}>{label}</span>
                </div>
              ))}
            </div>
          )}

          <div style={heroStyles.ctaRow}>
            <a href="#services" className="btn btn--paille">Découvrir mes services</a>
            <a href="#realisations" className="btn-ghost">
              Voir les réalisations <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div style={heroStyles.right}>
          <div style={heroStyles.portraitWrap}>
            <img src={portraitSrc} alt="Portrait de Cindy, graphiste Seed to Bloom" style={heroStyles.portrait} />
          </div>
          <div style={heroStyles.gutter}>
            <span style={heroStyles.gutterNum}>00</span>
            <span style={heroStyles.gutterWord}>accueil</span>
          </div>
        </div>
      </div>

      <div style={heroStyles.scrollHint}>
        <span>↓</span><span>défiler</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
