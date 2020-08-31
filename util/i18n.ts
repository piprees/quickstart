import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation as i18nextUseTranslation } from 'react-i18next'

async function getLocaleJSON(language: string, namespace: string = 'common') {
  return await import(
    /* webpackInclude: /\.json$/ */
    /* webpackChunkName: "locales" */
    /* webpackMode: "lazy-once" */
    /* webpackPrefetch: true */
    /* webpackPreload: true */
    `../locales/${language}/${namespace}.json`
  )
}

async function addResource(language: string, namespace: string) {
  const resources = await getLocaleJSON(language, namespace)
  return i18next.addResourceBundle(language, namespace, resources, true, false)
}

export function useTranslation(namespace: string = 'common') {
  const loadedLanguage = i18next.language
  const language =
    typeof loadedLanguage === 'string' && loadedLanguage.length > 0
      ? loadedLanguage
      : 'en'

  const languagePackHasLoaded = i18next.hasResourceBundle(language, namespace)
  const [hasLoaded, setHasLoaded] = useState(languagePackHasLoaded)

  useEffect(() => {
    if (!hasLoaded)
      void addResource(language, namespace).then(() => setHasLoaded(true))
  })

  return i18nextUseTranslation()
}
