# gatsby-theme-stitches

![npm](https://img.shields.io/npm/v/gatsby-theme-stitches)
![GitHub](https://img.shields.io/github/license/cometkim/gatsby-theme-stitches)

A GatsbyJS plugin for styling with [Stitches](https://stitches.dev/)

## Install

```bash
yarn add gatsby-theme-stitches @stitches/react
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
// src/gatsby-theme-stitches/stitches.config.ts

import { createStyled } from '@stitches/react';

// You should exports `styled`, `css` and `getCssString`
export const { styled, css, getCssString } = createCss({
  // See the [configuration guide](https://stitches.dev/docs/tokens)
});
```

### TypeScript

Add a module resolution to your `tsconfig.json` file to get autocompletion.

```json
{
  "baseUrl": ".",
  "paths": {
    "gatsby-theme-stitches/src/*": ["./src/gatsby-theme-stitches/*"]
  }
}
```

## LICENSE

MIT
