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
      <Text style={[TextStyles.h3, styles.text]}>{translate('auth.welcome')} User!</Text>
      <Text style={[TextStyles.bodySmall, styles.mutedText, styles.subtitle]}>
        {translate('home.posts_subtitle')}
      </Text>
    </View>
  );

  return <ScreenWrapper style={styles.container}>{header}</ScreenWrapper>;
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top,
    paddingLeft: rt.insets.left + ms(20),
    paddingRight: rt.insets.right + ms(20),
  },
  text: {
    color: theme.colors.foreground,
  },
  mutedText: {
    color: theme.colors.muted_foreground,
  },
  subtitle: {
    marginTop: ms(4),
  },
}));
