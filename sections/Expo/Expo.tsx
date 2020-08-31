import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useTranslation } from '../../util/i18n'

export function Expo(): JSX.Element {
  const { t } = useTranslation('Expo')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('Expo:Main')}
        <span role="img" aria-label={t('Expo:MainImageLabel')}>
          {t('Expo:MainImage')}
        </span>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})

export default Expo
