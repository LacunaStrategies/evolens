import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { useTranslate } from '@/localization/utils';
import ScreenWrapper from '@/shared/components/ScreenWrapper';
import { ms } from '@/shared/utils';
import { TextStyles } from '@/theme';

export function HomeScreen() {

  const translate = useTranslate();

  const header = (
    <View>
      <Text style={[TextStyles.h3, styles.text]}>
        {translate('auth.welcome')} User!
      </Text>
      <Text style={[TextStyles.bodySmall, styles.mutedText, styles.subtitle]}>
        {translate('home.posts_subtitle')}
      </Text>
    </View>
  );

  return (
    <ScreenWrapper>
      {header}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create((theme) => ({
  list: {
    padding: ms(20),
    gap: ms(12),
  },
  text: {
    color: theme.colors.typography,
  },
  mutedText: {
    color: theme.colors.textGray,
  },
  primaryText: {
    color: theme.colors.primary,
  },
  subtitle: {
    marginTop: ms(4),
  },
  addButton: {
    marginTop: ms(20),
    marginBottom: ms(12),
  },
  card: {
    gap: ms(4),
    padding: ms(16),
    borderRadius: ms(12),
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    backgroundColor: theme.colors.surface,
  },
  cardSelected: {
    borderColor: theme.colors.primary,
  },
  detailCard: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primaryTransparent,
  },
  detailLoader: {
    paddingVertical: ms(12),
  },
  sectionTitle: {
    marginTop: ms(20),
  },
  stateBox: {
    paddingVertical: ms(40),
    alignItems: 'center',
  },
  retryButton: {
    marginTop: ms(16),
  },
  footerLoader: {
    paddingVertical: ms(16),
  },
}));
