/* EditorialBanner.jsx — Nuit surface, grand texte respirant centré.
   Interruption éditoriale entre Process et Testimonials. */

const ebStyles = {
  section: {
    background: 'var(--nuit)',
    color: 'var(--brume)',
    padding: '128px 0',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 1,
  },
  phrase: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontStyle: 'italic',
    fontSize: 'clamp(38px, 6vw, 96px)',
    lineHeight: 1.06,
    letterSpacing: '-0.015em',
    color: 'var(--brume)',
    margin: 0,
    textWrap: 'balance',
  },
  accent: {
    color: 'var(--glycine)',
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--fg-on-nuit-muted)',
    margin: '32px auto 0',
    maxWidth: 540,
    fontStyle: 'italic',
  },
};

function EditorialBanner() {
  return (
    <section style={ebStyles.section} aria-label="Phrase éditoriale" data-screen-label="10 Bandeau éditorial">
      <div style={ebStyles.inner}>
        <p style={ebStyles.phrase}>
          Le design prend tout son sens{' '}
          <span style={ebStyles.accent}>quand il devient facile</span>{' '}
          à faire vivre.
        </p>
        <p style={ebStyles.sub}>
          Une identité forte doit survivre au quotidien — pas seulement briller à la présentation.
        </p>
      </div>
    </section>
  );
}

window.EditorialBanner = EditorialBanner;
