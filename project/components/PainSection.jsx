/* PainSection.jsx — Nuit surface.
   Section problème métier : deux blocs d'audience, pain points, mini-preuve. */

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
    maxWidth: 700,
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
    fontSize: 'clamp(36px, 4.4vw, 62px)',
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
    gap: 24,
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
    fontSize: 28,
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
    gap: 12,
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
    width: 14,
    height: 1,
    background: 'var(--brume)',
    opacity: 0.35,
    flexShrink: 0,
    transform: 'translateY(-4px)',
    display: 'inline-block',
  },
  preuve: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 1.4,
    color: 'var(--brume)',
    margin: 0,
    paddingTop: 20,
    borderTop: '1px solid var(--line-on-nuit)',
  },
  transition: {
    paddingTop: 56,
    borderTop: '1px solid var(--line-on-nuit)',
    fontFamily: 'var(--font-body)',
    fontSize: 20,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    maxWidth: 680,
    margin: '0 auto',
    textAlign: 'center',
  },
  transitionEm: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    color: 'var(--brume)',
  },
};

const PAIN_BLOCS = [
  {
    label: '01 · Structures & équipes',
    title: ['Chargé·es de ', { em: 'communication' }],
    pains: [
      'Les templates deviennent incohérents selon les équipes',
      'Les fichiers sont difficiles à modifier sans aide',
      'Chaque collaborateur adapte les supports différemment',
      'La communication perd en cohérence avec le temps',
    ],
    preuve: '« Des supports beaux ne suffisent pas s\'ils deviennent impossibles à utiliser. »',
  },
  {
    label: '02 · Métiers de bouche',
    title: ['Traiteurs & petites ', { em: 'structures' }],
    pains: [
      'Le site manque de clarté pour les prospects',
      'Les demandes de devis arrivent mal qualifiées',
      'Les visuels sont bricolés faute de temps et d\'outils',
      'L\'image ne reflète pas la qualité réelle du service',
    ],
    preuve: '« Un bon site doit inspirer confiance avant même le premier contact. »',
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
            Une communication belle…<br />
            mais difficile à faire <em style={psStyles.emp}>vivre</em>&nbsp;?
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
              <p style={psStyles.preuve}>{b.preuve}</p>
            </article>
          ))}
        </div>

        <p style={psStyles.transition}>
          Le problème n'est pas votre engagement.
          C'est le manque d'<em style={psStyles.transitionEm}>outils pensés pour votre quotidien</em>.
        </p>
      </div>
    </section>
  );
}

window.PainSection = PainSection;
