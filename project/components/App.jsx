/* App.jsx — homepage root. Wires Tweaks panel + composes sections in surface rhythm:
   Hero (Terre) → Portfolio (Bone) → ForWhom (Nuit) → Services (Bone) → Approach (Terre)
   → Testimonials (Bone) → FAQ (Nuit) → FinalCTA (Terre) → Footer (Nuit) */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "portraitVariant": "terre",
  "displayWeight": 300,
  "showPainStrip": true,
  "faqStartOpen": true,
  "compactSections": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply display weight globally via CSS custom property
  React.useEffect(() => {
    document.documentElement.style.setProperty('--display-weight', String(t.displayWeight));
    // Apply by setting font-weight on all .display, .h-section, h1..h5 not styled inline.
    const styleEl = document.getElementById('__tweak-display-weight');
    if (styleEl) styleEl.remove();
    const s = document.createElement('style');
    s.id = '__tweak-display-weight';
    s.textContent = `
      h1, h2, h3, h4, h5, .display, .h-section { font-weight: ${t.displayWeight} !important; }
    `;
    document.head.appendChild(s);
  }, [t.displayWeight]);

  React.useEffect(() => {
    const styleEl = document.getElementById('__tweak-compact');
    if (styleEl) styleEl.remove();
    if (t.compactSections) {
      const s = document.createElement('style');
      s.id = '__tweak-compact';
      s.textContent = `section { padding-top: 88px !important; padding-bottom: 88px !important; }`;
      document.head.appendChild(s);
    }
  }, [t.compactSections]);

  return (
    <>
      <Header />
      <main>
        <Hero portraitVariant={t.portraitVariant} showPainStrip={t.showPainStrip} />
        <Portfolio />
        <ForWhom />
        <Services />
        <Approach />
        <Testimonials />
        <FAQ initialOpen={t.faqStartOpen ? 0 : -1} />
        <FinalCTA />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks · Seedtobloom">
        <TweakSection label="Hero" />
        <TweakRadio
          label="Portrait halftone"
          value={t.portraitVariant}
          options={['terre', 'nuit']}
          onChange={(v) => setTweak('portraitVariant', v)}
        />
        <TweakToggle
          label="Pain points strip"
          value={t.showPainStrip}
          onChange={(v) => setTweak('showPainStrip', v)}
        />

        <TweakSection label="Typographie" />
        <TweakRadio
          label="Poids des titres"
          value={String(t.displayWeight)}
          options={['300', '400']}
          onChange={(v) => setTweak('displayWeight', Number(v))}
        />

        <TweakSection label="FAQ" />
        <TweakToggle
          label="Première question ouverte"
          value={t.faqStartOpen}
          onChange={(v) => setTweak('faqStartOpen', v)}
        />

        <TweakSection label="Rythme" />
        <TweakToggle
          label="Sections compactes"
          value={t.compactSections}
          onChange={(v) => setTweak('compactSections', v)}
        />
      </TweaksPanel>
    </>
  );
}

window.App = App;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
