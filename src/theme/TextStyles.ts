import { StyleSheet } from 'react-native-unistyles';

import { ms } from '@/shared/utils';

import { fonts } from './fonts';

export const TextStyles = StyleSheet.create(() => ({
  // ── Headings ───────────────────────────────────────────────
  h1: {
    fontSize: ms(32),
    lineHeight: ms(40),
    fontFamily: fonts.geist.bold,
  },
  h2: {
    fontSize: ms(24),
    lineHeight: ms(32),
    fontFamily: fonts.geist.bold,
  },
  h3: {
    fontSize: ms(20),
    lineHeight: ms(28),
    fontFamily: fonts.geist.bold,
  },

  // ── Body ───────────────────────────────────────────────────
  bodyLarge: {
    fontSize: ms(18),
    lineHeight: ms(26),
    fontFamily: fonts.inter.regular,
  },
  body: {
    fontSize: ms(16),
    lineHeight: ms(24),
    fontFamily: fonts.inter.regular,
  },
  bodySmall: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontFamily: fonts.inter.regular,
  },

  // ── Emphasis (semiBold variants) ───────────────────────────
  bodyLargeSemiBold: {
    fontSize: ms(18),
    lineHeight: ms(26),
    fontFamily: fonts.inter.semiBold,
  },
  bodySemiBold: {
    fontSize: ms(16),
    lineHeight: ms(24),
    fontFamily: fonts.inter.semiBold,
  },
  bodySmallSemiBold: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontFamily: fonts.inter.semiBold,
  },

  // ── UI Elements ────────────────────────────────────────────
  button: {
    fontSize: ms(18),
    lineHeight: ms(24),
    fontFamily: fonts.inter.semiBold,
  },
  buttonSmall: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontFamily: fonts.inter.semiBold,
  },
  label: {
    fontSize: ms(16),
    lineHeight: ms(22),
    fontFamily: fonts.inter.bold,
  },
  caption: {
    fontSize: ms(12),
    lineHeight: ms(16),
    fontFamily: fonts.inter.regular,
  },
  overline: {
    fontSize: ms(10),
    lineHeight: ms(14),
    fontFamily: fonts.inter.semiBold,
    textTransform: 'uppercase' as const,
    letterSpacing: ms(1),
  },

  // ── Utility ────────────────────────────────────────────────
  error: {
    fontSize: ms(12),
    lineHeight: ms(16),
    fontFamily: fonts.inter.regular,
  },
  link: {
    fontSize: ms(16),
    lineHeight: ms(24),
    fontFamily: fonts.inter.semiBold,
    textDecorationLine: 'underline' as const,
  },
}));
