/* PainSection.jsx — Nuit surface. Section problème métier. */

const psStyles = {
  section: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
  },
  head: {
    marginBottom: 72,
    maxWidth: 780,
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
    margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(36px, 4.4vw, 64px)',
    lineHeight: 1.04,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--brume)',
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', fontWeight: 400 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 32,
    marginBottom: 72,
  },
  card: {
    border: '1px solid var(--line-on-nuit)',
    padding: '40px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  cardLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.30em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 26,
    lineHeight: 1.15,
    color: 'var(--brume)',
    margin: 0,
    textWrap: 'balance',
  },
  cardTitleEm: { fontStyle: 'italic', fontWeight: 400 },
  painList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  painItem: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.5,
    color: 'var(--fg-on-nuit-muted)',
    display: 'flex',
    gap: 14,
    alignItems: 'baseline',
  },
  painDash: {
    width: 14, height: 1,
    background: 'var(--brume)', opacity: 0.3,
    flexShrink: 0,
    transform: 'translateY(-4px)',
    display: 'inline-block',
  },
  punchline: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 19,
    lineHeight: 1.4,
    color: 'var(--brume)',
    margin: 0,
    paddingTop: 20,
    borderTop: '1px solid var(--line-on-nuit)',
  },
  transition: {
    paddingTop: 56,
    borderTop: '1px solid var(--line-on-nuit)',
    maxWidth: 760,
    margin: '0 auto',
    textAlign: 'center',
  },
  transitionText: {
    fontFamily: 'var(--font-body)',
    fontSize: 19,
    lineHeight: 1.6,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
  },
  transitionEm: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    color: 'var(--brume)',
    fontWeight: 400,
  },
};

const PAIN_BLOCS = [
  {
    label: '01 · Chargées de communication',
    title: ['Vous passez plus de temps à corriger', { em: " qu'à communiquer." }],
    pains: [
      'Des templates impossibles à utiliser.',
      'Des supports modifiés dans tous les sens.',
      'Une communication qui perd en cohérence à chaque nouvelle version.',
    ],
    punchline: 'Tu passes plus de temps à corriger qu\'à communiquer.',
  },
  {
    label: '02 · Traiteurs & entreprises locales',
    title: ['Des opportunités perdues sans même', { em: " s'en rendre compte." }],
    pains: [
      'Un site bricolé entre deux prestations.',
      'Des informations difficiles à trouver.',
      'Un parcours de commande qui décourage.',
    ],
    punchline: 'Et derrière : des opportunités perdues sans même t\'en rendre compte.',
  },
];

function PainSection() {
  return (
    <section id="probleme" style={psStyles.section} data-screen-label="02 Problème">
      <div style={psStyles.inner}>
        <div style={psStyles.head}>
          <p style={psStyles.eyebrow}>
            <span style={psStyles.eyebrowDot} />Le vrai problème
          </p>
          <h2 style={psStyles.h2}>
            Votre communication ne devrait pas être un <em style={psStyles.emp}>frein</em> au quotidien.
          </h2>
        </div>

        <div style={psStyles.grid}>
          {PAIN_BLOCS.map((b) => (
            <article key={b.label} style={psStyles.card}>
              <span style={psStyles.cardLabel}>{b.label}</span>
              <h3 style={psStyles.cardTitle}>
                {b.title.map((part, i) =>
                  typeof part === 'string'
                    ? <React.Fragment key={i}>{part}</React.Fragment>
                    : <em key={i} style={psStyles.cardTitleEm}>{part.em}</em>
                )}
              </h3>
              <ul style={psStyles.painList}>
                {b.pains.map((pain, i) => (
                  <li key={i} style={psStyles.painItem}>
                    <span style={psStyles.painDash} />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
              <p style={psStyles.punchline}>{b.punchline}</p>
            </article>
          ))}
        </div>

        <div style={psStyles.transition}>
          <p style={psStyles.transitionText}>
            Je crée des identités visuelles, supports et sites pensés pour être{' '}
            <em style={psStyles.transitionEm}>beaux, clairs et réellement utilisables</em>{' '}
            au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
}

window.PainSection = PainSection;
