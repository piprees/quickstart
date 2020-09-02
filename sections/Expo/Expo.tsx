import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { getI18nPaths, getI18nProps, withI18n } from '../../util/i18n'

export function Expo(): JSX.Element {
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

export const getStaticProps = async (ctx) => ({
  props: await getI18nProps(ctx, ['common', 'Expo']),
})

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false,
})

export default withI18n(Expo)
