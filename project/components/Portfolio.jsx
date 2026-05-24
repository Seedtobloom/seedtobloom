/* Portfolio.jsx — Bone surface, 2x2 editorial grid.
   Composition is intentionally different from the system mock (which uses a horizontal scroll row).
   Each card is a single-column tile: typographic cover (warm gradient + project monogram),
   then italic title, sector, year, and a ghost link. */

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
    gap: 24,
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '64px 56px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
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
    left: 14,
    top: 14,
    bottom: 14,
    width: 22,
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
    padding: '0 28px 22px 0',
  },
  meta: {
    display: 'flex',
    gap: 14,
    fontFamily: 'var(--font-micro)',
    fontSize: 10.5,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
  },
  metaDot: { opacity: 0.4 },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 30,
    lineHeight: 1.12,
    color: 'var(--terre)',
    margin: 0,
    textWrap: 'balance',
  },
  titleEm: { fontStyle: 'italic', fontWeight: 400 },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 15.5,
    lineHeight: 1.5,
    color: 'var(--terre-600)',
    margin: 0,
    maxWidth: 440,
  },
  footer: {
    marginTop: 88,
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
    word: 'identité',
    title: ['Envol ', { em: 'environnement' }],
    sector: 'Structure engagée',
    year: '2025',
    desc: 'Identité visuelle complète et système de supports terrain pour une association environnementale en Hauts-de-France.',
    mono: 'EE',
    bg: 'linear-gradient(140deg, #d6c9a8 0%, #8a7253 55%, #5b432b 100%)',
    accent: 'rgba(228, 209, 254, 0.35)',
  },
  {
    n: '02',
    word: 'menu',
    title: ['Traiteur ', { em: 'Rémy' }],
    sector: 'Traiteur · métiers de bouche',
    year: '2024',
    desc: 'Carte évolutive, étiquettes plats du jour et carte de visite — pensés pour être réimprimés à la semaine sans repartir de zéro.',
    mono: 'TR',
    bg: 'linear-gradient(160deg, #f3e5c1 0%, #c8b290 60%, #856a47 100%)',
    accent: 'rgba(186, 209, 253, 0.30)',
  },
  {
    n: '03',
    word: 'site',
    title: ['Marie ', { em: 'Minchella' }],
    sector: 'Site one-pager · indépendante',
    year: '2025',
    desc: 'Webdesign et rédaction pour une thérapeute indépendante. Maquette simple, ton juste, mise à jour autonome.',
    mono: 'MM',
    bg: 'linear-gradient(135deg, #e4d1fe 0%, #b89bd9 55%, #6c4ea4 100%)',
    accent: 'rgba(242, 229, 194, 0.40)',
  },
  {
    n: '04',
    word: 'archives',
    title: ['Autres ', { em: 'projets' }],
    sector: 'Sélection · 2022 — 2025',
    year: '',
    desc: 'Une douzaine de collaborations plus discrètes : éditions, plaquettes, signalétique, refontes de cartes et chartes graphiques.',
    mono: '+12',
    bg: 'linear-gradient(150deg, #bad1fd 0%, #6f8bc2 55%, #2a3b5a 100%)',
    accent: 'rgba(242, 229, 194, 0.35)',
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
            fontSize: 92,
            lineHeight: 0.85,
            color: 'rgba(255, 250, 239, 0.86)',
            letterSpacing: '-0.02em',
          }}>{project.mono}</span>
        </div>
      </div>

      <div style={portfolioStyles.meta}>
        <span>{project.sector}</span>
        {project.year && <><span style={portfolioStyles.metaDot}>·</span><span>{project.year}</span></>}
      </div>

      <h3 style={portfolioStyles.title}>
        {project.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : <em key={i} style={portfolioStyles.titleEm}>{part.em}</em>
        )}
      </h3>

      <p style={portfolioStyles.desc}>{project.desc}</p>
    </a>
  );
}

function Portfolio() {
  return (
    <section id="realisations" style={portfolioStyles.section} data-screen-label="01 Portfolio">
      <div style={portfolioStyles.inner}>
        <div style={portfolioStyles.head}>
          <div style={portfolioStyles.headLeft}>
            <p style={portfolioStyles.eyebrow}>
              <span style={portfolioStyles.eyebrowDot} />Réalisations sélectionnées
            </p>
            <h2 style={portfolioStyles.h2}>
              Quelques projets <em style={portfolioStyles.emp}>choisis</em>, pour le contexte&nbsp;réel.
            </h2>
          </div>
          <p style={portfolioStyles.headRight}>
            Identités, supports imprimés, sites simples. Toujours pensés pour être réutilisés par les équipes&nbsp;sans moi.
          </p>
        </div>

        <div style={portfolioStyles.grid}>
          {PROJECTS.map(p => <ProjectCard key={p.n} project={p} />)}
        </div>

        <div style={portfolioStyles.footer}>
          <span style={portfolioStyles.footerCount}>04 / 16 projets visibles</span>
          <a href="portfolio.html" className="btn-ghost" style={{ color: 'var(--terre)' }}>
            Voir le portfolio complet <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.Portfolio = Portfolio;
