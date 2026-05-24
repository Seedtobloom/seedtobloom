/* FinalCTA.jsx — Terre surface, a single editorial pull-block with a centered offer.
   Uses a large italic phrase + a calm body line + Glycine button.
   Visual signature: a "07" gutter + rotated "fin" word on the right edge. */

const ctaStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '144px 0 128px',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 32,
    position: 'relative',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    margin: 0,
  },
  eyebrowDot: { width: 28, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(48px, 6.2vw, 92px)',
    lineHeight: 1.0,
    letterSpacing: '-0.015em',
    margin: 0,
    color: 'var(--paille)',
    textWrap: 'balance',
    maxWidth: 940,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  lead: {
    fontFamily: 'var(--font-body)',
    fontSize: 19,
    lineHeight: 1.55,
    color: 'var(--paille)',
    margin: '8px 0 0',
    maxWidth: 540,
  },
  row: {
    marginTop: 22,
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    flexWrap: 'wrap',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  metaTop: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  metaBottom: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--paille)',
  },
  gutter: {
    position: 'absolute',
    right: 16,
    top: 24,
    bottom: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--fg-on-terre-muted)',
    pointerEvents: 'none',
  },
  gutterNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 16,
  },
  gutterWord: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.32em',
    textTransform: 'lowercase',
  },
};

function FinalCTA() {
  return (
    <section id="contact" style={ctaStyles.section} data-screen-label="07 CTA final">
      <div style={ctaStyles.inner}>
        <p style={ctaStyles.eyebrow}>
          <span style={ctaStyles.eyebrowDot} />Et maintenant
        </p>
        <h2 style={ctaStyles.h}>
          Vous avez déjà assez à <em style={ctaStyles.emp}>gérer</em>.
        </h2>
        <p style={ctaStyles.lead}>
          Confiez-moi la partie communication : claire, cohérente, et surtout — finie une bonne fois pour toutes, sans repartir de zéro tous les six mois.
        </p>
        <div style={ctaStyles.row}>
          <a href="contact.html" className="btn btn--glycine" style={{ padding: '18px 32px', fontSize: 12 }}>
            Réserver un appel découverte
          </a>
          <div style={ctaStyles.meta}>
            <span style={ctaStyles.metaTop}>30 minutes · sans engagement</span>
            <span style={ctaStyles.metaBottom}>Disponibilités sous 5 jours</span>
          </div>
        </div>
      </div>
      <div style={ctaStyles.gutter}>
        <span style={ctaStyles.gutterNum}>07</span>
        <span style={ctaStyles.gutterWord}>fin de page</span>
      </div>
    </section>
  );
}

window.FinalCTA = FinalCTA;
