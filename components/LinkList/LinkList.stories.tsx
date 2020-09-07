import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LinkList } from './LinkList'

const config: Meta = {
  title: 'Components/LinkList',
  component: LinkList,
}

export default config

const Template: Story = (args: any) => <LinkList {...args} />

export const Default = Template.bind({})
Default.args = {
  links: [
    {
      href: 'https://nextjs.org/docs/routing/introduction',
      title: 'File system routing with Next.js',
      description: "Learn the basics of Next.js's file-based routing system",
    },
    {
      href: 'https://nextjs.org/docs/api-routes/introduction',
      title: 'Handle API requests with Next.js',
      description: 'Learn how to create a simple API in Next.js',
    },
    {
      href:
        'https://github.com/vinissimus/next-translate#use-translations-in-your-pages',
      title: 'Adding text localisations with Next-Translate',
      description: 'Quickly set up translation keys for your page or component',
    },
    {
      href: 'https://github.com/garmeeh/next-seo#add-seo-to-page',
      title: 'Adding SEO Metadata with NextSEO',
      description:
        'Quickly add necessary SEO information to a page using next-seo',
    },
    {
      href: 'https://next-auth.js.org/getting-started/client#usesession',
      title: 'Handling authentication with Next-Auth',
      description:
        'Check if the user is logged in or not and change the behaviour of a page',
    },
    {
      href: 'https://www.youtube.com/watch?v=lgurVvQsOTY',
      title: 'End-To-End (E2E) Testing with Cypress',
      description:
        'Gleb Bahmutov talks about how you can use Cypress.io, a free open-source testing tool, to write end-to-end tests for your React apps.',
    },
    {
      href:
        'https://github.com/cyrilwanner/next-optimized-images/tree/canary#image-components',
      title: 'Including images with Next-Optimized-Images',
      description:
        'Have your assets automatically optimized using the amazing next-optimized-images plugin',
    },
  ],
}

Default.parameters = {
  jest: ['LinkList.test.tsx'],
}
