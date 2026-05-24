/* PartenairePage.jsx — full "Partenaire créative" offer page.
   Layout: Hero (Terre) → PourVous (Bone) → Inclus (Nuit)
         → Fonctionnement (Bone) → Réalisations (Terre)
         → Bénéfices (Bone) → Témoignage (Terre) → FAQ (Nuit)
         → CTA (Terre) → Footer (Nuit) */


/* ============================================================
   1 — HERO  (Terre)
   ============================================================ */
const phStyles = {
  section: {
    background: 'var(--terre)', color: 'var(--paille)',
    padding: '88px 0 96px', position: 'relative', overflow: 'hidden',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  crumbs: {
    fontFamily: 'var(--font-micro)', fontSize: 11, letterSpacing: '0.22em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 12, margin: '0 0 56px',
  },
  crumbsDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  crumbsLink: { color: 'inherit', textDecoration: 'none', opacity: 0.8 },
  crumbsSlash: { opacity: 0.4 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
    gap: 80, alignItems: 'end',
  },
  offerEyebrow: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--glycine)', opacity: 0.85,
    margin: '0 0 18px', lineHeight: 1,
  },
  pillRow: { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 },
  pill: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.24em',
    textTransform: 'uppercase', color: 'var(--paille)',
    border: '1px solid var(--line-on-terre)',
    padding: '8px 14px', borderRadius: 999, whiteSpace: 'nowrap',
  },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(40px, 5.2vw, 76px)', lineHeight: 1.03,
    letterSpacing: '-0.015em', color: 'var(--paille)',
    margin: 0, textWrap: 'balance', maxWidth: 760,
  },
  h1Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6,
    color: 'var(--paille)', margin: 0, maxWidth: 440,
  },
  ctaRow: {
    marginTop: 48, display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap',
  },
  metaRow: {
    marginTop: 56, paddingTop: 26, borderTop: '1px solid var(--line-on-terre)',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
  },
  metaCell: { display: 'flex', flexDirection: 'column', gap: 6 },
  metaLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.26em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
  },
  metaValue: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 20, lineHeight: 1.2, color: 'var(--paille)',
  },
};

function PartenaireHero() {
  return (
    <section style={phStyles.section} data-screen-label="00 Hero">
      <div style={phStyles.inner}>
        <p style={phStyles.crumbs}>
          <span style={phStyles.crumbsDot} />
          <a href="index.html" style={phStyles.crumbsLink}>Accueil</a>
          <span style={phStyles.crumbsSlash}>/</span>
          <a href="services.html" style={phStyles.crumbsLink}>Prestations</a>
          <span style={phStyles.crumbsSlash}>/</span>
          <span>Partenaire créative</span>
        </p>

        <div style={phStyles.grid}>
          <div>
            <p style={phStyles.offerEyebrow}>Bloom Partnership</p>
            <div style={phStyles.pillRow}>
              <span style={phStyles.pill}>Offre · 03</span>
              <span style={phStyles.pill}>Partenaire créative</span>
              <span style={phStyles.pill}>Sur devis</span>
            </div>
            <h1 style={phStyles.h1}>
              Une partenaire créative pour faire vivre votre communication sans <em style={phStyles.h1Em}>vous épuiser</em>.
            </h1>
          </div>
          <p style={phStyles.intro}>
            Conçue pour les chargées de communication, PME engagées et structures qui ont besoin de supports réguliers, cette offre vous aide à garder une communication cohérente, fluide et professionnelle grâce à un accompagnement créatif sur le long terme.
          </p>
        </div>

        <div style={phStyles.ctaRow}>
          <a href="contact.html" className="btn btn--paille">Réserver un appel découverte</a>
          <a href="#inclus" className="btn-ghost" style={{ color: 'var(--paille)' }}>Voir ce qui est inclus <span className="arrow">→</span></a>
        </div>

        <div style={phStyles.metaRow}>
          <div style={phStyles.metaCell}>
            <span style={phStyles.metaLabel}>Tarif</span>
            <span style={phStyles.metaValue}>Sur devis</span>
          </div>
          <div style={phStyles.metaCell}>
            <span style={phStyles.metaLabel}>Rythme</span>
            <span style={phStyles.metaValue}>Mensuel ou ponctuel</span>
          </div>
          <div style={phStyles.metaCell}>
            <span style={phStyles.metaLabel}>Modalité</span>
            <span style={phStyles.metaValue}>Distance + visios</span>
          </div>
          <div style={phStyles.metaCell}>
            <span style={phStyles.metaLabel}>Durée</span>
            <span style={phStyles.metaValue}>Long terme</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   2 — C'EST POUR VOUS SI  (Bone)
   ============================================================ */
const pvStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
    gap: 80, alignItems: 'start',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--terre)', textWrap: 'balance', maxWidth: 420,
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6,
    color: 'var(--terre-600)', margin: '24px 0 0', maxWidth: 380,
  },
  listLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--terre-600)',
    margin: '0 0 24px',
  },
  list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' },
  item: {
    display: 'grid', gridTemplateColumns: '52px 1fr',
    alignItems: 'baseline', gap: 20,
    padding: '20px 0', borderTop: '1px solid var(--line-on-bone)',
  },
  itemLast: { borderBottom: '1px solid var(--line-on-bone)' },
  itemNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 18, color: 'var(--terre-400)', opacity: 0.9,
  },
  itemText: {
    fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.45, color: 'var(--terre)', margin: 0,
  },
};

