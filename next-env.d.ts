/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-auth" />
/// <reference types="next-auth/client" />
/// <reference types="next-auth/providers" />
/// <reference types="optimized-images-loader" />

declare module 'next-optimized-images'
declare module 'next-translate/I18nProvider'
declare module 'next-offline'

declare module 'next-translate/useTranslation' {
  export default function useTranslation(): {
    t: (key: string, query?: { [name: string]: string | number }) => string
    lang: string
  }
}

declare module 'next-translate/appWithI18n' {
  interface Config {
    defaultLanguage?: string
    allLanguages?: string[]
    ignoreRoutes?: string[]
    redirectToDefaultLang?: boolean
    currentPagesDir?: string
    finalPagesDir?: string
    localesPath?: string
    loadLocaleFrom?: (lang: string, ns: string) => void
    pages?: { [name: string]: string[] }
  }

  export default function appWithI18n(App: FunctionComponent, config: Config)
}

declare module 'next-translate/I18nProvider' {
  export default function I18nProvider(props: {
    lang: string
    namespaces: object
    children: ReactNode
  }): ReactElement
}

declare module 'next-translate/Router' {
  interface RouterAdditions {
    pushI18n: (path: string, as?: string, options?: {}) => void
    replaceI18n: (path: string, as?: string, options?: {}) => void
  }
  export type Router = import('next/router').SingletonRouter & RouterAdditions
  declare const _default: Router
  export default _default
}

declare module 'next-translate/Link' {
  type NextLink = import('next/link')
  declare const _default: NextLink
  export default _default
}
