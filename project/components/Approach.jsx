/* Approach.jsx — Terre surface, vision éditoriale + philosophie éco-responsable + CTA. */

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
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
    gap: 96,
    alignItems: 'start',
  },
  left: {
    position: 'sticky',
    top: 104,
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
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
    margin: 0,
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(32px, 3.8vw, 52px)',
    lineHeight: 1.08,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--paille)',
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  pullQuote: {
    borderLeft: '3px solid var(--glycine)',
    paddingLeft: 28,
    margin: 0,
  },
  pullQuoteText: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontStyle: 'italic',
    fontSize: 'clamp(22px, 2.6vw, 32px)',
    lineHeight: 1.18,
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--fg-on-terre-muted)',
    margin: 0,
  },
  principlesWrap: {
    paddingTop: 28,
    borderTop: '1px solid var(--line-on-terre)',
  },
  principlesLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    margin: '0 0 20px',
  },
  principlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '14px 32px',
  },
  principle: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
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
    fontSize: 15.5,
    lineHeight: 1.4,
    color: 'var(--paille)',
    margin: 0,
  },
};

const PRINCIPLES = [
  'Concevoir pour durer',
  'Simplifier l\'utilisation',
  'Adapter aux équipes',
  'Produire ce qui sera vraiment utilisé',
];

function Approach() {
  return (
    <section id="approche" style={apStyles.section} data-screen-label="06 Approche">
      <div style={apStyles.inner}>
        <div style={apStyles.left}>
          <p style={apStyles.eyebrow}>
            <span style={apStyles.eyebrowDot} />Vision · approche
          </p>
          <h2 style={apStyles.h2}>
            Créer des supports <em style={apStyles.emp}>responsables</em>, oui. Mais surtout adaptés à votre réalité.
          </h2>
          <a href="a-propos.html" className="btn-ghost" style={{ color: 'var(--paille)', alignSelf: 'flex-start' }}>
            Découvrir ma façon de travailler <span className="arrow">→</span>
          </a>
        </div>

        <div style={apStyles.right}>
          <blockquote style={apStyles.pullQuote}>
            <p style={apStyles.pullQuoteText}>
              Je ne crois pas au design parfait. Je crois aux supports qu'on utilise vraiment, qu'on peut faire évoluer, et qui ne mettent pas en difficulté les équipes qui les tiennent.
            </p>
          </blockquote>

          <p style={apStyles.body}>
            « Durable » ne veut pas dire « toujours réutilisable ». Une carte de menu pour un traiteur n'a pas la même vie qu'une plaquette institutionnelle. Chaque support dépend de son contexte : qui le tient, où, quand, combien de fois.
          </p>
          <p style={apStyles.body}>
            Ma vision du design éco-responsable est pragmatique : produire ce qui sera réellement utilisé, dans des formats et des matières qui font sens. Pas un argument vert collé sur un projet calqué d'ailleurs.
          </p>

          <div style={apStyles.principlesWrap}>
            <p style={apStyles.principlesLabel}>Ce que ça veut dire concrètement</p>
            <div style={apStyles.principlesGrid}>
              {PRINCIPLES.map((text, i) => (
                <div key={i} style={apStyles.principle}>
                  <span style={apStyles.principleCheck}>✔</span>
                  <p style={apStyles.principleText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Approach = Approach;
