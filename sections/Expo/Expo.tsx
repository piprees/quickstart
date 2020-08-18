import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LocaleCY from '../../public/locales/cy/Expo.json'
import LocaleEN from '../../public/locales/en/Expo.json'
import { addResource, useTranslation } from '../../util/i18n'

export const Expo = (): JSX.Element => {
  addResource('en', 'Expo', LocaleEN)
  addResource('cy', 'Expo', LocaleCY)
  const { t } = useTranslation()

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
