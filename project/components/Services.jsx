/* Services.jsx — Bone surface, 3-column service pillars on a numbered grid.
   Each pillar is a parchment card with a numeral, italic title, body, and 3 deliverables. */

const svStyles = {
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
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
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
    maxWidth: 580,
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--terre-600)',
    margin: 0,
    paddingBottom: 6,
    maxWidth: 440,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    alignItems: 'stretch',
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--line-on-bone)',
    padding: '36px 32px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    minHeight: 480,
    transition: 'transform 320ms var(--ease-out-soft), box-shadow 320ms var(--ease-out-soft)',
  },
  topRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
  },
  num: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 38,
    color: 'var(--terre)',
    opacity: 0.85,
    lineHeight: 1,
  },
  tag: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 28,
    lineHeight: 1.12,
    margin: '0',
    color: 'var(--terre)',
    textWrap: 'balance',
  },
  titleEm: { fontStyle: 'italic', fontWeight: 400, color: 'var(--glycine-900)' },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 15.5,
    lineHeight: 1.5,
    color: 'var(--terre-600)',
    margin: 0,
  },
  divider: {
    margin: '6px 0',
    borderTop: '1px solid var(--line-on-bone)',
  },
  delivLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
    margin: 0,
  },
  delivList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  delivItem: {
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    lineHeight: 1.4,
    color: 'var(--terre)',
    display: 'flex',
    gap: 12,
    alignItems: 'baseline',
  },
  delivBullet: {
    width: 14,
    height: 1,
    background: 'var(--terre-400)',
    display: 'inline-block',
    transform: 'translateY(-4px)',
    flexShrink: 0,
  },
  cardFooter: {
    marginTop: 'auto',
    paddingTop: 18,
  },
};

const SERVICES = [
  {
    n: '01',
    tag: 'identité visuelle éco-responsable',
    href: 'identite-visuelle.html',
    cta: 'Découvrir l\'offre',
    title: ['Identité ', { em: 'visuelle' }],
    body: 'Créer une image claire, crédible et cohérente qui reflète réellement vos valeurs — et que vos équipes arrivent à faire vivre.',
    deliv: [
      'Logo, palette, typographie',
      'Charte courte (10 pages max)',
      'Templates Canva ou InDesign',
    ],
  },
  {
    n: '02',
    tag: 'supports de communication',
    href: 'supports-de-communication.html',
    cta: 'Voir les supports',
    title: ['Supports de ', { em: 'communication' }],
    body: 'Des supports beaux, structurés et faciles à utiliser par vos équipes au quotidien — print, digital, signalétique.',
    deliv: [
      'Cartes, flyers, plaquettes, kakémonos',
      'Cartes de menus, étiquettes, devis',
      'Webdesign one-pager ou Showit',
    ],
  },
  {
    n: '03',
    tag: 'partenaire créative · accompagnement',
    href: 'services.html#partenaire',
    cta: 'En savoir plus',
    title: ['Partenaire ', { em: 'créative' }],
    body: 'Un accompagnement long terme pour faire évoluer votre communication sans perdre en cohérence.',
    deliv: [
      '4 à 8 heures par mois',
      'Réunion stratégique trimestrielle',
      'Accès direct par téléphone et email',
    ],
  },
];

function ServiceCard({ s }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      style={{
        ...svStyles.card,
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? 'var(--shadow-2)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={svStyles.topRow}>
        <span style={svStyles.num}>{s.n}</span>
        <span style={svStyles.tag}>{s.tag}</span>
      </div>
      <h3 style={svStyles.title}>
        {s.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : <em key={i} style={svStyles.titleEm}>{part.em}</em>
        )}
      </h3>
      <p style={svStyles.body}>{s.body}</p>
      <div style={svStyles.divider} />
      <p style={svStyles.delivLabel}>Ce que vous recevez</p>
      <ul style={svStyles.delivList}>
        {s.deliv.map((d, i) => (
          <li key={i} style={svStyles.delivItem}>
            <span style={svStyles.delivBullet} />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <div style={svStyles.cardFooter}>
        <a href={s.href || 'services.html'} className="btn-ghost" style={{ color: 'var(--terre)' }}>
          {s.cta || 'En savoir plus'} <span className="arrow">→</span>
        </a>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section id="services" style={svStyles.section} data-screen-label="03 Services">
      <div style={svStyles.inner}>
        <div style={svStyles.head}>
          <div>
            <p style={svStyles.eyebrow}>
              <span style={svStyles.eyebrowDot} />Services
            </p>
            <h2 style={svStyles.h2}>
              Trois manières de travailler <em style={svStyles.emp}>ensemble</em>.
            </h2>
          </div>
          <p style={svStyles.intro}>
            Du projet ponctuel à l'accompagnement long terme. À chaque fois, l'idée est la même : vous rendre autonome plutôt que dépendant.
          </p>
        </div>

        <div style={svStyles.grid}>
          {SERVICES.map(s => <ServiceCard key={s.n} s={s} />)}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
