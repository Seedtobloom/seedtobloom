/* IdentitePage.jsx — full "Identité visuelle" offer page composition.
   Layout: Hero (Terre) → Pour toi (Bone) → Inclus + Résumé (Nuit)
         → Fonctionnement (Bone) → Réalisations (Terre)
         → Bénéfices (Bone) → Témoignage (Terre) → FAQ (Nuit)
         → CTA (Terre — reuses FinalCTA) → Footer (Nuit)

   Voice: tutoiement (per user-supplied brief).
   The page reuses Header/FinalCTA/Footer from the homepage components folder. */


/* ============================================================
   1 — HERO  (Terre)
   ============================================================ */
const ihStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
  },
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
    gap: 80,
    alignItems: 'end',
  },
  offerEyebrow: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 22,
    color: 'var(--glycine)',
    opacity: 0.85,
    margin: '0 0 18px',
    lineHeight: 1,
  },
  pillRow: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 36,
  },
  pill: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: 'var(--paille)',
    border: '1px solid var(--line-on-terre)',
    padding: '8px 14px',
    borderRadius: 999,
    whiteSpace: 'nowrap',
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(44px, 5.6vw, 82px)',
    lineHeight: 1.02,
    letterSpacing: '-0.015em',
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
    maxWidth: 760,
  },
  h1Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    lineHeight: 1.6,
    color: 'var(--paille)',
    margin: 0,
    paddingBottom: 4,
    maxWidth: 460,
  },
  ctaRow: {
    marginTop: 48,
    display: 'flex',
    alignItems: 'center',
    gap: 26,
    flexWrap: 'wrap',
  },
  metaRow: {
    marginTop: 56,
    paddingTop: 26,
    borderTop: '1px solid var(--line-on-terre)',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 32,
  },
  metaCell: { display: 'flex', flexDirection: 'column', gap: 6 },
  metaLabel: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  metaValue: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 22,
    lineHeight: 1.2,
    color: 'var(--paille)',
  },
};

function IdentiteHero() {
  return (
    <section style={ihStyles.section} data-screen-label="00 Hero">
      <div style={ihStyles.inner}>
        <p style={ihStyles.crumbs}>
          <span style={ihStyles.crumbsDot} />
          <a href="index.html" style={ihStyles.crumbsLink}>Accueil</a>
          <span style={ihStyles.crumbsSlash}>/</span>
          <a href="services.html" style={ihStyles.crumbsLink}>Services</a>
          <span style={ihStyles.crumbsSlash}>/</span>
          <span>Identité visuelle</span>
        </p>

        <div style={ihStyles.grid}>
          <div>
            <p style={ihStyles.offerEyebrow}>Seed to Brand</p>
            <div style={ihStyles.pillRow}>
              <span style={ihStyles.pill}>Offre · 01</span>
              <span style={ihStyles.pill}>Identité visuelle</span>
              <span style={ihStyles.pill}>4 à 6 semaines</span>
            </div>
            <h1 style={ihStyles.h1}>
              Une identité visuelle pensée pour fonctionner dans la <em style={ihStyles.h1Em}>vraie vie</em>.
            </h1>
          </div>

          <p style={ihStyles.intro}>
            Conçue pour les structures engagées, PME et traiteurs qui veulent une image claire, cohérente et crédible. Une approche pragmatique, pensée selon tes usages réels.
          </p>
        </div>

        <div style={ihStyles.ctaRow}>
          <a href="contact.html" className="btn btn--paille">Réserver un appel découverte</a>
          <a href="#inclus" className="btn-ghost">Voir ce qui est inclus <span className="arrow">→</span></a>
        </div>

        <div style={ihStyles.metaRow}>
          <div style={ihStyles.metaCell}>
            <span style={ihStyles.metaLabel}>Durée</span>
            <span style={ihStyles.metaValue}>4 à 6 semaines</span>
          </div>
          <div style={ihStyles.metaCell}>
            <span style={ihStyles.metaLabel}>Tarif</span>
            <span style={ihStyles.metaValue}>à partir de XXXX € HT</span>
          </div>
          <div style={ihStyles.metaCell}>
            <span style={ihStyles.metaLabel}>Paiement</span>
            <span style={ihStyles.metaValue}>en plusieurs fois possible</span>
          </div>
          <div style={ihStyles.metaCell}>
            <span style={ihStyles.metaLabel}>Modalité</span>
            <span style={ihStyles.metaValue}>distance + visios ciblées</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   2 — POUR TOI  (Bone)
   ============================================================ */
const itStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
    gap: 80,
    alignItems: 'start',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.05,
    letterSpacing: '-0.012em', margin: 0, color: 'var(--terre)',
    textWrap: 'balance',
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
  list: {
    listStyle: 'none', margin: 0, padding: 0,
    display: 'flex', flexDirection: 'column',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '52px 1fr',
    alignItems: 'baseline',
    gap: 20,
    padding: '20px 0',
    borderTop: '1px solid var(--line-on-bone)',
  },
  itemLast: { borderBottom: '1px solid var(--line-on-bone)' },
  itemNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 18, color: 'var(--terre-400)', opacity: 0.9,
  },
  itemText: {
    fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.45,
    color: 'var(--terre)', margin: 0,
  },
  itemEm: { fontStyle: 'italic', color: 'var(--glycine-900)' },
};

