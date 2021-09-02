import type { RenderBodyArgs } from 'gatsby';

import * as React from 'react';
import { getCssText } from './src/stitches.config';

export const onRenderBody = ({
  setHeadComponents,
}: RenderBodyArgs) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />,
  ]);
};
