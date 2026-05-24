/* AboutPage.jsx — full "À propos" page.
   Layout: Hero (Terre) → Parcours (Bone) → Vision (Terre)
         → Engagées (Nuit) → Façon (Bone) → Manifeste + CTA (Terre) */


/* ============================================================
   1 — HERO  (Terre)
   ============================================================ */
const abHeroStyles = {
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
    display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
    gap: 80, alignItems: 'end',
  },
  surtitle: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 28px',
  },
  surtitleDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(44px, 5.6vw, 82px)', lineHeight: 1.02,
    letterSpacing: '-0.015em', color: 'var(--paille)',
    margin: 0, textWrap: 'balance', maxWidth: 760,
  },
  h1Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6,
    color: 'var(--fg-on-terre-muted)', margin: 0, maxWidth: 420,
  },
  introStrong: { color: 'var(--paille)', fontStyle: 'italic' },
  ctaRow: {
    marginTop: 48, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
  },
};

function AboutHero() {
  return (
    <section style={abHeroStyles.section} data-screen-label="00 Hero">
      <div style={abHeroStyles.inner}>
        <p style={abHeroStyles.crumbs}>
          <span style={abHeroStyles.crumbsDot} />
          <a href="index.html" style={abHeroStyles.crumbsLink}>Accueil</a>
          <span style={abHeroStyles.crumbsSlash}>/</span>
          <span>À propos</span>
        </p>

        <div style={abHeroStyles.grid}>
          <div>
            <p style={abHeroStyles.surtitle}>
              <span style={abHeroStyles.surtitleDot} />Graphiste éco-responsable basée à Lille
            </p>
            <h1 style={abHeroStyles.h1}>
              Créer des supports <em style={abHeroStyles.h1Em}>beaux, utiles</em> et pensés pour durer.
            </h1>
            <div style={abHeroStyles.ctaRow}>
              <a href="services.html" className="btn btn--paille">Découvrir mes prestations</a>
              <a href="contact.html" className="btn-ghost" style={{ color: 'var(--paille)' }}>Me contacter <span className="arrow">→</span></a>
            </div>
          </div>
          <div>
            <p style={abHeroStyles.intro}>
              J'accompagne les structures engagées, chargées de communication et entreprises locales qui veulent une communication plus claire, cohérente et simple à faire vivre au quotidien.
            </p>
            <p style={{ ...abHeroStyles.intro, marginTop: 20 }}>
              Mon approche : <em style={abHeroStyles.introStrong}>créer des outils adaptés à votre réalité</em>, pas des supports parfaits impossibles à utiliser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   2 — MON PARCOURS  (Bone)
   ============================================================ */
const abParcStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
    gap: 96, alignItems: 'start',
  },
  left: { position: 'sticky', top: 104 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(32px, 3.8vw, 50px)', lineHeight: 1.08, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--terre)', textWrap: 'balance',
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine-900)', fontWeight: 400 },
  right: { display: 'flex', flexDirection: 'column', gap: 28 },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'var(--terre-600)', margin: 0,
  },
  bodyStrong: { color: 'var(--terre)', fontStyle: 'italic' },
  canDoLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--terre-600)',
    margin: '4px 0 18px',
  },
  canDoGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 24px',
  },
  canDoItem: { display: 'flex', alignItems: 'flex-start', gap: 10 },
  check: {
    color: 'var(--glycine-900)', fontFamily: 'var(--font-micro)',
    fontSize: 12, fontWeight: 600, flexShrink: 0, marginTop: 3,
  },
  canDoText: {
    fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.45,
    color: 'var(--terre)', margin: 0,
  },
};

const DESIGN_CAN = [
  'Clarifier un message',
  'Rendre une info accessible',
  'Inspirer confiance',
  'Faciliter le quotidien',
  'Donner de la cohérence',
];