const POUR_TOI_ITEMS = [
  { text: ['Tu as une image qui ', { em: 'manque de cohérence' }, ' selon les supports.'] },
  { text: ['Tu passes trop de temps à refaire ou corriger des visuels.'] },
  { text: ['Tu veux une identité ', { em: 'professionnelle' }, ' sans créer une usine à gaz impossible à utiliser.'] },
  { text: ['Tu as besoin d\'outils ', { em: 'simples à faire évoluer' }, ' dans le temps.'] },
  { text: ['Tu veux une communication plus crédible et plus alignée avec ce que tu proposes réellement.'] },
];

function PourToi() {
  return (
    <section style={itStyles.section} data-screen-label="01 Pour toi">
      <div style={itStyles.inner}>
        <div>
          <p style={itStyles.eyebrow}>
            <span style={itStyles.eyebrowDot} />Cette offre est pour toi si
          </p>
          <h2 style={itStyles.h2}>
            Tu veux poser un <em style={itStyles.h2Em}>cadre clair</em>, et arrêter de bricoler.
          </h2>
          <p style={itStyles.body}>
            Cette offre s'adresse aux structures qui veulent une identité utile, pas juste belle. Un système qui tient dans le temps, même quand plusieurs personnes utilisent les supports.
          </p>
        </div>

        <div>
          <p style={itStyles.listLabel}>Tu te reconnais&nbsp;?</p>
          <ul style={itStyles.list}>
            {POUR_TOI_ITEMS.map((it, i) => (
              <li
                key={i}
                style={{
                  ...itStyles.item,
                  ...(i === POUR_TOI_ITEMS.length - 1 ? itStyles.itemLast : null),
                }}
              >
                <span style={itStyles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                <p style={itStyles.itemText}>
                  {it.text.map((part, j) =>
                    typeof part === 'string'
                      ? <React.Fragment key={j}>{part}</React.Fragment>
                      : <em key={j} style={itStyles.itemEm}>{part.em}</em>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   3 — CE QUI EST INCLUS + RÉSUMÉ  (Nuit)
   ============================================================ */
const inStyles = {
  section: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '128px 0',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
  },
  head: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56,
    marginBottom: 64,
    alignItems: 'end',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.06, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--brume)', textWrap: 'balance', maxWidth: 500,
  },
  h2Em: { fontStyle: 'italic', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)', margin: 0, paddingBottom: 6, maxWidth: 440,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 0,
    border: '1px solid var(--line-on-nuit)',
  },
  cell: {
    padding: '32px 28px 30px',
    borderRight: '1px solid var(--line-on-nuit)',
    borderBottom: '1px solid var(--line-on-nuit)',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    minHeight: 200,
  },
  cellNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--brume)', opacity: 0.55, lineHeight: 1,
  },
  cellTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 22, lineHeight: 1.15, color: 'var(--brume)', margin: 0,
    textWrap: 'balance',
  },
  cellTitleEm: { fontStyle: 'italic', fontWeight: 400 },
  cellBody: {
    fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)', margin: 0,
  },
  summary: {
    marginTop: 56,
    padding: '32px 36px',
    border: '1px solid var(--line-on-nuit)',
    background: 'rgba(186, 209, 253, 0.04)',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) auto auto',
    gap: 32,
    alignItems: 'center',
  },
  summaryLabel: {
    position: 'absolute', top: -9, left: 28,
    background: 'var(--nuit)', padding: '0 12px',
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.30em', textTransform: 'uppercase', color: 'var(--brume)',
  },
  summaryText: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
    fontSize: 22, lineHeight: 1.3, color: 'var(--brume)', margin: 0, maxWidth: 600,
  },
  summaryPrice: {
    display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end',
  },
  priceLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10,
    letterSpacing: '0.26em', textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
  },
  priceValue: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 26, color: 'var(--brume)', lineHeight: 1,
  },
};

