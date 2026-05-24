/* StubPage.jsx — shared layout for Services / Portfolio / À propos / Contact stubs.
   Renders Header → big page heading + brief intro → optional content blocks → CTA → Footer.
   The stubs share this component to keep them visually consistent until built out. */

const stubStyles = {
  hero: {
    background: 'var(--terre)',
    color: 'var(--paille)',
    padding: '120px 0 96px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroInner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
    gap: 56,
    alignItems: 'end',
    minHeight: 'calc(60vh - 96px)',
  },
  crumbs: {
    fontFamily: 'var(--font-micro)',
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--fg-on-terre-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    margin: '0 0 28px',
  },
  crumbsDot: { width: 22, height: 1, background: 'var(--paille)', opacity: 0.55 },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(48px, 6vw, 88px)',
    lineHeight: 1.0,
    letterSpacing: '-0.015em',
    color: 'var(--paille)',
    margin: 0,
    textWrap: 'balance',
  },
  emp: { fontStyle: 'italic', color: 'var(--glycine)', fontWeight: 400 },
  intro: {
    fontFamily: 'var(--font-body)',
    fontSize: 19,
    lineHeight: 1.55,
    color: 'var(--paille)',
    margin: 0,
    paddingBottom: 8,
    maxWidth: 460,
  },
  gutter: {
    position: 'absolute',
    right: 16,
    top: 24,
    bottom: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--fg-on-terre-muted)',
    pointerEvents: 'none',
  },
  gutterNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 16,
  },
  gutterWord: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    letterSpacing: '0.32em',
    textTransform: 'lowercase',
  },
  body: {
    background: 'var(--bone)',
    color: 'var(--terre)',
    padding: '120px 0',
  },
  bodyInner: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 40px',
  },
  note: {
    border: '1px solid var(--line-on-bone)',
    background: 'var(--bg-card)',
    padding: '32px 36px',
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.55,
    color: 'var(--terre)',
    maxWidth: 720,
    position: 'relative',
  },
  noteLabel: {
    position: 'absolute',
    top: -9,
    left: 22,
    background: 'var(--bg-card)',
    padding: '0 12px',
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.30em',
    textTransform: 'uppercase',
    color: 'var(--terre-600)',
  },
  blocksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    marginTop: 72,
  },
  block: {
    background: 'var(--bg-card)',
    border: '1px solid var(--line-on-bone)',
    padding: '32px 28px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    minHeight: 220,
  },
  blockNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 30,
    color: 'var(--terre)',
    opacity: 0.85,
    lineHeight: 1,
  },
  blockTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 24,
    lineHeight: 1.15,
    color: 'var(--terre)',
    margin: 0,
  },
  blockTitleEm: { fontStyle: 'italic', fontWeight: 400, color: 'var(--glycine-900)' },
  blockBody: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--terre-600)',
    margin: 0,
  },
};

function StubPage({ crumb, gutterNum, gutterWord, title, intro, note, blocks, finalCTA = true }) {
  return (
    <>
      <Header />
      <main>
        <section style={stubStyles.hero} data-screen-label="00 Hero">
          <div style={stubStyles.heroInner}>
            <div>
              <p style={stubStyles.crumbs}>
                <span style={stubStyles.crumbsDot} />
                Accueil · {crumb}
              </p>
              <h1 style={stubStyles.h1}>
                {title.map((part, i) =>
                  typeof part === 'string'
                    ? <React.Fragment key={i}>{part}</React.Fragment>
                    : <em key={i} style={stubStyles.emp}>{part.em}</em>
                )}
              </h1>
            </div>
            <p style={stubStyles.intro}>{intro}</p>
          </div>
          <div style={stubStyles.gutter}>
            <span style={stubStyles.gutterNum}>{gutterNum}</span>
            <span style={stubStyles.gutterWord}>{gutterWord}</span>
          </div>
        </section>

        <section style={stubStyles.body} data-screen-label="01 Contenu">
          <div style={stubStyles.bodyInner}>
            {note && (
              <div style={stubStyles.note}>
                <span style={stubStyles.noteLabel}>Page en cours</span>
                <p style={{ margin: 0 }}>{note}</p>
              </div>
            )}

            {blocks && (
              <div style={stubStyles.blocksGrid}>
                {blocks.map((b, i) => (
                  <article key={i} style={stubStyles.block}>
                    <span style={stubStyles.blockNum}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 style={stubStyles.blockTitle}>
                      {b.title.map((part, j) =>
                        typeof part === 'string'
                          ? <React.Fragment key={j}>{part}</React.Fragment>
                          : <em key={j} style={stubStyles.blockTitleEm}>{part.em}</em>
                      )}
                    </h3>
                    <p style={stubStyles.blockBody}>{b.body}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {finalCTA && <FinalCTA />}
      </main>
      <Footer />
    </>
  );
}

window.StubPage = StubPage;