const POUR_VOUS_ITEMS = [
  'Vous perdez un temps fou à gérer vos supports de communication.',
  'Vos équipes modifient les documents et la cohérence visuelle finit par se perdre.',
  'Vous avez besoin de nouveaux supports régulièrement mais pas d\'un recrutement en interne.',
  'Vous voulez une communication professionnelle sans devoir tout superviser.',
  'Vous cherchez quelqu\'un qui comprend vos enjeux et votre fonctionnement sur le long terme.',
];

function PourVous() {
  return (
    <section style={pvStyles.section} data-screen-label="01 Pour vous">
      <div style={pvStyles.inner}>
        <div>
          <p style={pvStyles.eyebrow}>
            <span style={pvStyles.eyebrowDot} />Cette offre est pour vous si
          </p>
          <h2 style={pvStyles.h2}>
            Vous voulez un <em style={pvStyles.h2Em}>relais créatif fiable</em>, sans tout gérer seule.
          </h2>
          <p style={pvStyles.body}>
            Cette offre s'adresse aux structures qui ont déjà posé les bases de leur communication, mais qui ont besoin d'un accompagnement régulier pour la faire vivre sereinement.
          </p>
        </div>
        <div>
          <p style={pvStyles.listLabel}>Vous vous reconnaissez ?</p>
          <ul style={pvStyles.list}>
            {POUR_VOUS_ITEMS.map((text, i) => (
              <li key={i} style={{ ...pvStyles.item, ...(i === POUR_VOUS_ITEMS.length - 1 ? pvStyles.itemLast : null) }}>
                <span style={pvStyles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                <p style={pvStyles.itemText}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   3 — CE QUI EST INCLUS  (Nuit)
   ============================================================ */
const piStyles = {
  section: { background: 'var(--nuit)', color: 'var(--brume)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56, marginBottom: 64, alignItems: 'end',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-nuit-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--brume)', textWrap: 'balance', maxWidth: 500,
  },
  h2Em: { fontStyle: 'italic', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)', margin: 0, paddingBottom: 6, maxWidth: 440,
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 0, border: '1px solid var(--line-on-nuit)',
  },
  cell: {
    padding: '30px 24px 28px',
    borderRight: '1px solid var(--line-on-nuit)',
    borderBottom: '1px solid var(--line-on-nuit)',
    display: 'flex', flexDirection: 'column', gap: 14, minHeight: 180,
  },
  cellNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 20, color: 'var(--brume)', opacity: 0.55, lineHeight: 1,
  },
  cellTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 19, lineHeight: 1.2, color: 'var(--brume)', margin: 0, textWrap: 'balance',
  },
  cellTitleEm: { fontStyle: 'italic', fontWeight: 400 },
  cellBody: {
    fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)', margin: 0,
  },
  summary: {
    marginTop: 48, padding: '32px 36px',
    border: '1px solid var(--line-on-nuit)',
    background: 'rgba(186, 209, 253, 0.04)',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) auto auto',
    gap: 32, alignItems: 'center',
  },
  summaryLabel: {
    position: 'absolute', top: -9, left: 28,
    background: 'var(--nuit)', padding: '0 12px',
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.30em', textTransform: 'uppercase', color: 'var(--brume)',
  },
  summaryText: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
    fontSize: 21, lineHeight: 1.35, color: 'var(--brume)', margin: 0,
  },
  summaryInvest: { display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' },
  investLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.26em',
    textTransform: 'uppercase', color: 'var(--fg-on-nuit-muted)',
  },
  investValue: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--brume)', lineHeight: 1,
  },
};