const INCLUS_ITEMS = [
  { title: ['Appel ', { em: 'stratégique' }],            body: 'Cadrage du projet, contexte, contraintes et usages réels.' },
  { title: ['Direction créative ', { em: 'sur-mesure' }], body: 'Une piste graphique alignée avec ton positionnement, pas trois variations interchangeables.' },
  { title: ['Logo principal & ', { em: 'déclinaisons' }], body: 'Versions horizontale, monogramme, monochrome — tout ce dont tu as besoin sur le terrain.' },
  { title: ['Palette & ', { em: 'typographies' }],        body: 'Choix justifiés, accessibles, et libres de droit pour ton équipe.' },
  { title: ['Univers ', { em: 'graphique' }],             body: 'Motifs, traitements photo, signes secondaires — les outils pour faire vivre l\'identité.' },
  { title: ['Templates de ', { em: 'communication' }],    body: 'Réseaux sociaux, papeterie, supports terrain. Prêts à dupliquer.' },
  { title: ['Mini charte ', { em: 'graphique' }],         body: 'Dix pages claires et applicables. Pas un manuel illisible.' },
  { title: ['Prévisualisations ', { em: 'réelles' }],     body: 'Mises en situation sur les supports que tu vas réellement utiliser.' },
  { title: ['Livraison web ', { em: '& print' }],         body: 'Tous les fichiers sources et exportés. Licence d\'usage illimitée.' },
];

