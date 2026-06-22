import { defineEcConfig } from 'astro-expressive-code';

// Expressive Code config lives here (not inline in astro.config.mjs) so the
// <Code> component can be used in .astro pages — the integration requires a
// standalone config when options include non-serializable values.
export default defineEcConfig({
  themes: ['github-dark'],
  // Tune the frame chrome to the RedSec palette: warm-neutral dark surfaces,
  // 0.5px borders, no shadows/glows.
  styleOverrides: {
    borderRadius: '4px',
    borderColor: '#2E2E2E',
    borderWidth: '0.5px',
    codeFontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
    codeFontSize: '0.85rem',
    codeBackground: '#1B1B1B',
    frames: {
      editorActiveTabIndicatorBottomColor: '#B01927',
      editorActiveTabBackground: '#1B1B1B',
      editorTabBarBackground: '#161616',
      terminalTitlebarBackground: '#161616',
      terminalBackground: '#1B1B1B',
      terminalTitlebarDotsForeground: '#6E6E6E',
      shadowColor: 'transparent',
    },
  },
  useThemedScrollbars: false,
  defaultProps: {
    wrap: false,
    showLineNumbers: false,
  },
});