const INCLUS_PP = [
  { title: ['Création de ', { em: 'supports print & digitaux' }], body: 'Flyers, brochures, supports internes, visuels réseaux sociaux, présentations.' },
  { title: ['Déclinaison de vos ', { em: 'campagnes' }, ' existantes'], body: 'Adaptations de visuels et supports selon vos besoins et calendriers.' },
  { title: ['Création ou optimisation de ', { em: 'templates' }], body: 'Fichiers modifiables pensés pour être facilement repris par vos équipes.' },
  { title: ['Supports pensés pour être ', { em: 'repris en interne' }], body: 'Documentation courte, logique claire, fichiers bien organisés.' },
  { title: ['Ajustements et évolutions ', { em: 'au fil de vos besoins' }], body: 'Je reste disponible pour faire évoluer vos supports sans repartir de zéro.' },
  { title: ['Conseils sur les ', { em: 'choix graphiques' }], body: 'Regard extérieur sur vos supports existants, suggestions d\'amélioration.' },
  { title: ['Veille à la ', { em: 'cohérence globale' }], body: 'Je garde un œil sur l\'ensemble de votre communication pour maintenir la cohérence.' },
  { title: ['Approche ', { em: 'éco-responsable' }], body: 'Formats, matières et volumes adaptés à votre réalité terrain et vos engagements.' },
];

function PartenaireInclus() {
  return (
    <section id="inclus" style={piStyles.section} data-screen-label="02 Inclus">
      <div style={piStyles.inner}>
        <div style={piStyles.head}>
          <div>
            <p style={piStyles.eyebrow}>
              <span style={piStyles.eyebrowDot} />Ce qui est inclus
            </p>
            <h2 style={piStyles.h2}>
              Un accompagnement conçu pour votre <em style={piStyles.h2Em}>réalité quotidienne</em>.
            </h2>
          </div>
          <p style={piStyles.intro}>
            Huit axes d'intervention, adaptés à votre fonctionnement. Vous recevez un accompagnement créatif flexible et pensé pour vos usages réels.
          </p>
        </div>

        <div style={piStyles.grid}>
          {INCLUS_PP.map((it, i) => (
            <article key={i} style={{
              ...piStyles.cell,
              ...(i % 4 === 3 ? { borderRight: 'none' } : null),
              ...(i >= 4 ? { borderBottom: 'none' } : null),
            }}>
              <span style={piStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={piStyles.cellTitle}>
                {it.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={piStyles.cellTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={piStyles.cellBody}>{it.body}</p>
            </article>
          ))}
        </div>

        <div style={piStyles.summary}>
          <span style={piStyles.summaryLabel}>Résumé · paramètres</span>
          <p style={piStyles.summaryText}>
            Une collaboration pensée pour vous faire gagner du temps, garder une image cohérente et alléger votre charge mentale.
          </p>
          <div style={piStyles.summaryInvest}>
            <span style={piStyles.investLabel}>Investissement</span>
            <span style={piStyles.investValue}>Sur devis</span>
          </div>
          <a href="contact.html" className="btn btn--brume">Réserver un appel</a>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   4 — FONCTIONNEMENT  (Bone)
   ============================================================ */
const pfStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    marginBottom: 64,
    display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
    gap: 56, alignItems: 'end',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--terre)', maxWidth: 600, textWrap: 'balance',
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55,
    color: 'var(--terre-600)', margin: 0, maxWidth: 380, paddingBottom: 6,
  },
  steps: {
    display: 'grid', gridTemplateColumns: '1fr',
    borderTop: '1px solid var(--line-on-bone)',
  },
  step: {
    display: 'grid',
    gridTemplateColumns: '120px minmax(0, 1fr) minmax(0, 1.4fr)',
    gap: 40, padding: '40px 0',
    borderBottom: '1px solid var(--line-on-bone)',
    alignItems: 'baseline',
  },
  stepNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 56, lineHeight: 0.9, color: 'var(--terre)', opacity: 0.85,
  },
  stepTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 26, lineHeight: 1.15, color: 'var(--terre)', margin: 0, textWrap: 'balance',
  },
  stepBody: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
    color: 'var(--terre-600)', margin: 0, maxWidth: 540,
  },
};