function Inclus() {
  return (
    <section id="inclus" style={inStyles.section} data-screen-label="02 Ce qui est inclus">
      <div style={inStyles.inner}>
        <div style={inStyles.head}>
          <div>
            <p style={inStyles.eyebrow}>
              <span style={inStyles.eyebrowDot} />Ce qui est inclus
            </p>
            <h2 style={inStyles.h2}>
              Tout ce qu'il faut pour construire une communication <em style={inStyles.h2Em}>durable</em>.
            </h2>
          </div>
          <p style={inStyles.intro}>
            Neuf livrables, conçus pour fonctionner ensemble. Chacun a un usage précis et une raison d'exister.
          </p>
        </div>

        <div style={inStyles.grid}>
          {INCLUS_ITEMS.map((it, i) => (
            <article key={i} style={inStyles.cell}>
              <span style={inStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={inStyles.cellTitle}>
                {it.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={inStyles.cellTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={inStyles.cellBody}>{it.body}</p>
            </article>
          ))}
        </div>

        <div style={inStyles.summary}>
          <span style={inStyles.summaryLabel}>Résumé · paramètres</span>
          <p style={inStyles.summaryText}>
            Une collaboration de <em>4 à 6 semaines</em> pour construire une image claire, cohérente et facile à faire vivre au quotidien.
          </p>
          <div style={inStyles.summaryPrice}>
            <span style={inStyles.priceLabel}>Investissement</span>
            <span style={inStyles.priceValue}>à partir de XXXX € HT</span>
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
const fnStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    marginBottom: 64,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
    gap: 56,
    alignItems: 'end',
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
    display: 'grid',
    gridTemplateColumns: '1fr',
    borderTop: '1px solid var(--line-on-bone)',
  },
  step: {
    display: 'grid',
    gridTemplateColumns: '120px minmax(0, 1fr) minmax(0, 1.4fr)',
    gap: 40,
    padding: '40px 0',
    borderBottom: '1px solid var(--line-on-bone)',
    alignItems: 'baseline',
  },
  stepNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 56, lineHeight: 0.9, color: 'var(--terre)', opacity: 0.85,
  },
  stepTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 28, lineHeight: 1.15, color: 'var(--terre)', margin: 0,
    textWrap: 'balance',
  },
  stepTitleEm: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  stepBody: {
    fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.6,
    color: 'var(--terre-600)', margin: 0, maxWidth: 540,
  },
};

const STEPS = [
  {
    title: ['On pose des ', { em: 'bases claires' }],
    body: 'On échange sur ton activité, tes objectifs, tes contraintes et les usages réels de tes supports.',
  },
  {
    title: ['On construit une ', { em: 'direction cohérente' }],
    body: 'Je crée une identité alignée avec ton activité, ton positionnement et la réalité de ton quotidien.',
  },
  {
    title: ['On pense les usages ', { em: 'avant l\'esthétique' }],
    body: "L'objectif n'est pas juste de créer quelque chose de beau, mais des outils réellement utilisables dans le temps.",
  },
  {
    title: ['On crée un système ', { em: 'simple à faire vivre' }],
    body: 'Templates, hiérarchie visuelle, cohérence graphique — tout est pensé pour rester fluide même quand plusieurs personnes utilisent les supports.',
  },
  {
    title: ['Tu repars avec des ', { em: 'bases solides' }],
    body: 'Une communication plus claire, plus crédible et beaucoup plus simple à gérer au quotidien.',
  },
];

function Fonctionnement() {
  return (
    <section style={fnStyles.section} data-screen-label="03 Fonctionnement">
      <div style={fnStyles.inner}>
        <div style={fnStyles.head}>
          <div>
            <p style={fnStyles.eyebrow}>
              <span style={fnStyles.eyebrowDot} />Fonctionnement
            </p>
            <h2 style={fnStyles.h2}>
              Comment ça se passe <em style={fnStyles.h2Em}>concrètement</em>.
            </h2>
          </div>
          <p style={fnStyles.intro}>
            Cinq étapes courtes, pas de boucle de revue infinie. Tu sais à tout moment où on en est.
          </p>
        </div>

        <div style={fnStyles.steps}>
          {STEPS.map((s, i) => (
            <article key={i} style={fnStyles.step}>
              <span style={fnStyles.stepNum}>0{i + 1}.</span>
              <h3 style={fnStyles.stepTitle}>
                {s.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={fnStyles.stepTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={fnStyles.stepBody}>{s.body}</p>
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
const reStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '128px 0',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 40,
    flexWrap: 'wrap',
    marginBottom: 64,
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.06, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--paille)', maxWidth: 540, textWrap: 'balance',
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  counter: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 17, color: 'var(--fg-on-terre-muted)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 28,
  },
  card: {
    display: 'flex', flexDirection: 'column', gap: 18,
    textDecoration: 'none', color: 'inherit',
  },
  thumb: {
    position: 'relative',
    aspectRatio: '5 / 4',
    overflow: 'hidden',
    border: '1px solid var(--line-on-terre)',
    transition: 'transform 480ms var(--ease-out-soft)',
  },
  thumbMono: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
    padding: '0 28px 24px 0',
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
    fontSize: 88, lineHeight: 0.85,
    color: 'rgba(255, 250, 239, 0.86)',
    letterSpacing: '-0.02em',
  },
  thumbGutter: {
    position: 'absolute', left: 14, top: 14, bottom: 14, width: 22,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    color: 'var(--paille)', opacity: 0.62,
  },
  thumbNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14,
  },
  thumbWord: {
    writingMode: 'vertical-rl', transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)', fontSize: 9.5,
    letterSpacing: '0.30em', textTransform: 'lowercase',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 26, lineHeight: 1.15, color: 'var(--paille)', margin: 0,
    textWrap: 'balance',
  },
  cardTitleEm: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  cardBody: {
    fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.5,
    color: 'var(--fg-on-terre-muted)', margin: 0,
  },
};

const REA_PROJECTS = [
  {
    n: '01', word: 'identité', mono: 'EE',
    title: ['Envol ', { em: 'Environnement' }],
    body: 'Des supports pensés pour rester cohérents malgré plusieurs utilisateurs internes.',
    bg: 'linear-gradient(140deg, #d6c9a8 0%, #8a7253 55%, #5b432b 100%)',
    accent: 'rgba(228, 209, 254, 0.32)',
  },
  {
    n: '02', word: 'site & print', mono: 'MD',
    title: ['Maison Demarle ', { em: 'Réceptions' }],
    body: 'Un site plus clair et plus rassurant pour simplifier les demandes de devis.',
    bg: 'linear-gradient(160deg, #f3e5c1 0%, #c8b290 60%, #856a47 100%)',
    accent: 'rgba(186, 209, 253, 0.32)',
  },
  {
    n: '03', word: 'branding', mono: 'Si',
    title: ['Sienna', ''],
    body: 'Une identité plus crédible et plus structurée sans complexifier les usages.',
    bg: 'linear-gradient(135deg, #e4d1fe 0%, #b89bd9 55%, #6c4ea4 100%)',
    accent: 'rgba(242, 229, 194, 0.40)',
  },
];

function ReaProjectCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="portfolio.html" style={reStyles.card}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}>
      <div style={{ ...reStyles.thumb, transform: hover ? 'translateY(-4px)' : 'translateY(0)' }}>
        <div style={{ position: 'absolute', inset: 0, background: p.bg }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(60% 50% at 30% 35%, ${p.accent} 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />
        <div style={reStyles.thumbGutter}>
          <span style={reStyles.thumbNum}>{p.n}</span>
          <span style={reStyles.thumbWord}>{p.word}</span>
        </div>
        <div style={reStyles.thumbMono}>{p.mono}</div>
      </div>
      <h3 style={reStyles.cardTitle}>
        {p.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : part.em ? <em key={i} style={reStyles.cardTitleEm}>{part.em}</em> : null
        )}
      </h3>
      <p style={reStyles.cardBody}>{p.body}</p>
    </a>
  );
}

