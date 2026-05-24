/* Testimonials.jsx — Bone surface, three parchment quote cards staggered like editorial side-quotes.
   Each card holds: an italic quote, the client's name + role, and a small "voir le projet" link.
   The middle card is intentionally lifted to create vertical rhythm (editorial composition). */

const tmStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 40,
    marginBottom: 72,
    flexWrap: 'wrap',
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
    margin: '0 0 22px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(36px, 4.4vw, 60px)',
    lineHeight: 1.05,
    letterSpacing: '-0.012em',
    margin: 0,
    color: 'var(--terre)',
    maxWidth: 600,
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  counter: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--terre-600)',
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 28,
    alignItems: 'start',
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--line-on-bone)',
    padding: '36px 32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
    minHeight: 380,
    position: 'relative',
  },
  cardMid: {
    transform: 'translateY(36px)',
  },
  quoteMark: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 64,
    color: 'var(--glycine-900)',
    lineHeight: 0.6,
    height: 32,
    margin: 0,
    opacity: 0.85,
  },
  quote: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: 22,
    lineHeight: 1.3,
    color: 'var(--terre)',
    margin: 0,
    textWrap: 'pretty',
  },
  meta: {
    marginTop: 'auto',
    paddingTop: 22,
    borderTop: '1px solid var(--line-on-bone)',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    alignItems: 'end',
    gap: 16,
  },
  metaLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    minWidth: 0,
  },
  metaName: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--terre)',
  },
  metaRole: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
  },
  metaLink: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--terre)',
    textDecoration: 'none',
    paddingBottom: 3,
    borderBottom: '1px solid var(--terre)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
};

const TESTIMONIALS = [
  {
    n: '01',
    quote: 'Cindy a pris le temps de comprendre comment on travaille sur le terrain avant de proposer quoi que ce soit. On a enfin des supports qu\'on peut tenir dans le temps.',
    name: 'Léa M.',
    role: 'Envol environnement',
    project: 'Voir le projet',
  },
  {
    n: '02',
    quote: 'Elle écrit comme on parle. Mes clients comprennent ma carte sans que je l\'explique. C\'est la première fois.',
    name: 'Rémy B.',
    role: 'Traiteur · Lille',
    project: 'Voir le projet',
  },
  {
    n: '03',
    quote: 'Ce que j\'ai apprécié : pas de discours sur le branding. Des questions simples, des choix justes, un site qui me ressemble vraiment.',
    name: 'Marie Minchella',
    role: 'Thérapeute indépendante',
    project: 'Voir le projet',
  },
];

function Testimonials() {
  return (
    <section id="temoignages" style={tmStyles.section} data-screen-label="05 Témoignages">
      <div style={tmStyles.inner}>
        <div style={tmStyles.head}>
          <div>
            <p style={tmStyles.eyebrow}>
              <span style={tmStyles.eyebrowDot} />Témoignages
            </p>
            <h2 style={tmStyles.h2}>
              Ce qu'en disent celles et ceux <em style={tmStyles.emp}>avec qui</em> j'ai travaillé.
            </h2>
          </div>
          <span style={tmStyles.counter}>03 / 12 avis</span>
        </div>

        <div style={tmStyles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <article key={t.n} style={{ ...tmStyles.card, ...(i === 1 ? tmStyles.cardMid : null) }}>
              <span style={tmStyles.quoteMark}>“</span>
              <p style={tmStyles.quote}>{t.quote}</p>
              <div style={tmStyles.meta}>
                <div style={tmStyles.metaLeft}>
                  <span style={tmStyles.metaName}>{t.name}</span>
                  <span style={tmStyles.metaRole}>{t.role}</span>
                </div>
                <a href="portfolio.html" style={tmStyles.metaLink}>{t.project} →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
