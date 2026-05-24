/* Hero.jsx — Terre surface, éditoriale.
   Surtitre keywords • Titre solution • Sous-texte audience • CTAs • Portrait */

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
    width: 1, height: 1,
    padding: 0, margin: -1,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
  surtitle: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    margin: 0,
    flexWrap: 'wrap',
  },
  surtitleDot: {
    width: 22, height: 1,
    background: 'var(--paille)', opacity: 0.45,
    display: 'inline-block', flexShrink: 0,
  },
  surtitleSep: {
    opacity: 0.32,
    fontStyle: 'normal',
    fontSize: 9,
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(38px, 4.8vw, 72px)',
    lineHeight: 1.05,
    letterSpacing: '-0.015em',
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
    maxWidth: 680,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--fg-on-terre-muted)',
    margin: 0,
    maxWidth: 520,
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
    width: '100%', height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    display: 'block',
    filter: 'contrast(1.02)',
  },
  gutter: {
    position: 'absolute',
    right: 0, top: 24, bottom: 24, width: 28,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--fg-on-terre-muted)',
  },
  gutterNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic', fontSize: 14,
  },
  gutterWord: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)',
    fontSize: 10, letterSpacing: '0.30em',
    textTransform: 'lowercase',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 24, right: 40,
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-micro)',
    fontSize: 10, letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
};

const SURTITLE_ITEMS = [
  'Graphiste éco-responsable',
  'Identité visuelle',
  'Supports de communication',
  'Webdesign',
];

function Hero({ portraitVariant = 'terre' }) {
  const portraitSrc = portraitVariant === 'nuit'
    ? 'assets/portrait-halftone-nuit.png'
    : 'assets/portrait-halftone-terre.png';

  return (
    <section style={heroStyles.section} data-screen-label="00 Hero">
      <span style={heroStyles.srOnly}>Graphiste éco-responsable pour structures engagées — Lille</span>

      <div style={heroStyles.inner}>
        <div style={heroStyles.left}>
          <p style={heroStyles.surtitle}>
            <span style={heroStyles.surtitleDot} />
            {SURTITLE_ITEMS.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={heroStyles.surtitleSep}>&nbsp;•&nbsp;</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </p>

          <h1 style={heroStyles.h1}>
            J'aide les structures engagées à construire une communication{' '}
            <em style={heroStyles.emp}>claire, cohérente</em>{' '}
            et facile à faire vivre.
          </h1>

          <p style={heroStyles.sub}>
            Pour les chargées de communication, PME engagées et traiteurs locaux qui veulent des supports beaux, utiles et pensés pour la vraie vie.
          </p>

          <div style={heroStyles.ctaRow}>
            <a href="#prestations" className="btn btn--paille">Découvrir mes prestations</a>
            <a href="#realisations" className="btn-ghost">
              Voir les projets <span className="arrow">→</span>
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