const PP_STEPS = [
  { title: 'On fait le point sur votre fonctionnement', body: 'Vos outils, vos équipes, vos contraintes, vos supports existants et vos besoins récurrents.' },
  { title: 'On structure une base cohérente', body: 'Templates, règles d\'utilisation, organisation des supports et priorités de communication.' },
  { title: 'Je crée vos supports au fil de vos besoins', body: 'Print, digital, réseaux sociaux, documents internes, présentations, campagnes ou supports événementiels.' },
  { title: 'Vos supports restent simples à utiliser', body: 'Chaque document est pensé pour rester clair, modifiable et cohérent même lorsqu\'il passe entre plusieurs mains.' },
  { title: 'Votre communication évolue sans repartir de zéro', body: 'Vous avez un relais créatif fiable qui connaît déjà votre univers et vos enjeux.' },
];

function PartenaireFonctionnement() {
  return (
    <section style={pfStyles.section} data-screen-label="03 Fonctionnement">
      <div style={pfStyles.inner}>
        <div style={pfStyles.head}>
          <div>
            <p style={pfStyles.eyebrow}>
              <span style={pfStyles.eyebrowDot} />Fonctionnement
            </p>
            <h2 style={pfStyles.h2}>
              Comment ça se passe <em style={pfStyles.h2Em}>concrètement</em>.
            </h2>
          </div>
          <p style={pfStyles.intro}>
            Cinq étapes courtes pour démarrer une collaboration fluide et durable, sans boucles interminables.
          </p>
        </div>

        <div style={pfStyles.steps}>
          {PP_STEPS.map((s, i) => (
            <article key={i} style={pfStyles.step}>
              <span style={pfStyles.stepNum}>0{i + 1}.</span>
              <h3 style={pfStyles.stepTitle}>{s.title}</h3>
              <p style={pfStyles.stepBody}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   5 — RÉALISATIONS  (Terre)
   ============================================================ */
const prStyles = {
  section: { background: 'var(--terre)', color: 'var(--paille)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 56,
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--paille)', maxWidth: 520, textWrap: 'balance',
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 },
  card: {
    display: 'flex', flexDirection: 'column', gap: 18,
    textDecoration: 'none', color: 'inherit',
  },
  thumb: {
    position: 'relative', aspectRatio: '16 / 9',
    overflow: 'hidden', border: '1px solid var(--line-on-terre)',
    transition: 'transform 480ms var(--ease-out-soft)',
  },
  thumbGutter: {
    position: 'absolute', left: 14, top: 14, bottom: 14, width: 22,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    color: 'var(--paille)', opacity: 0.62,
  },
  thumbNum: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14 },
  thumbWord: {
    writingMode: 'vertical-rl', transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)', fontSize: 9.5,
    letterSpacing: '0.30em', textTransform: 'lowercase',
  },
  thumbMono: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
    padding: '0 24px 18px 0',
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
    fontSize: 72, lineHeight: 0.85, letterSpacing: '-0.02em',
    color: 'rgba(255, 250, 239, 0.82)',
  },
  type: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.22em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)', margin: 0,
  },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 24, lineHeight: 1.15, color: 'var(--paille)', margin: 0, textWrap: 'balance',
  },
  titleEm: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
};

const REA_PP = [
  {
    n: '01', word: 'supports', mono: 'EE',
    type: 'Supports internes & templates',
    title: ['Envol ', { em: 'Environnement' }],
    bg: 'linear-gradient(140deg, #d6c9a8 0%, #8a7253 55%, #5b432b 100%)',
    accent: 'rgba(228, 209, 254, 0.32)',
  },
  {
    n: '02', word: 'digital', mono: 'Li',
    type: 'Communication digitale · LinkedIn & newsletters',
    title: ['Supports ', { em: 'digitaux' }],
    bg: 'linear-gradient(160deg, #c9d8f5 0%, #7da2d4 55%, #3b5ea6 100%)',
    accent: 'rgba(186, 209, 253, 0.25)',
  },
  {
    n: '03', word: 'docs', mono: 'Pi',
    type: 'Présentations & documents institutionnels',
    title: ['Documents ', { em: 'institutionnels' }],
    bg: 'linear-gradient(150deg, #e9e3d0 0%, #b5a882 55%, #7a6b4e 100%)',
    accent: 'rgba(242, 229, 194, 0.32)',
  },
  {
    n: '04', word: 'print', mono: 'Év',
    type: 'Supports événementiels & print',
    title: ['Print ', { em: 'événementiel' }],
    bg: 'linear-gradient(135deg, #e4d1fe 0%, #b89bd9 55%, #6c4ea4 100%)',
    accent: 'rgba(228, 209, 254, 0.28)',
  },
];

