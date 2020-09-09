import type React from 'react';

import { renderToString } from 'react-dom/server';
import { css } from './src/stitches.config';

let renderBody: () => void;

interface Setup {
  (props: {
    element: React.ReactElement,
  }): {
    collect: () => {
      styles: string[],
      bodyHTML: string,
    },
  }
}
export const setup: Setup = ({
  element,
}) => {
  renderBody = () => renderToString(element);

  const collect = () => {
    const { styles, result: bodyHTML } = css.getStyles(renderBody);
    return { styles, bodyHTML };
  };

  return { collect };
}
