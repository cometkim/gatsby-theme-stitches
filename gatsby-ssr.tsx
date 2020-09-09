import type { ReplaceRendererArgs } from 'gatsby';

import React from 'react';
import { setup } from './lib';

interface ReplaceRenderer {
  (args: ReplaceRendererArgs, pluginOptions: unknown): any;
}
export const replaceRenderer: ReplaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const instance = setup({
    element: bodyComponent as React.ReactElement,
  });

  const { styles, bodyHTML } = instance.collect();

  setHeadComponents(
    styles.map((sheet, i) =>
      <style key={i} data-stitches dangerouslySetInnerHTML={{ __html: sheet }} />
    )
  );

  replaceBodyHTMLString(bodyHTML);
};
