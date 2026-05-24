/* Ticker.jsx — seamless horizontal marquee, Terre surface (après Hero). */

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
        animation: ticker-slide 40s linear infinite;
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
    fontSize: 'clamp(16px, 1.8vw, 24px)',
    color: 'var(--paille)',
    padding: '0 36px',
    letterSpacing: '-0.005em',
    flexShrink: 0,
  },
  sep: {
    fontFamily: 'var(--font-micro)',
    fontSize: 10,
    color: 'var(--paille)',
    opacity: 0.28,
    letterSpacing: '0.08em',
    flexShrink: 0,
  },
};

const PHRASES = [
  'Communication claire',
  'Supports durables',
  'Templates faciles à utiliser',
  'Design pensé pour durer',
  'Identité cohérente',
  'Communication responsable',
  'Supports vraiment utiles',
];

function Ticker() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div style={tickerStyles.outer} aria-hidden="true" data-screen-label="01b Ticker">
      <div className="ticker-track">
        {items.map((phrase, i) => (
          <React.Fragment key={i}>
            <span style={tickerStyles.phrase}>{phrase}</span>
            <span style={tickerStyles.sep}>—</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

window.Ticker = Ticker;
