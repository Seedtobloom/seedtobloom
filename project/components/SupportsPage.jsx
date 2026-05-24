/* SupportsPage.jsx — full "Supports de communication" offer page.
   Mirrors the IdentitePage composition so users feel the offer pages as a family,
   but with this page's own content and a sky-blue (Brume) accent within Nuit sections
   to subtly differentiate it from the Glycine-led Identité page.

   All style object names are prefixed `sp_` to avoid global collision with IdentitePage. */


/* ============================================================
   1 — HERO  (Terre)
   ============================================================ */
const sp_heroStyles = {
  section: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '88px 0 96px',
    position: 'relative',
    overflow: 'hidden',
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
    display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36,
  },
  pill: {
    fontFamily: 'var(--font-micro)', fontSize: 10,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--paille)', border: '1px solid var(--line-on-terre)',
    padding: '8px 14px', borderRadius: 999,
    whiteSpace: 'nowrap',
  },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(44px, 5.6vw, 82px)', lineHeight: 1.02, letterSpacing: '-0.015em',
    color: 'var(--paille)', margin: 0, textWrap: 'balance', maxWidth: 760,
  },
  h1Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6,
    color: 'var(--paille)', margin: 0, paddingBottom: 4, maxWidth: 460,
  },
  ctaRow: {
    marginTop: 48,
    display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap',
  },
  metaRow: {
    marginTop: 56,
    paddingTop: 26,
    borderTop: '1px solid var(--line-on-terre)',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
  },
  metaCell: { display: 'flex', flexDirection: 'column', gap: 6 },
  metaLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10,
    letterSpacing: '0.26em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  metaValue: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, lineHeight: 1.2, color: 'var(--paille)',
  },
};