function ReaCardPP({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="portfolio.html" style={prStyles.card}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}>
      <div style={{ ...prStyles.thumb, transform: hover ? 'translateY(-4px)' : 'translateY(0)' }}>
        <div style={{ position: 'absolute', inset: 0, background: p.bg }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(60% 50% at 30% 35%, ${p.accent} 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />
        <div style={prStyles.thumbGutter}>
          <span style={prStyles.thumbNum}>{p.n}</span>
          <span style={prStyles.thumbWord}>{p.word}</span>
        </div>
        <div style={prStyles.thumbMono}>{p.mono}</div>
      </div>
      <p style={prStyles.type}>{p.type}</p>
      <h3 style={prStyles.title}>
        {p.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : <em key={i} style={prStyles.titleEm}>{part.em}</em>
        )}
      </h3>
    </a>
  );
}

function PartenaireRealisations() {
  return (
    <section style={prStyles.section} data-screen-label="04 Réalisations">
      <div style={prStyles.inner}>
        <div style={prStyles.head}>
          <div>
            <p style={prStyles.eyebrow}>
              <span style={prStyles.eyebrowDot} />Exemples de réalisations
            </p>
            <h2 style={prStyles.h2}>
              Quelques types de supports <em style={prStyles.h2Em}>régulièrement produits</em>.
            </h2>
          </div>
        </div>
        <div style={prStyles.grid}>
          {REA_PP.map(p => <ReaCardPP key={p.n} p={p} />)}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   6 — BÉNÉFICES  (Bone)
   ============================================================ */
const pbStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    marginBottom: 56,
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56, alignItems: 'end',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--terre)', textWrap: 'balance', maxWidth: 540,
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 0, borderTop: '1px solid var(--line-on-bone)',
  },
  cell: {
    display: 'grid', gridTemplateColumns: '52px 1fr',
    gap: 24, padding: '28px 40px 28px 0',
    borderBottom: '1px solid var(--line-on-bone)',
    borderRight: '1px solid var(--line-on-bone)',
    alignItems: 'start',
  },
  cellRight: { paddingLeft: 40, paddingRight: 0, borderRight: 'none' },
  cellNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--terre)', opacity: 0.5, lineHeight: 1, marginTop: 2,
  },
  cellText: {
    fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.45, color: 'var(--terre)', margin: 0,
  },
};

const BENEFICES_PP = [
  'Une communication plus cohérente dans le temps',
  'Des supports réellement utilisables par vos équipes',
  'Moins de charge mentale et de bricolage au quotidien',
  'Une image plus crédible et professionnelle',
  'Un gain de temps sur toute votre production visuelle',
  'Une partenaire créative qui comprend déjà votre fonctionnement',
];

