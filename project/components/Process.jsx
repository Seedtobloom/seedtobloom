/* Process.jsx — Bone surface. Collaboration en 4 étapes. */

const procStyles = {
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
    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
    gap: 56,
    marginBottom: 80,
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
  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    borderTop: '1px solid var(--line-on-bone)',
  },
  step: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr 1fr',
    gap: 40,
    padding: '36px 0',
    borderBottom: '1px solid var(--line-on-bone)',
    alignItems: 'start',
  },
  stepNum: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 44,
    color: 'var(--terre)',
    opacity: 0.75,
    lineHeight: 1,
    margin: 0,
  },
  stepTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 26,
    lineHeight: 1.2,
    color: 'var(--terre)',
    margin: 0,
    textWrap: 'balance',
    paddingTop: 8,
  },
  stepBody: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.55,
    color: 'var(--terre-600)',
    margin: 0,
    paddingTop: 12,
  },
};

const STEPS = [
  {
    n: '1',
    title: 'Comprendre',
    body: 'On échange sur vos objectifs, vos contraintes et vos usages réels. Pas de questionnaire interminable — une conversation.',
  },
  {
    n: '2',
    title: 'Concevoir',
    body: 'Je crée des supports cohérents, utilisables et adaptés à votre quotidien. Pas à un cahier des charges théorique.',
  },
  {
    n: '3',
    title: 'Structurer',
    body: 'Je mets en place des outils simples à reprendre par vos équipes. Fichiers organisés, templates clairs, documentation courte.',
  },
  {
    n: '4',
    title: 'Faire évoluer',
    body: 'Votre communication continue d\'évoluer avec un accompagnement sur le long terme si besoin. Vous n\'êtes jamais seul·e.',
  },
];

function Process() {
  return (
    <section id="fonctionnement" style={procStyles.section} data-screen-label="07 Process">
      <div style={procStyles.inner}>
        <div style={procStyles.head}>
          <div>
            <p style={procStyles.eyebrow}>
              <span style={procStyles.eyebrowDot} />Fonctionnement
            </p>
            <h2 style={procStyles.h2}>
              Une collaboration <em style={procStyles.emp}>simple, claire</em> et pensée pour durer.
            </h2>
          </div>
          <p style={procStyles.intro}>
            Quatre étapes, pas plus. Pensées pour aller vite et juste, sans boucles de révision infinies.
          </p>
        </div>

        <div style={procStyles.steps}>
          {STEPS.map((step) => (
            <div key={step.n} style={procStyles.step}>
              <span style={procStyles.stepNum}>{step.n}</span>
              <h3 style={procStyles.stepTitle}>{step.title}</h3>
              <p style={procStyles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
