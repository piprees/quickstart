import '../sections/styles.css'
import I18nProvider from 'next-translate/I18nProvider';
import common from '../locales/en/common.json';

import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withDesign } from 'storybook-addon-designs'
import jestResults from './.jest-test-results.json';

addDecorator((StoryFn) => (
  <I18nProvider lang="en" namespaces={{ common }}>
    <StoryFn />
  </I18nProvider>
));

addDecorator(
  withTests({
    results: jestResults,
    filesExt: /((\\.spec?)|(\\.test?))?(\\.(ts|tsx|js|jsx))?$/
  })
);

addDecorator(
  withDesign()
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}