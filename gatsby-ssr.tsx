import type { ReplaceRendererArgs, RenderBodyArgs } from 'gatsby';
import type { Option } from '@cometjs/core';

import React from 'react';
import { setup, requirePluginOptions } from './lib';

let instance: Option<ReturnType<typeof setup>>;

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
  if (!instance) {
    return;
  }

  setHeadComponents([
    <style data-stitches>
      {instance.collect()}
    </style>
  ]);
};