function AboutParcours() {
  return (
    <section style={abParcStyles.section} data-screen-label="01 Parcours">
      <div style={abParcStyles.inner}>
        <div style={abParcStyles.left}>
          <p style={abParcStyles.eyebrow}>
            <span style={abParcStyles.eyebrowDot} />Mon parcours
          </p>
          <h2 style={abParcStyles.h2}>
            La création a toujours été mon <em style={abParcStyles.h2Em}>terrain de jeu</em>.
          </h2>
        </div>

        <div style={abParcStyles.right}>
          <p style={abParcStyles.body}>
            Petite, je passais mon temps à fabriquer, dessiner et imaginer des objets avec ce que j'avais sous la main. Créer n'a jamais été « un métier » dans ma tête — c'était simplement une façon naturelle de comprendre le monde et de donner vie aux idées.
          </p>
          <p style={abParcStyles.body}>
            Plus tard, je découvre le graphisme et je comprends rapidement que le design peut faire bien plus que rendre quelque chose joli. <em style={abParcStyles.bodyStrong}>Il peut être utile.</em>
          </p>
          <div>
            <p style={abParcStyles.canDoLabel}>Le design peut</p>
            <div style={abParcStyles.canDoGrid}>
              {DESIGN_CAN.map((item, i) => (
                <div key={i} style={abParcStyles.canDoItem}>
                  <span style={abParcStyles.check}>✔</span>
                  <p style={abParcStyles.canDoText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p style={abParcStyles.body}>
            C'est cette vision-là qui m'a poussée à me spécialiser dans l'identité visuelle et la communication éco-responsable.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   3 — MA VISION DU DESIGN  (Terre)
   ============================================================ */
const abVisStyles = {
  section: { background: 'var(--terre)', color: 'var(--paille)', padding: '128px 0', overflow: 'hidden' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
    gap: 96, alignItems: 'start',
  },
  left: {
    position: 'sticky', top: 104,
    display: 'flex', flexDirection: 'column', gap: 0,
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 28px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  pullQuote: { borderLeft: '3px solid var(--glycine)', paddingLeft: 28, margin: 0 },
  pullText: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
    fontSize: 'clamp(26px, 3.0vw, 40px)', lineHeight: 1.15,
    color: 'var(--paille)', margin: 0, textWrap: 'balance',
  },
  right: { display: 'flex', flexDirection: 'column', gap: 32 },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'var(--fg-on-terre-muted)', margin: 0,
  },
  listWrap: { display: 'flex', flexDirection: 'column', gap: 14 },
  listLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    margin: 0,
  },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: {
    fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 16,
    color: 'var(--paille)', border: '1px solid var(--line-on-terre)',
    padding: '8px 16px', borderRadius: 999,
  },
};

function AboutVision() {
  return (
    <section style={abVisStyles.section} data-screen-label="02 Vision">
      <div style={abVisStyles.inner}>
        <div style={abVisStyles.left}>
          <p style={abVisStyles.eyebrow}>
            <span style={abVisStyles.eyebrowDot} />Ma vision du design
          </p>
          <blockquote style={abVisStyles.pullQuote}>
            <p style={abVisStyles.pullText}>
              Je ne crois pas au design responsable parfait. Je crois à des choix cohérents avec vos usages et votre réalité.
            </p>
          </blockquote>
        </div>

        <div style={abVisStyles.right}>
          <p style={abVisStyles.body}>
            « Durable » ne veut pas dire « toujours réutilisable ». Une carte de menu pour un traiteur n'a pas la même vie qu'une plaquette institutionnelle. Chaque support dépend de son contexte : qui le tient, où, quand, combien de fois.
          </p>

          <div style={abVisStyles.listWrap}>
            <p style={abVisStyles.listLabel}>Des supports pensés selon</p>
            <div style={abVisStyles.tagRow}>
              {['Vos usages', 'Vos contraintes', 'Vos équipes', 'Vos moyens', 'Votre réalité terrain'].map(t => (
                <span key={t} style={abVisStyles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <p style={abVisStyles.body}>
            Ma vision du design éco-responsable est pragmatique : produire ce qui sera réellement utilisé, dans des formats et des matières qui font sens. Pas un argument vert collé sur un projet calqué d'ailleurs.
          </p>

          <div style={abVisStyles.listWrap}>
            <p style={abVisStyles.listLabel}>Trouver l'équilibre entre</p>
            <div style={abVisStyles.tagRow}>
              {['Esthétique', 'Clarté', 'Praticité', 'Impact environnemental', 'Facilité d\'utilisation'].map(t => (
                <span key={t} style={abVisStyles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <p style={abVisStyles.body}>
            Sans jamais perdre de vue l'objectif principal : faire en sorte que votre communication fonctionne réellement.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   4 — POURQUOI STRUCTURES ENGAGÉES  (Nuit)
   ============================================================ */
const abEngStyles = {
  section: { background: 'var(--nuit)', color: 'var(--brume)', padding: '128px 0' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
    gap: 80, alignItems: 'start',
  },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-nuit-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--brume)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(32px, 3.8vw, 50px)', lineHeight: 1.08, letterSpacing: '-0.012em',
    margin: 0, color: 'var(--brume)', textWrap: 'balance',
  },
  h2Em: { fontStyle: 'italic', fontWeight: 400 },
  right: { display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 16 },
  listLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--fg-on-nuit-muted)',
    margin: '0 0 16px',
  },
  pillRow: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  pill: {
    fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 15.5,
    color: 'var(--brume)', border: '1px solid var(--line-on-nuit)',
    padding: '8px 16px', borderRadius: 999,
  },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'var(--fg-on-nuit-muted)', margin: 0,
  },
  bodyAccent: { color: 'var(--brume)', fontStyle: 'italic' },
};

function AboutEngagees() {
  return (
    <section style={abEngStyles.section} data-screen-label="03 Structures engagées">
      <div style={abEngStyles.inner}>
        <div>
          <p style={abEngStyles.eyebrow}>
            <span style={abEngStyles.eyebrowDot} />Pourquoi les structures engagées
          </p>
          <h2 style={abEngStyles.h2}>
            Parce que j'aime les projets qui cherchent à faire les choses <em style={abEngStyles.h2Em}>avec sens</em>.
          </h2>
        </div>

        <div style={abEngStyles.right}>
          <div>
            <p style={abEngStyles.listLabel}>Je travaille principalement avec</p>
            <div style={abEngStyles.pillRow}>
              {['PME engagées', 'Chargées de communication', 'Structures à impact', 'Artisans', 'Entreprises locales'].map(t => (
                <span key={t} style={abEngStyles.pill}>{t}</span>
              ))}
            </div>
          </div>
          <p style={abEngStyles.body}>
            Des personnes qui veulent une communication plus cohérente avec leurs valeurs, sans tomber dans le greenwashing ou les grandes promesses irréalistes.
          </p>
          <p style={abEngStyles.body}>
            Ce que j'aime dans ces collaborations : <em style={abEngStyles.bodyAccent}>construire des outils utiles, honnêtes et durables</em> qui soutiennent réellement leur activité.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   5 — MA FAÇON DE TRAVAILLER  (Bone)
   ============================================================ */
const abFaconStyles = {
  section: { background: 'var(--bone)', color: 'var(--terre)', padding: '128px 0' },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 40px',
    display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
    gap: 96, alignItems: 'start',
  },
  left: { position: 'sticky', top: 104 },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terre-600)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 24px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--terre-600)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(32px, 3.8vw, 50px)', lineHeight: 1.08, letterSpacing: '-0.012em',
    margin: '0 0 24px', color: 'var(--terre)', textWrap: 'balance',
  },
  pillRow: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  pill: {
    fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 15,
    color: 'var(--terre)', border: '1px solid var(--line-on-bone)',
    padding: '7px 14px', borderRadius: 999,
  },
  right: { display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 8 },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'var(--terre-600)', margin: 0,
  },
  listLabel: {
    fontFamily: 'var(--font-micro)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--terre-600)',
    margin: '0 0 16px',
  },
  checkList: { display: 'flex', flexDirection: 'column', gap: 12 },
  checkItem: { display: 'flex', alignItems: 'flex-start', gap: 12 },
  check: {
    color: 'var(--glycine-900)', fontFamily: 'var(--font-micro)',
    fontSize: 12, fontWeight: 600, flexShrink: 0, marginTop: 3,
  },
  checkText: {
    fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.45,
    color: 'var(--terre)', margin: 0,
  },
};

const COMPRENDRE_ITEMS = [
  'Votre fonctionnement et vos contraintes réelles',
  'Vos équipes et les personnes qui utilisent les supports',
  'Vos besoins à court et long terme',
  'Votre façon de communiquer au quotidien',
];

function AboutFacon() {
  return (
    <section style={abFaconStyles.section} data-screen-label="04 Façon de travailler">
      <div style={abFaconStyles.inner}>
        <div style={abFaconStyles.left}>
          <p style={abFaconStyles.eyebrow}>
            <span style={abFaconStyles.eyebrowDot} />Ma façon de travailler
          </p>
          <h2 style={abFaconStyles.h2}>
            Une collaboration simple, humaine et claire.
          </h2>
          <div style={abFaconStyles.pillRow}>
            {['Structurée', 'Collaborative', 'Pragmatique', 'Accessible'].map(t => (
              <span key={t} style={abFaconStyles.pill}>{t}</span>
            ))}
          </div>
        </div>

        <div style={abFaconStyles.right}>
          <p style={abFaconStyles.body}>
            L'objectif n'est pas de vous noyer dans le jargon ou dans des stratégies impossibles à appliquer. Je cherche surtout à comprendre votre réalité pour créer des supports qui s'intègrent naturellement dans votre quotidien.
          </p>
          <div>
            <p style={abFaconStyles.listLabel}>Je cherche surtout à comprendre</p>
            <div style={abFaconStyles.checkList}>
              {COMPRENDRE_ITEMS.map((item, i) => (
                <div key={i} style={abFaconStyles.checkItem}>
                  <span style={abFaconStyles.check}>✔</span>
                  <p style={abFaconStyles.checkText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p style={abFaconStyles.body}>
            Pour créer des supports qui s'intègrent naturellement dans votre quotidien — et que vous pouvez réellement faire vivre.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   6 — MANIFESTE + CTA  (Terre)
   ============================================================ */
const abManifStyles = {
  section: {
    background: 'var(--terre)', color: 'var(--paille)',
    padding: '128px 0 144px', overflow: 'hidden',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 40px' },
  eyebrow: {
    fontFamily: 'var(--font-micro)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex', alignItems: 'center', gap: 10, margin: '0 0 28px',
  },
  eyebrowDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 'clamp(44px, 5.6vw, 82px)', lineHeight: 1.02,
    letterSpacing: '-0.015em', color: 'var(--paille)',
    margin: '0 0 56px', textWrap: 'balance', maxWidth: 820,
  },
  h2Em: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 0, borderTop: '1px solid var(--line-on-terre)',
    marginBottom: 80,
  },
  item: {
    display: 'flex', alignItems: 'flex-start', gap: 20,
    padding: '28px 40px 28px 0',
    borderBottom: '1px solid var(--line-on-terre)',
    borderRight: '1px solid var(--line-on-terre)',
  },
  itemRight: { paddingLeft: 40, paddingRight: 0, borderRight: 'none' },
  itemArrow: {
    color: 'var(--glycine)', fontFamily: 'var(--font-display)',
    fontSize: 20, flexShrink: 0, marginTop: 4, opacity: 0.85,
  },
  itemText: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
    fontSize: 22, lineHeight: 1.25, color: 'var(--paille)', margin: 0,
  },
  divider: {
    borderTop: '1px solid var(--line-on-terre)',
    paddingTop: 48,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
    gap: 80, alignItems: 'end',
  },
  closing: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
    fontSize: 'clamp(22px, 2.6vw, 32px)', lineHeight: 1.3,
    color: 'var(--paille)', margin: 0, textWrap: 'balance',
  },
  ctaWrap: { display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-end' },
  ctaMeta: {
    fontFamily: 'var(--font-micro)', fontSize: 10, letterSpacing: '0.26em',
    textTransform: 'uppercase', color: 'var(--fg-on-terre-muted)', textAlign: 'right',
  },
};

const MANIFESTE_ITEMS = [
  'Un support vraiment utile',
  'Un template simple à reprendre',
  'Un site clair et efficace',
  'Une identité pensée pour durer',
];

function AboutManifeste() {
  return (
    <section style={abManifStyles.section} data-screen-label="05 Manifeste">
      <div style={abManifStyles.inner}>
        <p style={abManifStyles.eyebrow}>
          <span style={abManifStyles.eyebrowDot} />Petit manifeste
        </p>
        <h2 style={abManifStyles.h2}>
          Créer <em style={abManifStyles.h2Em}>moins</em>, mais mieux.
        </h2>

        <div style={abManifStyles.grid}>
          {MANIFESTE_ITEMS.map((text, i) => (
            <div key={i} style={{
              ...abManifStyles.item,
              ...(i % 2 === 1 ? abManifStyles.itemRight : null),
              ...(i >= MANIFESTE_ITEMS.length - 2 ? { borderBottom: 'none' } : null),
            }}>
              <span style={abManifStyles.itemArrow}>→</span>
              <p style={abManifStyles.itemText}>{text}</p>
            </div>
          ))}
        </div>

        <div style={abManifStyles.divider}>
          <p style={abManifStyles.closing}>
            Parce qu'une communication efficace n'est pas celle qui en fait le plus. C'est celle qui reste cohérente dans le temps.
          </p>
          <div style={abManifStyles.ctaWrap}>
            <span style={abManifStyles.ctaMeta}>30 minutes · sans engagement</span>
            <a href="contact.html" className="btn btn--glycine" style={{ padding: '18px 32px', fontSize: 12 }}>
              Réserver un appel découverte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   ROOT
   ============================================================ */
function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutParcours />
        <AboutVision />
        <AboutEngagees />
        <AboutFacon />
        <AboutManifeste />
      </main>
      <Footer />
    </>
  );
}

window.AboutPage = AboutPage;
ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
