import { createStitches } from '@stitches/react';

/**
 * You can override this config by component shadowing
 * @See https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/
 *
 * You should export all those properties.
 * @See https://stitches.dev/docs/installation#configure-stitches
 */
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
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
