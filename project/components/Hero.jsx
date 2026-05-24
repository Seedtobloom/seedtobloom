/* Hero.jsx — Terre surface, editorial split: headline left + halftone portrait right
   Pain points sit as a 3-cell numbered strip below, before the CTAs.
   Composition is DIFFERENT from the existing system mock (which centers the headline). */

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
    minHeight: 'calc(100vh - 96px)',
  },
  left: {
    paddingBottom: 88,
    paddingTop: 56,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
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
    fontSize: 'clamp(44px, 5.6vw, 82px)',
    lineHeight: 1.02,
    letterSpacing: '-0.015em',
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
    maxWidth: 720,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  painStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 0,
    marginTop: 14,
    borderTop: '1px solid var(--line-on-terre)',
    borderBottom: '1px solid var(--line-on-terre)',
  },
  painCell: {
    padding: '20px 22px 20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    borderRight: '1px solid var(--line-on-terre)',
  },
  painCellLast: {
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    paddingLeft: 22,
  },
  painNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 18,
    opacity: 0.65,
  },
  painLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.35,
    color: 'var(--paille)',
  },
  ctaRow: {
    display: 'flex',
    gap: 22,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 14,
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
  // editorial gutter mark behind the portrait
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

const HERO_PAINS = [
  ['01', 'Incohérence des supports'],
  ['02', 'Manque de temps au quotidien'],
  ['03', 'Outils compliqués à faire vivre'],
];

function Hero({ portraitVariant = 'terre', showPainStrip = true }) {
  const portraitSrc = portraitVariant === 'nuit'
    ? 'assets/portrait-halftone-nuit.png'
    : 'assets/portrait-halftone-terre.png';

  return (
    <section style={heroStyles.section} data-screen-label="00 Hero">
      <div style={heroStyles.inner}>
        <div style={heroStyles.left}>
          <p style={heroStyles.surtitle}>
            <span style={heroStyles.surtitleDot} />
            Communication visuelle pensée pour la vraie vie
          </p>
          <h1 style={heroStyles.h1}>
            Votre communication ne devrait pas devenir un <em style={heroStyles.emp}>frein</em> à votre activité.
          </h1>

          {showPainStrip && <div style={heroStyles.painStrip}>
            {HERO_PAINS.map(([n, label], i) => (
              <div key={n} style={i === HERO_PAINS.length - 1 ? heroStyles.painCellLast : heroStyles.painCell}>
                <span style={heroStyles.painNum}>{n}</span>
                <span style={heroStyles.painLabel}>{label}</span>
              </div>
            ))}
          </div>}

          <div style={heroStyles.ctaRow}>
            <a href="#contact" className="btn btn--paille">Parlons de votre projet</a>
            <a href="#realisations" className="btn-ghost">
              Voir les réalisations <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div style={heroStyles.right}>
          <div style={heroStyles.portraitWrap}>
            <img src={portraitSrc} alt="Portrait halftone de Cindy" style={heroStyles.portrait} />
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
