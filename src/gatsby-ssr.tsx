import type { ReplaceRendererArgs, RenderBodyArgs } from 'gatsby';

import React from 'react';
import { setup, requirePluginOptions } from './lib';

let instance: ReturnType<typeof setup>;

interface ReplaceRenderer {
  (args: ReplaceRendererArgs, pluginOptions: unknown): any;
}
export const replaceRenderer: ReplaceRenderer = ({
  bodyComponent,
}, pluginOptions) => {
  instance = setup({
    element: bodyComponent as React.ReactElement,
    options: requirePluginOptions(pluginOptions),
  })
};

interface OnRenderBody {
  (args: RenderBodyArgs, pluginOptions: unknown): any;
}
export const onRenderBody: OnRenderBody = ({
  setHeadComponents,
}) => {
  const sheet = instance.collect();
  setHeadComponents([
    <style data-stitches>{sheet}</style>
  ]);
};