function Realisations() {
  return (
    <section style={reStyles.section} data-screen-label="04 Réalisations">
      <div style={reStyles.inner}>
        <div style={reStyles.head}>
          <div>
            <p style={reStyles.eyebrow}>
              <span style={reStyles.eyebrowDot} />Quelques réalisations
            </p>
            <h2 style={reStyles.h2}>
              Trois identités <em style={reStyles.h2Em}>récentes</em>.
            </h2>
          </div>
          <span style={reStyles.counter}>03 projets identité visuelle</span>
        </div>

        <div style={reStyles.grid}>
          {REA_PROJECTS.map(p => <ReaProjectCard key={p.n} p={p} />)}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   6 — BÉNÉFICES  (Bone)
   ============================================================ */
const bnStyles = {
  section: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '128px 0',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    marginBottom: 56,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56,
    alignItems: 'end',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 0,
    borderTop: '1px solid var(--line-on-bone)',
    borderBottom: '1px solid var(--line-on-bone)',
  },
  cell: {
    padding: '36px 22px 32px',
    borderRight: '1px solid var(--line-on-bone)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minHeight: 220,
  },
  cellLast: { borderRight: 'none' },
  cellNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--terre)', opacity: 0.55, lineHeight: 1,
  },
  cellTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 22, lineHeight: 1.2, color: 'var(--terre)', margin: 0,
    textWrap: 'balance',
  },
  cellTitleEm: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
};

const BENEFICES = [
  { title: ['Une image plus ', { em: 'professionnelle' }, ' et cohérente'] },
  { title: ['Des supports plus ', { em: 'simples' }, ' à utiliser au quotidien'] },
  { title: ['Une communication plus claire pour tes clients et tes équipes'] },
  { title: ['Une identité qui ', { em: 'évolue' }, ' facilement dans le temps'] },
  { title: ['Des outils pensés selon tes vrais usages'] },
];

