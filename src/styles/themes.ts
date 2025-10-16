export const themes = {
  light: {
    // Backgrounds
    bg: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
      card: 'bg-white',
      nav: 'bg-white/80 backdrop-blur-xl border-gray-200',
      mesh: 'bg-gradient-to-b from-sage-100 to-terra-100',
    },
    // Text colors
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      tertiary: 'text-gray-600',
      muted: 'text-gray-500',
      inverse: 'text-white',
    },
    // Borders
    border: {
      primary: 'border-gray-200',
      secondary: 'border-gray-300',
      accent: 'border-sage-300',
    },
    // Cards & containers
    card: {
      base: 'bg-white border border-gray-200 shadow-lg',
      glass: 'bg-white/80 backdrop-blur-xl border border-gray-200/50',
      hover: 'hover:border-sage-400',
    },
    // Buttons remain same (gradients work on both)
    button: {
      primary: 'bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600',
      secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
      outline: 'border-2 border-gray-300 hover:border-sage-500',
    },
    // Mesh/gradient backgrounds for hero sections
    mesh: {
      blob1: 'bg-sage-200',
      blob2: 'bg-terra-200',
      blob3: 'bg-earth-200',
    },
  },
  dark: {
    // Backgrounds
    bg: {
      primary: 'bg-black',
      secondary: 'bg-zinc-900',
      tertiary: 'bg-zinc-800',
      card: 'bg-zinc-900',
      nav: 'bg-black/30 backdrop-blur-xl border-white/10',
      mesh: 'bg-black',
    },
    // Text colors
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-400',
      muted: 'text-gray-500',
      inverse: 'text-gray-900',
    },
    // Borders
    border: {
      primary: 'border-white/10',
      secondary: 'border-white/20',
      accent: 'border-sage-500/30',
    },
    // Cards & containers
    card: {
      base: 'bg-zinc-900/80 border border-white/10 shadow-2xl',
      glass: 'bg-zinc-900/80 backdrop-blur-xl border border-white/10',
      hover: 'hover:border-sage-500/30',
    },
    // Buttons
    button: {
      primary: 'bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600',
      secondary: 'bg-white/10 hover:bg-white/20 text-white',
      outline: 'border-2 border-white/20 hover:border-white/40',
    },
    // Mesh/gradient backgrounds
    mesh: {
      blob1: 'bg-sage-500',
      blob2: 'bg-terra-500',
      blob3: 'bg-earth-500',
    },
  },
};

// Helper function to get theme classes
export const getThemeClasses = (theme: 'light' | 'dark') => {
  return themes[theme];
};
