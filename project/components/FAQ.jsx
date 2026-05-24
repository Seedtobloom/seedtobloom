/* FAQ.jsx — Nuit surface, line-bordered cards (user-selected pattern).
   Each row is a hairline-bounded "Q." card. Click to expand the answer inline.
   The leftmost column carries the question number, italic; the right edge holds the +/− toggle. */

const faqStyles = {
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
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
    gap: 56,
    marginBottom: 72,
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
    maxWidth: 460,
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
    paddingBottom: 6,
    maxWidth: 440,
  },
  list: {
    display: 'grid',
    gap: 14,
  },
  rowBase: {
    border: '1px solid var(--line-on-nuit)',
    transition: 'border-color 240ms var(--ease-out-soft), background 240ms var(--ease-out-soft)',
    cursor: 'pointer',
    overflow: 'hidden',
    background: 'transparent',
    padding: 0,
    color: 'inherit',
    width: '100%',
    textAlign: 'left',
    display: 'block',
  },
  rowHover: {
    borderColor: 'rgba(186, 209, 253, 0.45)',
  },
  rowOpen: {
    borderColor: 'rgba(186, 209, 253, 0.65)',
  },
  qLine: {
    display: 'grid',
    gridTemplateColumns: '64px 1fr auto',
    alignItems: 'center',
    gap: 24,
    padding: '26px 32px',
  },
  qNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 18,
    color: 'var(--brume)',
    opacity: 0.55,
  },
  qText: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 22,
    lineHeight: 1.25,
    color: 'var(--brume)',
    margin: 0,
  },
  qTextEm: { fontStyle: 'italic', fontWeight: 400 },
  toggle: {
    width: 28,
    height: 28,
    border: '1px solid var(--line-on-nuit)',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--brume)',
    fontFamily: 'var(--font-micro)',
    fontSize: 13,
    transition: 'transform 240ms var(--ease-out-soft), background 240ms var(--ease-out-soft)',
  },
  toggleOpen: {
    background: 'var(--brume)',
    color: 'var(--nuit)',
    borderColor: 'var(--brume)',
    transform: 'rotate(45deg)',
  },
  aLine: {
    display: 'grid',
    gridTemplateColumns: '64px 1fr auto',
    gap: 24,
    padding: '0 32px 28px',
    color: 'var(--fg-on-nuit-muted)',
  },
  aText: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.6,
    margin: 0,
    color: 'var(--fg-on-nuit-muted)',
    gridColumn: '2 / 3',
    maxWidth: 640,
  },
  footer: {
    marginTop: 72,
    paddingTop: 32,
    borderTop: '1px solid var(--line-on-nuit)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 18,
  },
  footerText: {
    fontFamily: 'var(--font-body)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--fg-on-nuit-muted)',
    margin: 0,
  },
};

const FAQ_ITEMS = [
  {
    q: ['Comment se passe ', { em: 'une collaboration' }, ' avec vous ?'],
    a: 'Toujours pareil : un appel découverte gratuit (30 min), puis un cahier de prise de brief écrit à quatre mains. Je propose ensuite un devis détaillé. Une fois validé, on travaille en deux étapes maximum : une direction posée, puis les déclinaisons. Pas de boucle de revue infinie.',
    topic: 'fonctionnement',
  },
  {
    q: ['Quels sont vos ', { em: 'délais' }, ' habituels ?'],
    a: 'Identité visuelle complète : 4 à 6 semaines. Carte de menu ou plaquette : 10 à 14 jours. Site one-pager : 3 à 5 semaines. Je n\'accepte qu\'un projet de fond par mois pour garder du temps disponible pour mes clients en forfait.',
    topic: 'délais',
  },
  {
    q: ['Qu\'entendez-vous par ', { em: 'éco-conception' }, ' ?'],
    a: 'Concrètement : choix des papiers (recyclés, FSC, formats qui ne génèrent pas de chute), encres végétales quand c\'est pertinent, et surtout : ne produire que ce qui sera vraiment utilisé. Le support le plus écologique reste celui qu\'on n\'imprime pas pour rien.',
    topic: 'éco-conception',
  },
  {
    q: ['Travaillez-vous ', { em: 'à distance' }, ' ?'],
    a: 'Oui, principalement. Je suis basée à Lille mais 80 % de mes clients sont ailleurs en France. Visios ciblées, échanges écrits, et un Notion partagé pour suivre l\'avancement. Je me déplace pour les projets locaux ou les lancements importants.',
    topic: 'collaboration',
  },
  {
    q: ['À qui appartiennent ', { em: 'les fichiers' }, ' à la fin ?'],
    a: 'À vous, sans condition. Vous recevez l\'ensemble des fichiers sources (.ai, .indd, .psd) et exportés, plus une licence d\'usage illimitée. C\'est précisé en clair sur le devis dès le départ. Aucune dépendance à long terme.',
    topic: 'propriété',
  },
];

function FAQRow({ item, index, open, onToggle }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...faqStyles.rowBase,
        ...(hover ? faqStyles.rowHover : null),
        ...(open  ? faqStyles.rowOpen  : null),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          ...faqStyles.qLine,
          width: '100%',
          background: 'none',
          border: 0,
          cursor: 'pointer',
          color: 'inherit',
          fontFamily: 'inherit',
          textAlign: 'left',
        }}
      >
        <span style={faqStyles.qNum}>{String(index + 1).padStart(2, '0')}</span>
        <h3 style={faqStyles.qText}>
          {item.q.map((part, i) =>
            typeof part === 'string'
              ? <React.Fragment key={i}>{part}</React.Fragment>
              : <em key={i} style={faqStyles.qTextEm}>{part.em}</em>
          )}
        </h3>
        <span style={{ ...faqStyles.toggle, ...(open ? faqStyles.toggleOpen : null) }} aria-hidden="true">+</span>
      </button>

      <div style={{
        maxHeight: open ? 320 : 0,
        opacity: open ? 1 : 0,
        transition: 'max-height 400ms var(--ease-out-soft), opacity 280ms var(--ease-out-soft)',
        overflow: 'hidden',
      }}>
        <div style={faqStyles.aLine}>
          <p style={faqStyles.aText}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ({ initialOpen = 0 }) {
  const [openIndex, setOpenIndex] = React.useState(initialOpen);
  React.useEffect(() => { setOpenIndex(initialOpen); }, [initialOpen]);
  return (
    <section id="faq" style={faqStyles.section} data-screen-label="06 FAQ">
      <div style={faqStyles.inner}>
        <div style={faqStyles.head}>
          <div>
            <p style={faqStyles.eyebrow}>
              <span style={faqStyles.eyebrowDot} />Questions fréquentes
            </p>
            <h2 style={faqStyles.h2}>
              Tout ce que vous voudrez sans doute me <em style={faqStyles.emp}>demander</em>.
            </h2>
          </div>
          <p style={faqStyles.intro}>
            Cinq questions qui reviennent à chaque premier rendez-vous. Si la vôtre n'est pas là, écrivez-moi : j'enrichis cette page régulièrement.
          </p>
        </div>

        <div style={faqStyles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <FAQRow
              key={i}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div style={faqStyles.footer}>
          <p style={faqStyles.footerText}>Une autre question ? Posez-la simplement.</p>
          <a href="contact.html" className="btn btn--brume">
            Poser ma question
          </a>
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
