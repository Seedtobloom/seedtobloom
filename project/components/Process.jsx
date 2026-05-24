/* Process.jsx — Bone surface.
   Fonctionnement : 5 étapes numérotées, disposition liste avec hairlines. */

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
    title: 'Comprendre vos usages réels',
    body: 'Un appel de 30 minutes pour comprendre votre contexte, vos équipes, vos contraintes concrètes. Pas de questionnaire interminable.',
  },
  {
    n: '2',
    title: 'Identifier les blocages actuels',
    body: 'On analyse ensemble ce qui freine votre communication au quotidien : fichiers inutilisables, incohérences, outils inadaptés.',
  },
  {
    n: '3',
    title: 'Construire des supports adaptés',
    body: 'Des livrables pensés pour votre réalité. Pas pour un cahier des charges théorique que personne ne relit.',
  },
  {
    n: '4',
    title: 'Simplifier leur utilisation',
    body: 'Fichiers organisés, templates clairs, documentation courte. Vous repartez autonome, pas dépendant.',
  },
  {
    n: '5',
    title: 'Vous accompagner dans le temps',
    body: 'En option : un forfait mensuel pour faire évoluer votre communication sans repartir de zéro à chaque nouveau besoin.',
  },
];

function Process() {
  return (
    <section id="fonctionnement" style={procStyles.section} data-screen-label="09 Process">
      <div style={procStyles.inner}>
        <div style={procStyles.head}>
          <div>
            <p style={procStyles.eyebrow}>
              <span style={procStyles.eyebrowDot} />Fonctionnement
            </p>
            <h2 style={procStyles.h2}>
              Comment ça se passe <em style={procStyles.emp}>concrètement</em>.
            </h2>
          </div>
          <p style={procStyles.intro}>
            Cinq étapes simples, pensées pour aller vite et juste. Pas de processus sur-compliqué, pas de boucles de révision infinies.
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
