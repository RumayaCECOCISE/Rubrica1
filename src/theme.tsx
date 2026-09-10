import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Mode = 'light' | 'dark';

export interface Palette {
  surface: string;
  fg: string;
  muted: string;
  line: string;
  accent: string;
  accent2: string;
  neutralBar: string;
}

const PALETTE: Palette = {
  surface: 'var(--c-surface)',
  fg: 'var(--c-fg)',
  muted: 'var(--c-muted)',
  line: 'var(--c-line)',
  accent: 'var(--c-accent)',
  accent2: 'var(--c-accent-2)',
  neutralBar: 'var(--c-fg)',
};

export const PALETTES: Record<Mode, Palette> = {
  light: PALETTE,
  dark: PALETTE,
};

interface Ctx {
  mode: Mode;
  palette: Palette;
  toggle: () => void;
}

const ThemeCtx = createContext<Ctx>({
  mode: 'light',
  palette: PALETTES.light,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <ThemeCtx.Provider value={{ mode, palette: PALETTES[mode], toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
