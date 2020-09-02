import type React from 'react';
import type { AcceptedPlugin } from 'postcss';
import type { Required } from 'utility-types';
import type { PluginOptions } from './types';

import postcss from 'postcss';
import { renderToString } from 'react-dom/server';
import { css } from './src/stitches.config';

export function requirePluginOptions(options: unknown): Required<PluginOptions> {
  let postCssPlugins: AcceptedPlugin[] = [];

  if (options && typeof options === 'object') {
    postCssPlugins = (options as PluginOptions)['postCssPlugins'] ?? [];
  }

  return { postCssPlugins };
}

let renderBody: () => void;

interface Setup {
  (props: {
    element: React.ReactElement,
    postCssPlugins: AcceptedPlugin[],
  }): {
    collect: () => string,
  }
}
export const setup: Setup = ({
  element,
  postCssPlugins,
}) => {
  renderBody = () => renderToString(element);

  const collect = () => {
    const { styles } = css.getStyles(renderBody);
    const sheet = postcss(postCssPlugins).process(styles.join()).css;
    return sheet;
  };

  return {
    collect,
  };
};
