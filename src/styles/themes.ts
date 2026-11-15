/**
 * References:
 * - Introduction: https://www.unistyl.es/v3/start/getting-started
 * - Migration from Unistyle v2 to v3: https://www.unistyl.es/v3/start/migration-guide
 */

// Colors that look correct on both light and dark surfaces — kept in a
// single map so each theme only declares its differences.
const constantsColors = {
  danger: '#dc3545',
  grey: '#B0B0B0',
  black: '#000000',
  white: '#ffffff',
  blue: '#001EB9',
  light: '#f8f9fa',
  green: '#62EA9F',
  cancel: '#EB5757',
  // Text color to use on top of a primary-colored fill (white reads on
  // the cyan primary in both themes).
  onPrimary: '#ffffff',
};

const constantsMargins = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

const constantsRadius = {
  sm: '0.3125rem',
  md: '0.625rem',
  lg: '0.9375rem',
  xl: '1.25rem',
  full: '9999px',
};

export const lightTheme = {
  colors: {
    ...constantsColors,
    typography: '#000000',
    background: '#ffffff',
    // Elevated UI surface (cards, segmented controls, language pills, …).
    // Different from `background` so screens render a subtle layer on the
    // root background — in dark mode this becomes a near-black charcoal
    // instead of pure-black, which is what users actually want.
    surface: '#ffffff',
    barStyle: 'dark-content',
    opacity50: 'rgba(1,1,1,0.5)',
    textInputColor: 'rgba(217, 217, 217,0.2)',
    placeholder: 'rgba(1,1,1,0.52)',
    darkwhite: '#000000',
    primary: '#00BFFF',
    primaryTransparent: '#E1F8FF',
    textGray: '#6B7F85',
    primaryText: '#394347',
    fadedWhite: '#F7F8F9',
    borderGray: '#E8ECF4',
    iconGray: '#8BA1A8',
  },
  margins: {
    ...constantsMargins,
  },
  radius: {
    ...constantsRadius,
  },
} as const;

export const darkTheme = {
  colors: {
    ...constantsColors,
    typography: '#ffffff',
    background: '#000000',
    surface: '#1A1A1A',
    barStyle: 'light-content',
    opacity50: 'rgba(201, 201, 201,0.5)',
    textInputColor: '#000000',
    placeholder: '#f8f9fa',
    darkwhite: '#ffffff',
    primary: '#00BFFF',
    primaryTransparent: '#001A1F',
    textGray: '#6B7F85',
    primaryText: '#394347',
    fadedWhite: '#1A1A1A',
    borderGray: '#2A2A2A',
    iconGray: '#8BA1A8',
  },
  margins: {
    ...constantsMargins,
  },
  radius: {
    ...constantsRadius,
  },
} as const;

export const lightShadCnTheme = {
  colors: {
    background: 'rgb(255, 255, 255)',
    foreground: 'rgb(9, 9, 11)',
    card: 'rgb(255, 255, 255)',
    card_foreground: 'rgb(9, 9, 11)',
    popover: 'rgb(255, 255, 255)',
    popover_foreground: 'rgb(9, 9, 11)',
    primary: 'rgb(20, 71, 230)',
    primary_foreground: 'rgb(239, 246, 255)',
    secondary: 'rgb(244, 244, 245)',
    secondary_foreground: 'rgb(24, 24, 27)',
    muted: 'rgb(244, 244, 245)',
    muted_foreground: 'rgb(113, 113, 123)',
    accent: 'rgb(244, 244, 245)',
    accent_foreground: 'rgb(24, 24, 27)',
    destructive: 'rgb(231, 0, 11)',
    border: 'rgb(228, 228, 231)',
    input: 'rgb(228, 228, 231)',
    ring: 'rgb(159, 159, 169)',
    chart_1: 'rgb(212, 212, 216)',
    chart_2: 'rgb(113, 113, 123)',
    chart_3: 'rgb(82, 82, 92)',
    chart_4: 'rgb(63, 63, 70)',
    chart_5: 'rgb(39, 39, 42)',
    radius: '0.625rem',
    sidebar: 'rgb(250, 250, 250)',
    sidebar_foreground: 'rgb(9, 9, 11)',
    sidebar_primary: 'rgb(21, 93, 252)',
    sidebar_primary_foreground: 'rgb(239, 246, 255)',
    sidebar_accent: 'rgb(244, 244, 245)',
    sidebar_accent_foreground: 'rgb(24, 24, 27)',
    sidebar_border: 'rgb(228, 228, 231)',
    sidebar_ring: 'rgb(159, 159, 169)',
  },
  margins: {
    ...constantsMargins,
  },
  radius: {
    ...constantsRadius,
  },
};

export const darkChadCnTheme = {
  colors: {
    background: 'rgb(9, 9, 11)',
    foreground: 'rgb(250, 250, 250)',
    card: 'rgb(24, 24, 27)',
    card_foreground: 'rgb(250, 250, 250)',
    popover: 'rgb(24, 24, 27)',
    popover_foreground: 'rgb(250, 250, 250)',
    primary: 'rgb(25, 60, 184)',
    primary_foreground: 'rgb(239, 246, 255)',
    secondary: 'rgb(39, 39, 42)',
    secondary_foreground: 'rgb(250, 250, 250)',
    muted: 'rgb(39, 39, 42)',
    muted_foreground: 'rgb(159, 159, 169)',
    accent: 'rgb(39, 39, 42)',
    accent_foreground: 'rgb(250, 250, 250)',
    destructive: 'rgb(255, 100, 103)',
    border: 'rgba(255, 255, 255, 0.1)',
    input: 'rgba(255, 255, 255, 0.15)',
    ring: 'rgb(113, 113, 123)',
    chart_1: 'rgb(212, 212, 216)',
    chart_2: 'rgb(113, 113, 123)',
    chart_3: 'rgb(82, 82, 92)',
    chart_4: 'rgb(63, 63, 70)',
    chart_5: 'rgb(39, 39, 42)',
    sidebar: 'rgb(24, 24, 27)',
    sidebar_foreground: 'rgb(250, 250, 250)',
    sidebar_primary: 'rgb(43, 127, 255)',
    sidebar_primary_foreground: 'rgb(239, 246, 255)',
    sidebar_accent: 'rgb(39, 39, 42)',
    sidebar_accent_foreground: 'rgb(250, 250, 250)',
    sidebar_border: 'rgba(255, 255, 255, 0.1)',
    sidebar_ring: 'rgb(113, 113, 123)',
  },
  margins: {
    ...constantsMargins,
  },
  radius: {
    ...constantsRadius,
  },
};
