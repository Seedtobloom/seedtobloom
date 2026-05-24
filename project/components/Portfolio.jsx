/* Portfolio.jsx — Bone surface, 3 projets éditoriaux avec résultats concrets. */

const portfolioStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0 96px',
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
    alignItems: 'end',
    marginBottom: 72,
  },
  headLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
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
    maxWidth: 540,
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  headRight: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--terre-600)',
    margin: 0,
    paddingBottom: 6,
    maxWidth: 420,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px 32px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    textDecoration: 'none',
    color: 'inherit',
  },
  thumbWrap: {
    position: 'relative',
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    borderRadius: 2,
    transition: 'transform 480ms var(--ease-out-soft)',
  },
  thumbGutter: {
    position: 'absolute',
    left: 14, top: 14, bottom: 14, width: 22,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'var(--terre)',
    mixBlendMode: 'multiply',
    opacity: 0.55,
  },
  thumbNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 14,
  },
  thumbWord: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)',
    fontSize: 9.5,
    letterSpacing: '0.30em',
    textTransform: 'lowercase',
  },
  thumbMono: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '0 24px 18px 0',
  },
  type: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
    margin: 0,
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 26,
    lineHeight: 1.15,
    color: 'var(--terre)',
    margin: 0,
    textWrap: 'balance',
  },
  titleEm: { fontStyle: 'italic', fontWeight: 400 },
  result: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--terre-600)',
    margin: 0,
    paddingTop: 10,
    borderTop: '1px solid var(--line-on-bone)',
  },
  footer: {
    marginTop: 72,
    paddingTop: 32,
    borderTop: '1px solid var(--line-on-bone)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  footerCount: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--terre-600)',
  },
};

const PROJECTS = [
  {
    n: '01',
    word: 'supports',
    type: 'Supports de communication & templates internes',
    title: ['Envol ', { em: 'Environnement' }],
    result: 'Une communication plus cohérente et des supports pensés pour être facilement réutilisés par les équipes.',
    mono: 'EE',
    bg: 'linear-gradient(140deg, #d6c9a8 0%, #8a7253 55%, #5b432b 100%)',
    accent: 'rgba(228, 209, 254, 0.35)',
  },
  {
    n: '02',
    word: 'site',
    type: 'Site internet & parcours de commande',
    title: ['Traiteur ', { em: 'Rémy' }],
    result: 'Un site plus clair, plus rassurant et pensé pour faciliter les demandes professionnelles.',
    mono: 'TR',
    bg: 'linear-gradient(160deg, #f3e5c1 0%, #c8b290 60%, #856a47 100%)',
    accent: 'rgba(186, 209, 253, 0.30)',
  },
  {
    n: '03',
    word: 'identité',
    type: 'Identité visuelle éco-responsable',
    title: ['Projet ', { em: 'identité' }],
    result: 'Une image plus crédible et alignée avec les engagements de la marque.',
    mono: 'ID',
    bg: 'linear-gradient(135deg, #e4d1fe 0%, #b89bd9 55%, #6c4ea4 100%)',
    accent: 'rgba(242, 229, 194, 0.40)',
  },
];

function ProjectCard({ project }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="portfolio.html" style={portfolioStyles.card}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}>
      <div style={{
        ...portfolioStyles.thumbWrap,
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: project.bg }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(60% 50% at 30% 35%, ${project.accent} 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />
        <div style={portfolioStyles.thumbGutter}>
          <span style={portfolioStyles.thumbNum}>{project.n}</span>
          <span style={portfolioStyles.thumbWord}>{project.word}</span>
        </div>
        <div style={portfolioStyles.thumbMono}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 80,
            lineHeight: 0.85,
            color: 'rgba(255, 250, 239, 0.86)',
            letterSpacing: '-0.02em',
          }}>{project.mono}</span>
        </div>
      </div>

      <p style={portfolioStyles.type}>{project.type}</p>

      <h3 style={portfolioStyles.title}>
        {project.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : <em key={i} style={portfolioStyles.titleEm}>{part.em}</em>
        )}
      </h3>

      <p style={portfolioStyles.result}>{project.result}</p>
    </a>
  );
}

function Portfolio() {
  return (
    <section id="realisations" style={portfolioStyles.section} data-screen-label="04 Portfolio">
      <div style={portfolioStyles.inner}>
        <div style={portfolioStyles.head}>
          <div style={portfolioStyles.headLeft}>
            <p style={portfolioStyles.eyebrow}>
              <span style={portfolioStyles.eyebrowDot} />Projets sélectionnés
            </p>
            <h2 style={portfolioStyles.h2}>
              Quelques projets conçus pour être <em style={portfolioStyles.emp}>utilisés</em>, pas juste regardés.
            </h2>
          </div>
          <p style={portfolioStyles.headRight}>
            Identités, supports et sites — toujours pensés pour être repris par les équipes sans avoir besoin de moi.
          </p>
        </div>

        <div style={portfolioStyles.grid}>
          {PROJECTS.map(p => <ProjectCard key={p.n} project={p} />)}
        </div>

        <div style={portfolioStyles.footer}>
          <span style={portfolioStyles.footerCount}>03 projets présentés</span>
          <a href="portfolio.html" className="btn-ghost" style={{ color: 'var(--terre)' }}>
            Voir le portfolio complet <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.Portfolio = Portfolio;
