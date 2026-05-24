/* FAQ.jsx — Nuit surface, 8 questions SEO. */

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
    gap: 12,
  },
  rowBase: {
    border: '1px solid var(--line-on-nuit)',
    transition: 'border-color 240ms var(--ease-out-soft)',
    cursor: 'pointer',
    overflow: 'hidden',
    background: 'transparent',
    padding: 0,
    color: 'inherit',
    width: '100%',
    textAlign: 'left',
    display: 'block',
  },
  rowHover: { borderColor: 'rgba(186, 209, 253, 0.45)' },
  rowOpen:  { borderColor: 'rgba(186, 209, 253, 0.65)' },
  qLine: {
    display: 'grid',
    gridTemplateColumns: '56px 1fr auto',
    alignItems: 'center',
    gap: 24,
    padding: '22px 28px',
  },
  qNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'var(--brume)',
    opacity: 0.5,
  },
  qText: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 20,
    lineHeight: 1.25,
    color: 'var(--brume)',
    margin: 0,
  },
  qTextEm: { fontStyle: 'italic', fontWeight: 400 },
  toggle: {
    width: 28, height: 28,
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
    padding: '0 28px 24px',
    paddingLeft: 108,
  },
  aText: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.65,
    margin: 0,
    color: 'var(--fg-on-nuit-muted)',
    maxWidth: 640,
  },
  footer: {
    marginTop: 64,
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
    q: ['Qu\'est-ce qu\'un ', { em: 'design éco-responsable' }, ' ?'],
    a: 'Le design éco-responsable, c\'est concevoir des supports en tenant compte de leur impact réel : choix des matières (papiers recyclés, FSC), formats qui limitent les chutes, encres végétales si pertinent — et surtout, ne produire que ce qui sera vraiment utilisé. Le support le plus responsable reste celui qu\'on n\'imprime pas inutilement.',
  },
  {
    q: ['Comment créer des supports ', { em: 'faciles à utiliser en interne' }, ' ?'],
    a: 'En concevant des fichiers organisés, avec des templates bien structurés et une documentation courte. L\'objectif est que n\'importe quel membre de votre équipe puisse reprendre, modifier ou réimprimer un support sans avoir besoin de faire appel à un graphiste à chaque fois.',
  },
  {
    q: ['Pourquoi une ', { em: 'identité visuelle cohérente' }, ' est importante ?'],
    a: 'Une identité cohérente, c\'est ce qui permet à votre communication d\'être reconnaissable immédiatement. Quand chaque support parle le même langage visuel, vous gagnez en crédibilité, en clarté et en confiance — que ce soit auprès de clients, de partenaires ou d\'équipes en interne.',
  },
  {
    q: ['Peut-on travailler ensemble ', { em: 'à distance' }, ' ?'],
    a: 'Oui, principalement. Je suis basée à Lille mais la majorité de mes collaborations se font à distance : visios ciblées, échanges écrits efficaces, Notion partagé pour le suivi. Je me déplace pour les projets locaux ou les moments clés qui le nécessitent vraiment.',
  },
  {
    q: ['Créez-vous aussi des ', { em: 'sites internet' }, ' ?'],
    a: 'Oui — des sites simples, clairs et pensés pour être facilement mis à jour. Je travaille principalement sur des sites one-pager ou vitrines (Showit, Webflow, ou HTML statique selon le besoin). L\'objectif reste le même : que le site soit utile, pas juste joli.',
  },
  {
    q: ['Les ', { em: 'templates' }, ' sont-ils modifiables facilement ?'],
    a: 'C\'est justement l\'un des points centraux de ma façon de travailler. Les templates que je crée sont pensés pour être utilisés par des non-graphistes : fichiers Canva, InDesign ou Google Slides bien structurés, avec des zones de texte claires et une logique facile à comprendre.',
  },
  {
    q: ['Travaillez-vous avec des ', { em: 'PME' }, ' ?'],
    a: 'Oui. Je travaille avec des structures de toutes tailles : associations, PME, indépendants, artisans. Ce qui compte, c\'est moins la taille que le contexte : vous avez des supports à créer ou à faire évoluer, et vous voulez qu\'ils soient utiles sur le long terme.',
  },
  {
    q: ['Comment rendre une ', { em: 'communication plus responsable' }, ' ?'],
    a: 'En commençant par utiliser ce qui existe déjà, en évitant de sur-produire, et en concevant des supports pensés pour durer ou évoluer plutôt que d\'être remplacés tous les six mois. La responsabilité en communication passe aussi par la simplicité : moins de supports, mieux conçus, vraiment utilisés.',
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
        maxHeight: open ? 400 : 0,
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
    <section id="faq" style={faqStyles.section} data-screen-label="08 FAQ">
      <div style={faqStyles.inner}>
        <div style={faqStyles.head}>
          <div>
            <p style={faqStyles.eyebrow}>
              <span style={faqStyles.eyebrowDot} />Questions fréquentes
            </p>
            <h2 style={faqStyles.h2}>
              Tout ce que vous voulez savoir avant de <em style={faqStyles.emp}>commencer</em>.
            </h2>
          </div>
          <p style={faqStyles.intro}>
            Huit questions qui reviennent souvent. Si la vôtre n'est pas là, écrivez-moi directement.
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
          <p style={faqStyles.footerText}>Une autre question ? Posez-la directement.</p>
          <a href="contact.html" className="btn btn--brume">Poser ma question</a>
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
