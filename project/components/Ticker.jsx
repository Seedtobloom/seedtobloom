/* Ticker.jsx — seamless horizontal marquee, Terre surface (immediately after Hero).
   Reinforces key phrases naturally for users and AI search crawlers. */

(function () {
  const KF_ID = '__ticker-kf';
  if (!document.getElementById(KF_ID)) {
    const s = document.createElement('style');
    s.id = KF_ID;
    s.textContent = `
      @keyframes ticker-slide {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .ticker-track {
        display: flex;
        align-items: center;
        white-space: nowrap;
        animation: ticker-slide 36s linear infinite;
      }
      .ticker-track:hover { animation-play-state: paused; }
    `;
    document.head.appendChild(s);
  }
})();

const tickerStyles = {
  outer: {
    background: 'var(--terre)',
    borderTop: '1px solid var(--line-on-terre)',
    overflow: 'hidden',
    padding: '18px 0',
  },
  phrase: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 'clamp(17px, 2vw, 26px)',
    color: 'var(--paille)',
    padding: '0 44px',
    letterSpacing: '-0.005em',
    flexShrink: 0,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: 'var(--paille)',
    opacity: 0.32,
    flexShrink: 0,
    display: 'inline-block',
  },
};

const PHRASES = [
  'Pensé pour durer. Conçu pour être utilisé.',
  'Une communication claire, même à plusieurs.',
  'Le durable commence par l\'utile.',
  'Des supports adaptés à votre réalité.',
  'Le beau ne sert à rien s\'il complique tout.',
];

function Ticker() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div style={tickerStyles.outer} aria-hidden="true" data-screen-label="01b Ticker">
      <div className="ticker-track">
        {items.map((phrase, i) => (
          <React.Fragment key={i}>
            <span style={tickerStyles.phrase}>{phrase}</span>
            <span style={tickerStyles.dot} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

window.Ticker = Ticker;
