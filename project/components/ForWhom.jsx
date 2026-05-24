/* ForWhom.jsx — Nuit surface, split two-column "Pour qui je travaille".
   Left column: structures engagées. Right column: traiteurs & métiers de bouche.
   Each column is its own bordered card on the Nuit ground. */

const fwStyles = {
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
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56,
    marginBottom: 64,
    alignItems: 'end',
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
    fontSize: 'clamp(36px, 4.2vw, 56px)',
    lineHeight: 1.06,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--brume)',
    maxWidth: 520,
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
    paddingBottom: 8,
    maxWidth: 440,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 32,
  },
  card: {
    position: 'relative',
    border: '1px solid var(--line-on-nuit)',
    padding: '40px 36px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    minHeight: 380,
  },
  cardEyebrow: {
    position: 'absolute',
    top: -9,
    left: 28,
    background: 'var(--nuit)',
    padding: '0 12px',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.30em',
    textTransform: 'uppercase',
    color: 'var(--brume)',
  },
  cardNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 32,
    color: 'var(--brume)',
    opacity: 0.55,
    lineHeight: 1,
    margin: 0,
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 30,
    lineHeight: 1.15,
    color: 'var(--brume)',
    margin: '4px 0 0',
    textWrap: 'balance',
  },
  cardTitleEm: { fontStyle: 'italic', fontWeight: 400 },
  cardBody: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
  },
  needsLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
    margin: '20px 0 0',
  },
  needsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  needsItem: {
    fontFamily: 'var(--font-body)',
    fontSize: 15.5,
    lineHeight: 1.45,
    color: 'var(--brume)',
    display: 'flex',
    gap: 14,
    alignItems: 'baseline',
  },
  bullet: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 14,
    color: 'var(--brume)',
    opacity: 0.5,
    minWidth: 18,
  },
};

const AUDIENCES = [
  {
    eyebrow: '01 · Côté structures',
    num: '01',
    title: ['Structures ', { em: 'engagées' }],
    body: 'Associations, coopératives, projets à mission. Vous avez une équipe motivée mais peu de temps pour faire vivre vos supports.',
    needs: [
      'Cohérence visuelle sans dépendre du graphiste à chaque fois',
      'Outils simples à reprendre, à réimprimer, à dupliquer',
      'Un cadre clair, pas une charte de 80 pages',
    ],
  },
  {
    eyebrow: '02 · Côté food',
    num: '02',
    title: ['Traiteurs & métiers de ', { em: 'bouche' }],
    body: 'Traiteurs, artisans, petites cuisines. Vos cartes bougent, vos prix bougent, vos formats bougent — votre communication doit suivre.',
    needs: [
      'Confiance dès le premier devis envoyé',
      'Clarté sur les prestations, les prix, les délais',
      'Gain de temps : un système, pas du sur-mesure jetable',
    ],
  },
];

function ForWhom() {
  return (
    <section id="pour-qui" style={fwStyles.section} data-screen-label="02 Pour qui">
      <div style={fwStyles.inner}>
        <div style={fwStyles.head}>
          <div>
            <p style={fwStyles.eyebrow}>
              <span style={fwStyles.eyebrowDot} />Pour qui je travaille
            </p>
            <h2 style={fwStyles.h2}>
              Deux types de structures, une même <em style={fwStyles.emp}>exigence</em>.
            </h2>
          </div>
          <p style={fwStyles.intro}>
            Je travaille principalement avec deux familles de clients. Ils n'ont pas le même métier, mais ils partagent les mêmes contraintes : peu de temps, peu d'équipe, beaucoup à raconter.
          </p>
        </div>

        <div style={fwStyles.grid}>
          {AUDIENCES.map((a) => (
            <article key={a.num} style={fwStyles.card}>
              <span style={fwStyles.cardEyebrow}>{a.eyebrow}</span>
              <p style={fwStyles.cardNum}>{a.num}</p>
              <h3 style={fwStyles.cardTitle}>
                {a.title.map((part, i) =>
                  typeof part === 'string'
                    ? <React.Fragment key={i}>{part}</React.Fragment>
                    : <em key={i} style={fwStyles.cardTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={fwStyles.cardBody}>{a.body}</p>
              <p style={fwStyles.needsLabel}>Ce dont vous avez besoin</p>
              <ul style={fwStyles.needsList}>
                {a.needs.map((n, i) => (
                  <li key={i} style={fwStyles.needsItem}>
                    <span style={fwStyles.bullet}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ForWhom = ForWhom;
