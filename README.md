# gatsby-plugin-sentry

Gatsby plugin to add Sentry error tracking to your site.

Learn more about Sentry [here](https://sentry.io).

## Install
`npm install --save gatsby-plugin-sentry`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-sentry',
    options: {
      dsn: 'YOUR_SENTRY_DSN_URL',
      // Optional configuration, see https://docs.sentry.io/learn/configuration/?platform=browsernpm
      environment: 'staging',
    },
  },
]
```

```javascript
// In your code where you want to catch exceptions

import * as Sentry from '@sentry/browser'
Sentry.captureException(new Error('My Error'))

// More examples: https://docs.sentry.io/learn/capturing/?platform=browsernpm#capturing-errors--exceptions
```
