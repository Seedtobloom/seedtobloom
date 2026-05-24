/* AboutShort.jsx — Bone surface.
   Version courte de l'À propos : positionnement, angle de différenciation, CTA. */

const asStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
    gap: 88,
    alignItems: 'start',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    position: 'sticky',
    top: 120,
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    margin: 0,
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(36px, 4.4vw, 60px)',
    lineHeight: 1.04,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--terre)',
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'var(--terre)',
    margin: 0,
  },
  bodyMuted: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'var(--terre-600)',
    margin: 0,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    borderTop: '1px solid var(--line-on-bone)',
    paddingTop: 4,
  },
  quality: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
    gap: 18,
    padding: '22px 0',
    borderBottom: '1px solid var(--line-on-bone)',
    alignItems: 'baseline',
  },
  qualityNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 18,
    color: 'var(--terre-400)',
    lineHeight: 1,
  },
  qualityText: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--terre)',
    margin: 0,
  },
};

const QUALITIES = [
  'Une partenaire fiable, pas juste une prestataire',
  'Une graphiste stratégique qui comprend vos usages réels',
  'Une vision ancrée dans les contraintes du terrain',
  'Des livraisons claires et des échanges directs, sans intermédiaire',
];

function AboutShort() {
  return (
    <section id="a-propos-court" style={asStyles.section} data-screen-label="11 À propos">
      <div style={asStyles.inner}>
        <div style={asStyles.left}>
          <p style={asStyles.eyebrow}>
            <span style={asStyles.eyebrowDot} />À propos
          </p>
          <h2 style={asStyles.h2}>
            Créer du beau qui reste <em style={asStyles.emp}>utilisable</em>.
          </h2>
          <p style={asStyles.body}>
            Je ne suis pas une artiste qui crée de jolies choses. Je suis une partenaire de communication qui comprend les contraintes du terrain, les équipes qui changent et les budgets qui ne sont pas extensibles.
          </p>
          <p style={asStyles.bodyMuted}>
            Mon travail, c'est de vous rendre autonome. Pas de vous rendre dépendant d'un graphiste à chaque modification.
          </p>
          <a href="a-propos.html" className="btn-ghost" style={{ color: 'var(--terre)', marginTop: 8 }}>
            En savoir plus <span className="arrow">→</span>
          </a>
        </div>

        <div style={asStyles.right}>
          {QUALITIES.map((q, i) => (
            <div key={i} style={asStyles.quality}>
              <span style={asStyles.qualityNum}>{String(i + 1).padStart(2, '0')}</span>
              <p style={asStyles.qualityText}>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AboutShort = AboutShort;