function PartenaireBenefices() {
  return (
    <section style={pbStyles.section} data-screen-label="05 Bénéfices">
      <div style={pbStyles.inner}>
        <div style={pbStyles.head}>
          <div>
            <p style={pbStyles.eyebrow}>
              <span style={pbStyles.eyebrowDot} />Ce que vous gagnez avec cette offre
            </p>
            <h2 style={pbStyles.h2}>
              Six <em style={pbStyles.h2Em}>changements concrets</em> dans votre quotidien.
            </h2>
          </div>
        </div>
        <div style={pbStyles.grid}>
          {BENEFICES_PP.map((text, i) => (
            <div key={i} style={{
              ...pbStyles.cell,
              ...(i % 2 === 1 ? pbStyles.cellRight : null),
              ...(i >= BENEFICES_PP.length - 2 ? { borderBottom: 'none' } : null),
            }}>
              <span style={pbStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <p style={pbStyles.cellText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   7 — TÉMOIGNAGE  (Terre)
   ============================================================ */
const ptStyles = {
  section: {
    background: 'var(--terre)', color: 'var(--paille)',
    padding: '144px 0', position: 'relative', overflow: 'hidden',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: '90px minmax(0, 1fr)',
    gap: 32, alignItems: 'start',
  },
  quoteMark: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 110, lineHeight: 0.75, color: 'var(--glycine)', margin: 0,
  },
  body: { display: 'flex', flexDirection: 'column', gap: 36 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)', margin: 0,
  },
  quote: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
    fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.28, letterSpacing: '-0.008em',
    color: 'var(--paille)', margin: 0, textWrap: 'pretty', maxWidth: 900,
  },
  attribRow: {
    paddingTop: 24, borderTop: '1px solid var(--line-on-terre)',
    display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap',
  },
  name: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--paille)', margin: 0,
  },
  role: {
    fontFamily: 'var(--font-micro)', fontSize: 11, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
  },
};

function PartenaireTemoignage() {
  return (
    <section style={ptStyles.section} data-screen-label="06 Témoignage">
      <div style={ptStyles.inner}>
        <p style={ptStyles.quoteMark}>"</p>
        <div style={ptStyles.body}>
          <p style={ptStyles.eyebrow}>Témoignage · Envol Environnement</p>
          <p style={ptStyles.quote}>
            Ce que j'ai le plus apprécié, c'est sa capacité à comprendre nos contraintes et à créer des supports simples à reprendre par les équipes. Tout est devenu plus fluide et plus cohérent dans notre communication.
          </p>
          <div style={ptStyles.attribRow}>
            <p style={ptStyles.name}>Émilie</p>
            <span style={ptStyles.role}>Chargée de communication · Envol Environnement</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   8 — FAQ  (Nuit)
   ============================================================ */
const pqStyles = {
  section: { background: 'var(--nuit)', color: 'var(--brume)', padding: '128px 0' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 40px' },
  head: { marginBottom: 56 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-nuit-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.06, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--brume)', textWrap: 'balance', maxWidth: 640,
  },
  h2Em: { fontStyle: 'italic', fontWeight: 400 },
  list: { display: 'grid', gap: 14 },
  row: {
    border: '1px solid var(--line-on-nuit)',
    transition: 'border-color 240ms var(--ease-out-soft)',
    overflow: 'hidden',
  },
  qBtn: {
    width: '100%', background: 'none', border: 0, cursor: 'pointer',
    color: 'inherit', textAlign: 'left',
    display: 'grid', gridTemplateColumns: '52px 1fr auto',
    alignItems: 'center', gap: 24, padding: '24px 32px',
    fontFamily: 'inherit',
  },
  qNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 18, color: 'var(--brume)', opacity: 0.55,
  },
  qText: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 20, lineHeight: 1.25, color: 'var(--brume)', margin: 0,
  },
  toggle: {
    width: 28, height: 28, border: '1px solid var(--line-on-nuit)',
    borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--brume)', fontFamily: 'var(--font-micro)', fontSize: 13,
    transition: 'transform 240ms var(--ease-out-soft), background 240ms var(--ease-out-soft)',
  },
  toggleOpen: {
    background: 'var(--brume)', color: 'var(--nuit)', borderColor: 'var(--brume)',
    transform: 'rotate(45deg)',
  },
  aWrap: {
    transition: 'max-height 400ms var(--ease-out-soft), opacity 280ms var(--ease-out-soft)',
    overflow: 'hidden',
  },
  aBody: { padding: '0 32px 24px', paddingLeft: 108 },
  aText: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
    color: 'var(--fg-on-nuit-muted)', margin: 0, maxWidth: 640,
  },
};

const FAQ_PP = [
  {
    q: 'Est-ce que je dois déjà avoir une identité visuelle ?',
    a: 'Non. Mais avoir une base graphique existante permet d\'aller plus vite. Si besoin, nous pouvons aussi retravailler votre identité en amont de la collaboration.',
  },
  {
    q: 'Est-ce que les templates sont modifiables facilement ?',
    a: 'Oui. Les supports sont pensés pour être repris facilement par vos équipes sans casser toute la cohérence visuelle. Je livre des fichiers organisés avec une logique claire.',
  },
  {
    q: 'Travaillez-vous uniquement avec des structures engagées ?',
    a: 'J\'accompagne principalement des structures qui ont une vraie volonté de cohérence et d\'impact positif, sans recherche de perfection irréaliste.',
  },
  {
    q: 'Peut-on travailler ensemble sur le long terme ?',
    a: 'Oui, c\'est même le principe de cette offre. L\'objectif est de construire une collaboration durable et fluide. Vous n\'avez pas à tout réexpliquer à chaque nouveau besoin.',
  },
  {
    q: 'Est-ce que vous gérez aussi le print ?',
    a: 'Oui. Je peux concevoir vos supports imprimés et vous accompagner sur les choix de fabrication les plus cohérents selon vos besoins et vos engagements éco-responsables.',
  },
];

