import i18next from 'i18next'

export const addResource = (lng: string, ns: string, resources: any) =>
  i18next.addResourceBundle(lng, ns, resources, true, true)

export { useTranslation } from 'react-i18next'
