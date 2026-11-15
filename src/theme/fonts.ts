import { Geist_400Regular, Geist_600SemiBold, Geist_700Bold } from '@expo-google-fonts/geist';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

// Font family names are the keys passed to `useFonts` (see `fontAssets`), so the
// same string works on iOS and Android. Load weights in `fontAssets` before use.
export const fonts = {
  geist: {
    regular: 'Geist_400Regular',
    semiBold: 'Geist_600SemiBold',
    bold: 'Geist_700Bold',
  },
  inter: {
    regular: 'Inter_400Regular',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
};

// Passed to `useFonts` in `useAppBootstrap`. Add a weight here before referencing it in `fonts`.
export const fontAssets = {
  Geist_400Regular,
  Geist_600SemiBold,
  Geist_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
};
