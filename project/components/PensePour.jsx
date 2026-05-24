/* PensePour.jsx — Nuit surface, follows Services section.
   Liste d'audiences : à qui s'adresse concrètement cette offre. */

const ppStyles = {
  section: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '96px 0',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)',
    gap: 80,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    margin: 0,
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)',
    lineHeight: 1.08,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--brume)',
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', fontWeight: 400 },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
    maxWidth: 380,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid var(--line-on-nuit)',
  },
  item: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 20,
    padding: '18px 0',
    borderBottom: '1px solid var(--line-on-nuit)',
  },
  itemNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--brume)',
    opacity: 0.45,
    minWidth: 32,
    flexShrink: 0,
  },
  itemText: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--brume)',
    margin: 0,
  },
};

const PENSE_POUR = [
  'Les équipes qui manquent de temps au quotidien',
  'Les structures avec plusieurs collaborateurs qui utilisent les mêmes supports',
  'Les marques engagées qui cherchent des solutions réalistes et durables',
  'Les traiteurs et artisans qui veulent inspirer confiance en ligne',
  'Les organisations qui veulent simplifier leur communication sans tout refaire',
];

function PensePour() {
  return (
    <section id="pense-pour" style={ppStyles.section} data-screen-label="05 Pensé pour">
      <div style={ppStyles.inner}>
        <div style={ppStyles.left}>
          <p style={ppStyles.eyebrow}>
            <span style={ppStyles.eyebrowDot} />Audience
          </p>
          <h2 style={ppStyles.h2}>
            Pensé <em style={ppStyles.emp}>pour…</em>
          </h2>
          <p style={ppStyles.body}>
            Pas de client idéal sur mesure. Juste des situations réelles que je connais bien.
          </p>
        </div>
        <div style={ppStyles.list}>
          {PENSE_POUR.map((text, i) => (
            <div key={i} style={ppStyles.item}>
              <span style={ppStyles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
              <p style={ppStyles.itemText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PensePour = PensePour;