function FaqRowPP({ item, index, open, onToggle }) {
  return (
    <div style={{ ...pqStyles.row, borderColor: open ? 'rgba(186, 209, 253, 0.6)' : 'var(--line-on-nuit)' }}>
      <button type="button" onClick={onToggle} aria-expanded={open} style={pqStyles.qBtn}>
        <span style={pqStyles.qNum}>{String(index + 1).padStart(2, '0')}</span>
        <h3 style={pqStyles.qText}>{item.q}</h3>
        <span style={{ ...pqStyles.toggle, ...(open ? pqStyles.toggleOpen : null) }} aria-hidden="true">+</span>
      </button>
      <div style={{ ...pqStyles.aWrap, maxHeight: open ? 240 : 0, opacity: open ? 1 : 0 }}>
        <div style={pqStyles.aBody}><p style={pqStyles.aText}>{item.a}</p></div>
      </div>
    </div>
  );
}

function PartenaireFaq() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <section style={pqStyles.section} data-screen-label="07 FAQ">
      <div style={pqStyles.inner}>
        <div style={pqStyles.head}>
          <p style={pqStyles.eyebrow}>
            <span style={pqStyles.eyebrowDot} />Vous vous posez peut-être ces questions
          </p>
          <h2 style={pqStyles.h2}>
            Questions <em style={pqStyles.h2Em}>fréquentes</em>.
          </h2>
        </div>
        <div style={pqStyles.list}>
          {FAQ_PP.map((it, i) => (
            <FaqRowPP key={i} item={it} index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   9 — CTA FINAL  (Terre)
   ============================================================ */
const pcStyles = {
  section: {
    background: 'var(--terre)', color: 'var(--paille)',
    padding: '144px 0 128px', position: 'relative', overflow: 'hidden',
    borderTop: '1px solid var(--line-on-terre)',
  },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 40px' },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 12, margin: 0,
  },
  eyebrowDot: { width: 28, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(40px, 5.2vw, 78px)', lineHeight: 1.03, letterSpacing: '-0.015em',
    color: 'var(--paille)', margin: '28px 0 0', textWrap: 'balance', maxWidth: 880,
  },
  hEm: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  lead: {
    fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55,
    color: 'var(--fg-on-terre-muted)', margin: '22px 0 0', maxWidth: 540,
  },
  row: { marginTop: 36, display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' },
  meta: { display: 'flex', flexDirection: 'column', gap: 4 },
  metaTop: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.26em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
  },
  metaBottom: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, color: 'var(--paille)',
  },
};

function PartenaireCta() {
  return (
    <section style={pcStyles.section} data-screen-label="08 CTA">
      <div style={pcStyles.inner}>
        <p style={pcStyles.eyebrow}>
          <span style={pcStyles.eyebrowDot} />Et maintenant
        </p>
        <h2 style={pcStyles.h}>
          Besoin d'une communication plus <em style={pcStyles.hEm}>fluide et simple à faire vivre</em>&nbsp;?
        </h2>
        <p style={pcStyles.lead}>
          Parlons de votre fonctionnement actuel et construisons des supports vraiment adaptés à votre quotidien.
        </p>
        <div style={pcStyles.row}>
          <a href="contact.html" className="btn btn--glycine" style={{ padding: '18px 32px', fontSize: 12 }}>
            Réserver un appel découverte
          </a>
          <div style={pcStyles.meta}>
            <span style={pcStyles.metaTop}>30 minutes · sans engagement</span>
            <span style={pcStyles.metaBottom}>Disponibilités sous 5 jours</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ROOT
   ============================================================ */
function PartenairePage() {
  return (
    <>
      <Header />
      <main>
        <PartenaireHero />
        <PourVous />
        <PartenaireInclus />
        <PartenaireFonctionnement />
        <PartenaireRealisations />
        <PartenaireBenefices />
        <PartenaireTemoignage />
        <PartenaireFaq />
        <PartenaireCta />
      </main>
      <Footer />
    </>
  );
}

window.PartenairePage = PartenairePage;
ReactDOM.createRoot(document.getElementById('root')).render(<PartenairePage />);