function SupportsHero() {
  return (
    <section style={sp_heroStyles.section} data-screen-label="00 Hero">
      <div style={sp_heroStyles.inner}>
        <p style={sp_heroStyles.crumbs}>
          <span style={sp_heroStyles.crumbsDot} />
          <a href="index.html" style={sp_heroStyles.crumbsLink}>Accueil</a>
          <span style={sp_heroStyles.crumbsSlash}>/</span>
          <a href="services.html" style={sp_heroStyles.crumbsLink}>Services</a>
          <span style={sp_heroStyles.crumbsSlash}>/</span>
          <span>Supports de communication</span>
        </p>

        <div style={sp_heroStyles.grid}>
          <div>
            <p style={sp_heroStyles.offerEyebrow}>Seed to Print</p>
            <div style={sp_heroStyles.pillRow}>
              <span style={sp_heroStyles.pill}>Offre · 02</span>
              <span style={sp_heroStyles.pill}>Supports de communication</span>
              <span style={sp_heroStyles.pill}>Sur devis</span>
            </div>
            <h1 style={sp_heroStyles.h1}>
              Des supports cohérents, beaux et <em style={sp_heroStyles.h1Em}>fonctionnels</em> au quotidien.
            </h1>
          </div>

          <p style={sp_heroStyles.intro}>
            Une offre pensée pour les marques engagées qui ont besoin d'outils simples à utiliser, faciles à décliner, et conçus pour vraiment durer.
          </p>
        </div>

        <div style={sp_heroStyles.ctaRow}>
          <a href="contact.html" className="btn btn--paille">Réserver un appel découverte</a>
          <a href="#inclus" className="btn-ghost">Voir ce qui est inclus <span className="arrow">→</span></a>
        </div>

        <div style={sp_heroStyles.metaRow}>
          <div style={sp_heroStyles.metaCell}>
            <span style={sp_heroStyles.metaLabel}>Format</span>
            <span style={sp_heroStyles.metaValue}>collaboration flexible</span>
          </div>
          <div style={sp_heroStyles.metaCell}>
            <span style={sp_heroStyles.metaLabel}>Tarif</span>
            <span style={sp_heroStyles.metaValue}>sur devis</span>
          </div>
          <div style={sp_heroStyles.metaCell}>
            <span style={sp_heroStyles.metaLabel}>Paiement</span>
            <span style={sp_heroStyles.metaValue}>en plusieurs fois possible</span>
          </div>
          <div style={sp_heroStyles.metaCell}>
            <span style={sp_heroStyles.metaLabel}>Livrables</span>
            <span style={sp_heroStyles.metaValue}>print + digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   2 — POUR TOI  (Bone)
   ============================================================ */
const sp_ptStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
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
    margin: 0, color: 'var(--terre)', textWrap: 'balance',
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
    alignItems: 'baseline', gap: 20, padding: '20px 0',
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

const SP_POUR_TOI = [
  { text: ['Tu passes ton temps à ', { em: 'refaire' }, ' des documents parce que rien n\'est harmonisé.'] },
  { text: ['Tes équipes modifient les supports et ta communication devient ', { em: 'incohérente' }, '.'] },
  { text: ['Tu veux des outils simples à utiliser sans dépendre d\'un graphiste à chaque changement.'] },
  { text: ['Tu as besoin de supports adaptés à tes ', { em: 'usages réels' }, ', pas juste "jolis".'] },
  { text: ['Tu veux communiquer de manière plus responsable sans rendre les choses compliquées.'] },
];

function SupportsPourToi() {
  return (
    <section style={sp_ptStyles.section} data-screen-label="01 Pour toi">
      <div style={sp_ptStyles.inner}>
        <div>
          <p style={sp_ptStyles.eyebrow}>
            <span style={sp_ptStyles.eyebrowDot} />Cette offre est pour toi si
          </p>
          <h2 style={sp_ptStyles.h2}>
            Tu veux arrêter de tout refaire à chaque <em style={sp_ptStyles.h2Em}>support</em>.
          </h2>
          <p style={sp_ptStyles.body}>
            Cette offre s'adresse aux structures qui produisent régulièrement des documents — flyers, dossiers, présentations, posts — et qui veulent un système qui tient quand plusieurs personnes l'utilisent.
          </p>
        </div>

        <div>
          <p style={sp_ptStyles.listLabel}>Tu te reconnais&nbsp;?</p>
          <ul style={sp_ptStyles.list}>
            {SP_POUR_TOI.map((it, i) => (
              <li key={i} style={{
                ...sp_ptStyles.item,
                ...(i === SP_POUR_TOI.length - 1 ? sp_ptStyles.itemLast : null),
              }}>
                <span style={sp_ptStyles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                <p style={sp_ptStyles.itemText}>
                  {it.text.map((part, j) =>
                    typeof part === 'string'
                      ? <React.Fragment key={j}>{part}</React.Fragment>
                      : <em key={j} style={sp_ptStyles.itemEm}>{part.em}</em>
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
const sp_inStyles = {
  section: { background: 'var(--nuit)', color: 'var(--brume)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: 56, marginBottom: 64, alignItems: 'end',
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
    margin: 0, color: 'var(--brume)', textWrap: 'balance', maxWidth: 540,
  },
  h2Em: { fontStyle: 'italic', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)', margin: 0, paddingBottom: 6, maxWidth: 460,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    border: '1px solid var(--line-on-nuit)',
  },
  cell: {
    padding: '32px 24px 30px',
    borderRight: '1px solid var(--line-on-nuit)',
    borderBottom: '1px solid var(--line-on-nuit)',
    display: 'flex', flexDirection: 'column', gap: 14, minHeight: 220,
  },
  cellNum: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, color: 'var(--brume)', opacity: 0.55, lineHeight: 1,
  },
  cellTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 21, lineHeight: 1.15, color: 'var(--brume)', margin: 0,
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
    fontSize: 22, lineHeight: 1.3, color: 'var(--brume)', margin: 0, maxWidth: 620,
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

const SP_INCLUS = [
  {
    title: ['Création ou refonte ', { em: 'des supports' }],
    body: 'Print et digital : conception complète ou rafraîchissement de tes supports existants.',
  },
  {
    title: ['Templates ', { em: 'autonomes' }],
    body: 'Canva, InDesign ou autre — adaptés au logiciel que ton équipe utilise vraiment.',
  },
  {
    title: ['Flyers, brochures, ', { em: 'kakémonos' }],
    body: 'Dossiers, affiches, supports événementiels, posts réseaux sociaux.',
  },
  {
    title: ['Système graphique ', { em: 'cohérent' }],
    body: 'Hiérarchie, blocs réutilisables, règles claires — pour décliner sans casser.',
  },
  {
    title: ['Conseils ', { em: 'd\'éco-conception' }],
    body: 'Papier, format, encres, tirage. Choix pragmatiques selon tes vrais usages.',
  },
  {
    title: ['Organisation des ', { em: 'fichiers' }],
    body: 'Nommage, dossiers, conventions — pour que ton équipe retrouve tout sans toi.',
  },
  {
    title: ['Gabarits ', { em: 'protégés' }],
    body: 'Conçus pour être modifiés sans "casser" la mise en page ni la cohérence visuelle.',
  },
  {
    title: ['Mini-tutoriels de ', { em: 'prise en main' }],
    body: 'Vidéos courtes ou guides PDF, selon ton équipe. Pour démarrer en autonomie.',
  },
];

function SupportsInclus() {
  return (
    <section id="inclus" style={sp_inStyles.section} data-screen-label="02 Ce qui est inclus">
      <div style={sp_inStyles.inner}>
        <div style={sp_inStyles.head}>
          <div>
            <p style={sp_inStyles.eyebrow}>
              <span style={sp_inStyles.eyebrowDot} />Ce qui est inclus
            </p>
            <h2 style={sp_inStyles.h2}>
              Tout ce qu'il te faut pour communiquer <em style={sp_inStyles.h2Em}>plus facilement</em>.
            </h2>
          </div>
          <p style={sp_inStyles.intro}>
            Huit livrables pensés pour fonctionner ensemble. Chacun a une raison d'être — pas de poudre aux yeux.
          </p>
        </div>

        <div style={sp_inStyles.grid}>
          {SP_INCLUS.map((it, i) => (
            <article key={i} style={sp_inStyles.cell}>
              <span style={sp_inStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={sp_inStyles.cellTitle}>
                {it.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={sp_inStyles.cellTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={sp_inStyles.cellBody}>{it.body}</p>
            </article>
          ))}
        </div>

        <div style={sp_inStyles.summary}>
          <span style={sp_inStyles.summaryLabel}>Résumé · paramètres</span>
          <p style={sp_inStyles.summaryText}>
            Une collaboration <em>flexible</em> pour créer des supports qui restent cohérents, même quand plusieurs personnes les utilisent.
          </p>
          <div style={sp_inStyles.summaryPrice}>
            <span style={sp_inStyles.priceLabel}>Investissement</span>
            <span style={sp_inStyles.priceValue}>sur devis</span>
          </div>
          <a href="contact.html" className="btn btn--brume">Demander un devis</a>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   4 — FONCTIONNEMENT  (Bone)
   ============================================================ */
const sp_fnStyles = {
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
    margin: 0, color: 'var(--terre)', maxWidth: 620, textWrap: 'balance',
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

const SP_STEPS = [
  {
    title: ['On fait le point sur tes ', { em: 'besoins réels' }],
    body: 'J\'analyse tes supports actuels, tes contraintes internes et la manière dont ils sont utilisés au quotidien.',
  },
  {
    title: ['On construit un système ', { em: 'simple et cohérent' }],
    body: 'L\'objectif : éviter les supports « bricolés » et créer une base claire que tout le monde peut utiliser.',
  },
  {
    title: ['Je crée des supports ', { em: 'adaptés à tes usages' }],
    body: 'Chaque choix graphique est pensé selon la durée de vie du support, son utilisation et son impact réel.',
  },
  {
    title: ['On simplifie la ', { em: 'prise en main' }],
    body: 'Templates, organisation des fichiers, règles visuelles — tout est pensé pour éviter les erreurs et gagner du temps.',
  },
  {
    title: ['Tu gagnes en autonomie sans perdre en ', { em: 'cohérence' }],
    body: 'Tes supports restent professionnels, même lorsqu\'ils sont modifiés ou utilisés par plusieurs collaborateurs.',
  },
];

function SupportsFonctionnement() {
  return (
    <section style={sp_fnStyles.section} data-screen-label="03 Fonctionnement">
      <div style={sp_fnStyles.inner}>
        <div style={sp_fnStyles.head}>
          <div>
            <p style={sp_fnStyles.eyebrow}>
              <span style={sp_fnStyles.eyebrowDot} />Fonctionnement
            </p>
            <h2 style={sp_fnStyles.h2}>
              Cinq étapes pour passer du <em style={sp_fnStyles.h2Em}>bricolage</em> au système.
            </h2>
          </div>
          <p style={sp_fnStyles.intro}>
            Pas de jargon, pas de boucle de revue infinie. Tu sais à chaque étape où on en est et ce qui reste à faire.
          </p>
        </div>

        <div style={sp_fnStyles.steps}>
          {SP_STEPS.map((s, i) => (
            <article key={i} style={sp_fnStyles.step}>
              <span style={sp_fnStyles.stepNum}>0{i + 1}.</span>
              <h3 style={sp_fnStyles.stepTitle}>
                {s.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={sp_fnStyles.stepTitleEm}>{part.em}</em>
                )}
              </h3>
              <p style={sp_fnStyles.stepBody}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   5 — RÉALISATIONS  (Terre — 4 examples, the first concrete, others by category)
   ============================================================ */
const sp_reStyles = {
  section: { background: 'var(--terre)', color: 'var(--paille)', padding: '128px 0' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  head: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    gap: 40, flexWrap: 'wrap', marginBottom: 64,
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 22,
  },
  card: {
    display: 'flex', flexDirection: 'column', gap: 16,
    textDecoration: 'none', color: 'inherit',
  },
  thumb: {
    position: 'relative',
    aspectRatio: '4 / 5',
    overflow: 'hidden',
    border: '1px solid var(--line-on-terre)',
    transition: 'transform 480ms var(--ease-out-soft)',
  },
  thumbLabel: {
    position: 'absolute',
    top: 14, left: 14,
    fontFamily: 'var(--font-micro)', fontSize: 9.5,
    letterSpacing: '0.30em', textTransform: 'uppercase',
    color: 'var(--paille)', opacity: 0.62,
  },
  thumbBig: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'flex-end',
    padding: '0 22px 24px 22px',
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
    fontSize: 56, lineHeight: 0.92,
    color: 'rgba(255, 250, 239, 0.92)',
    letterSpacing: '-0.015em',
  },
  cardKind: {
    fontFamily: 'var(--font-micro)', fontSize: 10,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 22, lineHeight: 1.18, color: 'var(--paille)', margin: 0,
    textWrap: 'balance',
  },
  cardTitleEm: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
};

const SP_REA = [
  {
    label: 'Étude de cas · 01',
    big: 'Envol\nEnvironnement',
    kind: 'Association environnementale',
    title: ['Supports internes & ', { em: 'templates' }],
    bg: 'linear-gradient(140deg, #d6c9a8 0%, #8a7253 55%, #5b432b 100%)',
    accent: 'rgba(186, 209, 253, 0.32)',
  },
  {
    label: 'Catégorie · 02',
    big: 'Supports\névénementiels',
    kind: 'Print éco-conçu',
    title: ['Affiches, flyers, ', { em: 'kakémonos' }],
    bg: 'linear-gradient(160deg, #f3e5c1 0%, #c8b290 60%, #856a47 100%)',
    accent: 'rgba(228, 209, 254, 0.28)',
  },
  {
    label: 'Catégorie · 03',
    big: 'Documents\ninstitutionnels',
    kind: 'Éditables · multi-utilisateurs',
    title: ['Dossiers, rapports, ', { em: 'plaquettes' }],
    bg: 'linear-gradient(135deg, #bad1fd 0%, #6f8bc2 55%, #2a3b5a 100%)',
    accent: 'rgba(242, 229, 194, 0.32)',
  },
  {
    label: 'Catégorie · 04',
    big: 'Supports\nresponsables',
    kind: 'PME engagées',
    title: ['Print papier ', { em: 'raisonné' }],
    bg: 'linear-gradient(150deg, #e4d1fe 0%, #b89bd9 55%, #6c4ea4 100%)',
    accent: 'rgba(242, 229, 194, 0.34)',
  },
];

function SpReaCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="portfolio.html" style={sp_reStyles.card}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}>
      <div style={{ ...sp_reStyles.thumb, transform: hover ? 'translateY(-4px)' : 'translateY(0)' }}>
        <div style={{ position: 'absolute', inset: 0, background: p.bg }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(60% 50% at 30% 35%, ${p.accent} 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />
        <span style={sp_reStyles.thumbLabel}>{p.label}</span>
        <div style={sp_reStyles.thumbBig}>
          {p.big.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </div>
      </div>
      <span style={sp_reStyles.cardKind}>{p.kind}</span>
      <h3 style={sp_reStyles.cardTitle}>
        {p.title.map((part, i) =>
          typeof part === 'string'
            ? <React.Fragment key={i}>{part}</React.Fragment>
            : <em key={i} style={sp_reStyles.cardTitleEm}>{part.em}</em>
        )}
      </h3>
    </a>
  );
}

function SupportsRealisations() {
  return (
    <section style={sp_reStyles.section} data-screen-label="04 Réalisations">
      <div style={sp_reStyles.inner}>
        <div style={sp_reStyles.head}>
          <div>
            <p style={sp_reStyles.eyebrow}>
              <span style={sp_reStyles.eyebrowDot} />Exemples de supports
            </p>
            <h2 style={sp_reStyles.h2}>
              Une étude de cas, trois <em style={sp_reStyles.h2Em}>familles</em>.
            </h2>
          </div>
          <span style={sp_reStyles.counter}>04 exemples · sur demande</span>
        </div>

        <div style={sp_reStyles.grid}>
          {SP_REA.map((p, i) => <SpReaCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   6 — BÉNÉFICES  (Bone, 5-cell hairline grid)
   ============================================================ */
const sp_bnStyles = {
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
    margin: 0, color: 'var(--terre)', textWrap: 'balance', maxWidth: 560,
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
    borderTop: '1px solid var(--line-on-bone)',
    borderBottom: '1px solid var(--line-on-bone)',
  },
  cell: {
    padding: '36px 22px 32px',
    borderRight: '1px solid var(--line-on-bone)',
    display: 'flex', flexDirection: 'column', gap: 16, minHeight: 220,
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

const SP_BENEFICES = [
  { title: ['Une communication plus ', { em: 'cohérente' }, ' et reconnaissable'] },
  { title: ['Des supports faciles à utiliser au quotidien'] },
  { title: ['Moins de temps perdu à ', { em: 'refaire' }, ' ou corriger les documents'] },
  { title: ['Une communication ', { em: 'plus responsable' }, ', pensée selon tes vrais besoins'] },
  { title: ['Des outils professionnels qui restent simples à prendre en main'] },
];

function SupportsBenefices() {
  return (
    <section style={sp_bnStyles.section} data-screen-label="05 Bénéfices">
      <div style={sp_bnStyles.inner}>
        <div style={sp_bnStyles.head}>
          <div>
            <p style={sp_bnStyles.eyebrow}>
              <span style={sp_bnStyles.eyebrowDot} />Ce que tu gagnes
            </p>
            <h2 style={sp_bnStyles.h2}>
              Cinq changements <em style={sp_bnStyles.h2Em}>concrets</em>.
            </h2>
          </div>
        </div>

        <div style={sp_bnStyles.grid}>
          {SP_BENEFICES.map((b, i) => (
            <article key={i} style={{ ...sp_bnStyles.cell, ...(i === SP_BENEFICES.length - 1 ? sp_bnStyles.cellLast : null) }}>
              <span style={sp_bnStyles.cellNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={sp_bnStyles.cellTitle}>
                {b.title.map((part, j) =>
                  typeof part === 'string'
                    ? <React.Fragment key={j}>{part}</React.Fragment>
                    : <em key={j} style={sp_bnStyles.cellTitleEm}>{part.em}</em>
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
const sp_tmStyles = {
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
    fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.25, letterSpacing: '-0.008em',
    color: 'var(--paille)', margin: 0, textWrap: 'pretty', maxWidth: 880,
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
    fontFamily: 'var(--font-micro)', fontSize: 11,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
  },
};

function SupportsTemoignage() {
  return (
    <section style={sp_tmStyles.section} data-screen-label="06 Témoignage">
      <div style={sp_tmStyles.inner}>
        <p style={sp_tmStyles.quoteMark}>“</p>
        <div style={sp_tmStyles.body}>
          <p style={sp_tmStyles.eyebrow}>Témoignage · Envol Environnement</p>
          <p style={sp_tmStyles.quote}>
            Ce que j'ai le plus apprécié, c'est sa capacité à créer des supports beaux mais surtout vraiment pratiques pour nos équipes. Même avec plusieurs collaborateurs qui utilisent les templates, notre communication reste cohérente et fluide.
          </p>
          <div style={sp_tmStyles.attribRow}>
            <p style={sp_tmStyles.name}>Émilie</p>
            <span style={sp_tmStyles.role}>Chargée de communication · Envol Environnement</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   8 — FAQ  (Nuit — 5 items)
   ============================================================ */
const sp_fqStyles = {
  section: { background: 'var(--nuit)', color: 'var(--brume)', padding: '128px 0' },
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
    overflow: 'hidden', background: 'transparent',
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
  aBody: { display: 'grid', gridTemplateColumns: '52px 1fr', gap: 24, padding: '0 32px 26px' },
  aText: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
    color: 'var(--fg-on-nuit-muted)', margin: 0, gridColumn: '2 / 3', maxWidth: 700,
  },
};

const SP_FAQ = [
  {
    q: 'Est-ce que les templates seront faciles à modifier ?',
    a: 'Oui. Les supports sont pensés pour être utilisés facilement, même par des personnes qui ne sont pas graphistes. Les zones modifiables sont clairement identifiées, les zones protégées aussi.',
  },
  {
    q: 'Tu travailles uniquement sur du print ?',
    a: 'Non. Je crée aussi des supports digitaux : réseaux sociaux, présentations, PDF, documents internes, templates Canva ou InDesign. Souvent, les deux mondes se combinent dans une même mission.',
  },
  {
    q: 'On peut travailler ensemble même si on a déjà une identité visuelle ?',
    a: 'Oui. Je peux m\'appuyer sur ton univers existant et structurer des supports cohérents autour. Si la charte est claire, on gagne du temps ; si elle a besoin d\'être consolidée, on en parle au début.',
  },
  {
    q: '« Éco-conçu » veut dire limité ou moins esthétique ?',
    a: 'Pas du tout. L\'objectif est surtout de faire des choix intelligents et adaptés à l\'usage réel du support — format, papier, encre, tirage. La sobriété visuelle n\'est pas une obligation, c\'est une possibilité.',
  },
  {
    q: 'Tu peux former mes équipes à utiliser les supports ?',
    a: 'Oui. Selon les besoins, je prévois une prise en main simple (visio 30-45 min) ou des mini-tutoriels vidéo et PDF qui restent disponibles dans le temps.',
  },
];

function SpFaqRow({ item, index, open, onToggle }) {
  return (
    <div style={{ ...sp_fqStyles.row, borderColor: open ? 'rgba(186, 209, 253, 0.6)' : 'var(--line-on-nuit)' }}>
      <button type="button" onClick={onToggle} aria-expanded={open} style={sp_fqStyles.qBtn}>
        <span style={sp_fqStyles.qNum}>{String(index + 1).padStart(2, '0')}</span>
        <h3 style={sp_fqStyles.qText}>{item.q}</h3>
        <span style={{ ...sp_fqStyles.toggle, ...(open ? sp_fqStyles.toggleOpen : null) }} aria-hidden="true">+</span>
      </button>
      <div style={{ ...sp_fqStyles.aWrap, maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}>
        <div style={sp_fqStyles.aBody}><p style={sp_fqStyles.aText}>{item.a}</p></div>
      </div>
    </div>
  );
}

function SupportsFaq() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <section style={sp_fqStyles.section} data-screen-label="07 FAQ">
      <div style={sp_fqStyles.inner}>
        <div style={sp_fqStyles.head}>
          <p style={sp_fqStyles.eyebrow}>
            <span style={sp_fqStyles.eyebrowDot} />FAQ
          </p>
          <h2 style={sp_fqStyles.h2}>
            Tu te poses peut-être ces <em style={sp_fqStyles.h2Em}>questions</em>.
          </h2>
        </div>
        <div style={sp_fqStyles.list}>
          {SP_FAQ.map((it, i) => (
            <SpFaqRow key={i} item={it} index={i}
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
const sp_cfStyles = {
  section: {
    background: 'var(--terre)', color: 'var(--paille)',
    padding: '144px 0 128px',
    position: 'relative', overflow: 'hidden',
    borderTop: '1px solid var(--line-on-terre)',
  },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 40px', position: 'relative' },
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
    color: 'var(--paille)', margin: '24px 0 0', maxWidth: 580,
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

function SupportsCta() {
  return (
    <section style={sp_cfStyles.section} data-screen-label="08 CTA final">
      <div style={sp_cfStyles.inner}>
        <p style={sp_cfStyles.eyebrow}>
          <span style={sp_cfStyles.eyebrowDot} />Et maintenant
        </p>
        <h2 style={sp_cfStyles.h}>
          Envie d'une communication plus fluide et <em style={sp_cfStyles.hEm}>cohérente</em> au quotidien&nbsp;?
        </h2>
        <p style={sp_cfStyles.lead}>
          Parlons de tes besoins et créons des supports pensés pour ton équipe, tes usages et tes objectifs. Un appel suffit pour démarrer.
        </p>
        <div style={sp_cfStyles.row}>
          <a href="contact.html" className="btn btn--glycine" style={{ padding: '18px 32px', fontSize: 12 }}>
            Créer mes supports de communication
          </a>
          <div style={sp_cfStyles.meta}>
            <span style={sp_cfStyles.metaTop}>30 minutes · sans engagement</span>
            <span style={sp_cfStyles.metaBottom}>Réponse sous 48h ouvrées</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ROOT
   ============================================================ */
function SupportsPage() {
  return (
    <>
      <Header />
      <main>
        <SupportsHero />
        <SupportsPourToi />
        <SupportsInclus />
        <SupportsFonctionnement />
        <SupportsRealisations />
        <SupportsBenefices />
        <SupportsTemoignage />
        <SupportsFaq />
        <SupportsCta />
      </main>
      <Footer />
    </>
  );
}

window.SupportsPage = SupportsPage;
ReactDOM.createRoot(document.getElementById('root')).render(<SupportsPage />);
