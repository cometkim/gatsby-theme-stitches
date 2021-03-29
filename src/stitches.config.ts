import { createCss } from '@stitches/react';

/**
 * You can override this config by component shadowing
 * See https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/
 *
 * You should export all those three properties `styled`, `css` and `getCssString`.
 */
export const { styled, css, getCssString } = createCss({
  prefix: '',
  theme: {
    colors: {},
    space: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {},
  media: {},
});