function Benefices() {
  return (
    <section style={bnStyles.section} data-screen-label="05 Bénéfices">
      <div style={bnStyles.inner}>
        <div style={bnStyles.head}>
          <div>
            <p style={bnStyles.eyebrow}>
              <span style={bnStyles.eyebrowDot} />Ce que tu gagnes
            </p>
            <h2 style={bnStyles.h2}>
              Cinq changements <em style={bnStyles.h2Em}>concrets</em>.
            </h2>
          </div>
        </div>

        <div style={bnStyles.grid}>
          {BENEFICES.map((b, i) => (
            <article key={i} style={{ ...bnStyles.cell, ...(i === BENEFICES.length - 1 ? bnStyles.cellLast : null) }}>
              <span style={bnStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={bnStyles.cellTitle}>
                {b.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={bnStyles.cellTitleEm}>{part.em}</em>
                )}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   7 — TÉMOIGNAGE  (Terre)
   ============================================================ */
const tmStyles2 = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '144px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: '90px minmax(0, 1fr)',
    gap: 32, alignItems: 'start',
  },
  quoteMark: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 110, lineHeight: 0.75, color: 'var(--glycine)',
    margin: 0,
  },
  body: { display: 'flex', flexDirection: 'column', gap: 36 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)', margin: 0,
  },
  quote: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
    fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.25, letterSpacing: '-0.008em',
    color: 'var(--paille)', margin: 0, textWrap: 'pretty', maxWidth: 880,
  },
  attribRow: {
    paddingTop: 24,
    borderTop: '1px solid var(--line-on-terre)',
    display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap',
  },
  name: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--paille)', margin: 0,
  },
  role: {
    fontFamily: 'var(--font-micro)', fontSize: 11,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
};

function Temoignage() {
  return (
    <section style={tmStyles2.section} data-screen-label="06 Témoignage">
      <div style={tmStyles2.inner}>
        <p style={tmStyles2.quoteMark}>“</p>
        <div style={tmStyles2.body}>
          <p style={tmStyles2.eyebrow}>Témoignage · Envol Environnement</p>
          <p style={tmStyles2.quote}>
            Ce que j'ai le plus apprécié, c'est que Cindy ne cherche pas juste à faire quelque chose de beau. Elle réfléchit vraiment à la manière dont les supports vont être utilisés au quotidien. Grâce à ça, nos outils sont beaucoup plus cohérents et simples à utiliser en interne.
          </p>
          <div style={tmStyles2.attribRow}>
            <p style={tmStyles2.name}>Émilie Bréant</p>
            <span style={tmStyles2.role}>Chargée de communication · Envol Environnement</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   8 — FAQ  (Nuit, small — 3 items only)
   ============================================================ */
const fqStyles = {
  section: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '128px 0',
  },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 40px' },
  head: { marginBottom: 56 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-nuit-muted)',
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
    background: 'transparent',
  },
  qBtn: {
    width: '100%', background: 'none', border: 0, cursor: 'pointer',
    color: 'inherit', textAlign: 'left',
    display: 'grid', gridTemplateColumns: '52px 1fr auto',
    alignItems: 'center', gap: 24, padding: '26px 32px',
    fontFamily: 'inherit',
  },
  qNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 18, color: 'var(--brume)', opacity: 0.55,
  },
  qText: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 22, lineHeight: 1.25, color: 'var(--brume)', margin: 0,
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
  aBody: {
    display: 'grid', gridTemplateColumns: '52px 1fr', gap: 24,
    padding: '0 32px 26px',
  },
  aText: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
    color: 'var(--fg-on-nuit-muted)', margin: 0, gridColumn: '2 / 3', maxWidth: 640,
  },
};

const FAQ_PRESTA = [
  {
    q: 'Est-ce que je peux faire évoluer mon identité ensuite ?',
    a: 'Oui. L\'objectif est justement de créer une base suffisamment claire et flexible pour évoluer avec ton activité. La mini charte explique comment décliner sans dénaturer.',
  },
  {
    q: 'Est-ce que tu travailles uniquement avec des structures engagées ?',
    a: 'Je travaille surtout avec des structures qui cherchent une communication plus cohérente, plus durable et pensée intelligemment — peu importe le secteur, du moment que l\'intention est là.',
  },
  {
    q: 'Et si plusieurs personnes utilisent les supports ?',
    a: 'C\'est même le cas le plus fréquent. Les supports et templates sont pensés pour rester simples à utiliser et cohérents dans le temps, même quand plusieurs mains les manipulent.',
  },
];

