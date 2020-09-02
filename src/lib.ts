import type React from 'react';
import type { PluginOptions } from './types';

import path from 'path';
import { renderToString } from 'react-dom/server';
import { createStyled } from '@stitches/react';

type RequiredPluginOptions = {
  configFilePath: string,
};

export function requirePluginOptions(options: unknown): RequiredPluginOptions {
  let configFilePath = path.resolve(process.cwd(), 'stitches.config.js');

  if (options && typeof options === 'object') {
    const overridePath = (options as PluginOptions)['configFilePath'];
    if (overridePath && typeof overridePath === 'string') {
      configFilePath = overridePath;
    }
  }

  return { configFilePath };
}

let renderBody: () => void;
let stitchesInstance: {
  css: ReturnType<typeof createStyled>['css'],
};

interface Setup {
  (props: {
    element: React.ReactElement,
    options: RequiredPluginOptions,
  }): {
    collect: () => string,
  }
}
export const setup: Setup = ({
  element,
  options,
}) => {
  renderBody = () => renderToString(element);
  stitchesInstance = require(options.configFilePath);

  const collect = () => {
    const { styles } = stitchesInstance.css.getStyles(renderBody);
    const sheet = styles.join();
    return sheet;
  };

  return {
    collect,
  };
}
