/* Differenciante.jsx — Terre surface.
   Deux colonnes : ✔ ce que je fais / ✘ ce que j'évite. */

const difStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
  },
  head: {
    marginBottom: 72,
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
    margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(36px, 4.4vw, 62px)',
    lineHeight: 1.04,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--paille)',
    textWrap: 'balance',
    maxWidth: 680,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 0,
    border: '1px solid var(--line-on-terre)',
  },
  col: {
    padding: '48px 44px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  colDivider: {
    borderLeft: '1px solid var(--line-on-terre)',
  },
  colHead: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.30em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    paddingBottom: 12,
    borderBottom: '1px solid var(--line-on-terre)',
    margin: 0,
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  itemPos: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--paille)',
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
  },
  itemNeg: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--fg-on-terre-muted)',
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
  },
  checkPos: {
    color: 'var(--glycine)',
    fontWeight: 600,
    flexShrink: 0,
    fontSize: 14,
    fontFamily: 'var(--font-micro)',
    marginTop: 3,
  },
  checkNeg: {
    color: 'var(--fg-on-terre-muted)',
    flexShrink: 0,
    fontSize: 14,
    fontFamily: 'var(--font-micro)',
    opacity: 0.7,
    marginTop: 3,
  },
};

const POSITIVES = [
  'Des supports faciles à faire vivre par vos équipes',
  'Des fichiers clairs, nommés, documentés',
  'Une cohérence visuelle durable dans le temps',
  'Des choix adaptés à votre réalité terrain',
];

const NEGATIVES = [
  'Des chartes de 80 pages impossibles à appliquer',
  'Des fichiers sources incompréhensibles',
  'Un graphiste déconnecté du terrain et de vos usages',
  'Du design juste pour faire beau — sans penser à l\'usage',
];

function Differenciante() {
  return (
    <section id="differenciante" style={difStyles.section} data-screen-label="07 Différence">
      <div style={difStyles.inner}>
        <div style={difStyles.head}>
          <p style={difStyles.eyebrow}>
            <span style={difStyles.eyebrowDot} />Ce qui nous distingue
          </p>
          <h2 style={difStyles.h2}>
            Une approche simple, <em style={difStyles.emp}>utile</em> et durable.
          </h2>
        </div>

        <div style={difStyles.grid}>
          <div style={difStyles.col}>
            <p style={difStyles.colHead}>Ce que je fais</p>
            <ul style={difStyles.list}>
              {POSITIVES.map((item, i) => (
                <li key={i} style={difStyles.itemPos}>
                  <span style={difStyles.checkPos}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ ...difStyles.col, ...difStyles.colDivider }}>
            <p style={difStyles.colHead}>Ce que j'évite</p>
            <ul style={difStyles.list}>
              {NEGATIVES.map((item, i) => (
                <li key={i} style={difStyles.itemNeg}>
                  <span style={difStyles.checkNeg}>✘</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Differenciante = Differenciante;
