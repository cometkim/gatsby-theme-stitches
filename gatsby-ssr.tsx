import type {
  ReplaceRendererArgs,
  RenderBodyArgs,
  PreRenderHTMLArgs,
} from 'gatsby';
import type { Option } from '@cometjs/core';

import React from 'react';
import { requirePluginOptions, setup } from './lib';

let instance: Option<ReturnType<typeof setup>>;

interface ReplaceRenderer {
  (args: ReplaceRendererArgs, pluginOptions: unknown): any;
}
export const replaceRenderer: ReplaceRenderer = ({
  bodyComponent,
}, options) => {
  const { postCssPlugins } = requirePluginOptions(options);

  instance = setup({
    element: bodyComponent as React.ReactElement,
    postCssPlugins,
  });
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

  const sheet = instance.collect();

  setHeadComponents([
    <style data-stitches>
      {sheet}
    </style>
  ]);
};
