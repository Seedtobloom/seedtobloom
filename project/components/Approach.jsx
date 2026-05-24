/* Approach.jsx — Terre surface, citation éditoriale + philosophie + mini principes. */

const apStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '128px 0',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
    gap: 80,
    alignItems: 'start',
  },
  left: {
    position: 'relative',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    margin: '0 0 40px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  quote: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontStyle: 'italic',
    fontSize: 'clamp(36px, 4.8vw, 72px)',
    lineHeight: 1.06,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--paille)',
    textWrap: 'balance',
  },
  quoteAccent: { color: 'var(--glycine)' },
  quoteAttribution: {
    marginTop: 32,
    paddingTop: 18,
    borderTop: '1px solid var(--line-on-terre)',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    maxWidth: 360,
  },
  attribLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  attribName: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--paille)',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    paddingTop: 56,
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--paille)',
    margin: 0,
  },
  bodyMuted: { color: 'var(--fg-on-terre-muted)' },
  visionFrame: {
    position: 'relative',
    border: '1px solid var(--line-on-terre)',
    padding: '28px 28px 26px',
    marginTop: 4,
  },
  visionLabel: {
    position: 'absolute',
    top: -9,
    left: 22,
    background: 'var(--terre)',
    padding: '0 12px',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.30em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
  },
  visionText: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 22,
    lineHeight: 1.3,
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
  },
  principlesWrap: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
    marginTop: 80,
    paddingTop: 48,
    borderTop: '1px solid var(--line-on-terre)',
  },
  principlesLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    margin: '0 0 28px',
  },
  principlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 0,
  },
  principle: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    paddingRight: 32,
    borderRight: '1px solid var(--line-on-terre)',
    paddingLeft: 0,
  },
  principleFirst: {
    paddingLeft: 0,
    borderLeft: 'none',
  },
  principleLast: {
    paddingRight: 0,
    borderRight: 'none',
    paddingLeft: 32,
  },
  principleCheck: {
    color: 'var(--glycine)',
    fontFamily: 'var(--font-micro)',
    fontSize: 13,
    fontWeight: 600,
    flexShrink: 0,
    marginTop: 2,
  },
  principleText: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.45,
    color: 'var(--paille)',
    margin: 0,
  },
};

const PRINCIPLES = [
  'Concevoir pour durer',
  'Simplifier l\'utilisation',
  'Adapter aux équipes',
  'Créer des supports réellement utiles',
];

function Approach() {
  return (
    <section id="approche" style={apStyles.section} data-screen-label="03 Approche">
      <div style={apStyles.inner}>
        <div style={apStyles.left}>
          <p style={apStyles.eyebrow}>
            <span style={apStyles.eyebrowDot} />Approche · philosophie
          </p>
          <h2 style={apStyles.quote}>
            Je ne crois pas aux <span style={apStyles.quoteAccent}>solutions parfaites</span>.<br />
            Je crois aux choix cohérents avec vos usages et votre réalité.
          </h2>
          <div style={apStyles.quoteAttribution}>
            <span style={apStyles.attribLabel}>Note · 2025</span>
            <span style={apStyles.attribName}>Cindy, Seed to Bloom</span>
          </div>
        </div>

        <div style={apStyles.right}>
          <p style={apStyles.body}>
            « Durable » ne veut pas dire « toujours réutilisable ». Une carte de menu pour un traiteur n'a pas la même vie qu'une plaquette institutionnelle. Chaque support dépend de son contexte : qui le tient, où, quand, combien de fois.
          </p>
          <p style={{ ...apStyles.body, ...apStyles.bodyMuted }}>
            Ma vision du design éco-responsable est pragmatique : produire ce qui sera réellement utilisé, dans des formats et des matières qui font sens. Pas un argument vert collé sur un projet calqué d'ailleurs.
          </p>
          <div style={apStyles.visionFrame}>
            <span style={apStyles.visionLabel}>Vision</span>
            <p style={apStyles.visionText}>
              Une communication pragmatique, utile, et qui ne pèse pas sur celles et ceux qui la font vivre.
            </p>
          </div>
        </div>
      </div>

      <div style={apStyles.principlesWrap}>
        <p style={apStyles.principlesLabel}>Mini principes</p>
        <div style={apStyles.principlesGrid}>
          {PRINCIPLES.map((text, i) => (
            <div key={i} style={{
              ...apStyles.principle,
              ...(i === 0 ? apStyles.principleFirst : {}),
              ...(i === PRINCIPLES.length - 1 ? apStyles.principleLast : {}),
              ...(i > 0 && i < PRINCIPLES.length - 1 ? { paddingLeft: 32 } : {}),
            }}>
              <span style={apStyles.principleCheck}>✔</span>
              <p style={apStyles.principleText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Approach = Approach;
