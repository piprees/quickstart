import '../sections/styles.css'
import '../util/localisation'

import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withDesign } from 'storybook-addon-designs'
import results from './.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

addDecorator(
  withDesign()
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}