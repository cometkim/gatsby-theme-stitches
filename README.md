# gatsby-theme-stitches

A GatsbyJS plugin for styling with [Stitches](https://stitches.dev/)

## Install

```bash
yarn add gatsby-theme-stitches
```

## Usage

```js
// Add plugin to gatsby-config.js
plugin: ['gatsby-theme-stitches']
```

That's it! You can import sitiches module from `gatsby-plugin-stitches/src/stitches.config`;

```js
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Container = styled("div", {
  margin: 10,
  backgroundColor: 'red',
});
```

And also you can create your own config by shadowing the `gatsby-theme-stitches/src/stitches.config` module.

```js
// src/gatsby-theme-stitches/stitches.config.js
// Or src/gatsby-theme-stitches/stitches.config.ts

import { createStyled } from '@stitches/react';

// You should exports `css`
export const { styled, css } = createStyled({
  // See the [configuration guide](https://stitches.dev/docs/tokens)
});
```

## PostCSS plugins

This plugin supports preproccesing by PostCSS plugins

Add plugins to `postCssPlugins` option.

```js
// in gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-theme-stitches',
    options: {
      postCssPlugins: [
        require('autoprefixer'),
      ],
    },
  },
]
```

## LICENSE

MIT