function FaqRowPresta({ item, index, open, onToggle }) {
  return (
    <div style={{ ...fqStyles.row, borderColor: open ? 'rgba(186, 209, 253, 0.6)' : 'var(--line-on-nuit)' }}>
      <button type="button" onClick={onToggle} aria-expanded={open} style={fqStyles.qBtn}>
        <span style={fqStyles.qNum}>{String(index + 1).padStart(2, '0')}</span>
        <h3 style={fqStyles.qText}>{item.q}</h3>
        <span style={{ ...fqStyles.toggle, ...(open ? fqStyles.toggleOpen : null) }} aria-hidden="true">+</span>
      </button>
      <div style={{ ...fqStyles.aWrap, maxHeight: open ? 240 : 0, opacity: open ? 1 : 0 }}>
        <div style={fqStyles.aBody}><p style={fqStyles.aText}>{item.a}</p></div>
      </div>
    </div>
  );
}

function FaqPresta() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <section style={fqStyles.section} data-screen-label="07 FAQ">
      <div style={fqStyles.inner}>
        <div style={fqStyles.head}>
          <p style={fqStyles.eyebrow}>
            <span style={fqStyles.eyebrowDot} />FAQ
          </p>
          <h2 style={fqStyles.h2}>
            Tu te poses peut-être ces <em style={fqStyles.h2Em}>questions</em>.
          </h2>
        </div>
        <div style={fqStyles.list}>
          {FAQ_PRESTA.map((it, i) => (
            <FaqRowPresta key={i} item={it} index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   9 — CTA FINAL  (Terre — page-specific copy)
   ============================================================ */
const cfStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '144px 0 128px',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid var(--line-on-terre)',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto', padding: '0 40px',
    position: 'relative',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 12, margin: 0,
  },
  eyebrowDot: { width: 28, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h: {
    marginTop: 32,
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(44px, 5.6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.015em',
    color: 'var(--paille)', margin: '24px 0 0', textWrap: 'balance', maxWidth: 940,
  },
  hEm: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  lead: {
    fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55,
    color: 'var(--paille)', margin: '24px 0 0', maxWidth: 560,
  },
  row: {
    marginTop: 32,
    display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
  },
  meta: { display: 'flex', flexDirection: 'column', gap: 4 },
  metaTop: {
    fontFamily: 'var(--font-micro)', fontSize: 10,
    letterSpacing: '0.26em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  metaBottom: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 17, color: 'var(--paille)',
  },
};

function CtaPresta() {
  return (
    <section style={cfStyles.section} data-screen-label="08 CTA final">
      <div style={cfStyles.inner}>
        <p style={cfStyles.eyebrow}>
          <span style={cfStyles.eyebrowDot} />Et maintenant
        </p>
        <h2 style={cfStyles.h}>
          Prête à construire une communication plus claire et plus <em style={cfStyles.hEm}>simple à gérer</em>&nbsp;?
        </h2>
        <p style={cfStyles.lead}>
          Pour démarrer, il te suffit de réserver un appel découverte. Trente minutes, sans engagement, pour voir si on doit travailler ensemble.
        </p>
        <div style={cfStyles.row}>
          <a href="contact.html" className="btn btn--glycine" style={{ padding: '18px 32px', fontSize: 12 }}>
            Réserver mon appel découverte
          </a>
          <div style={cfStyles.meta}>
            <span style={cfStyles.metaTop}>30 minutes · sans engagement</span>
            <span style={cfStyles.metaBottom}>Réponse sous 48h ouvrées</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ROOT
   ============================================================ */
function IdentitePage() {
  return (
    <>
      <Header />
      <main>
        <IdentiteHero />
        <PourToi />
        <Inclus />
        <Fonctionnement />
        <Realisations />
        <Benefices />
        <Temoignage />
        <FaqPresta />
        <CtaPresta />
      </main>
      <Footer />
    </>
  );
}

window.IdentitePage = IdentitePage;
ReactDOM.createRoot(document.getElementById('root')).render(<IdentitePage />);
