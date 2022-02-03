/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useResizeObserver from '@react-hook/resize-observer';
import { removeLicense } from './util/jsUtil';

export interface Props {
  content: string;
  language?: string | null;
}

const propTypes: PropTypes.ValidationMap<Props> = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string
};

const CodeExample: FunctionComponent<Props> =
  function CodeExample({ content, language }): ReactElement<Props> {
    const licenseStrippedContent = removeLicense(content),
        [scrollable, setScrollable] = useState(false),
        ref = useRef<HTMLElement>(null);

    // The code example is a potentially-scrollable region with no interactive elements. It needs to be in the
    // tab order so that it can be scrolled, but only when it actually has a scrollbar. Note that only horizontal
    // scrolling is possible
    function updateScrollable() {
      const codeRegionEl = ref.current?.querySelector('pre');

      if (codeRegionEl) {
        setScrollable(codeRegionEl.scrollWidth > codeRegionEl.clientWidth);
      }
    }

    useEffect(updateScrollable, [licenseStrippedContent]);
    useResizeObserver(ref, updateScrollable);

    return (
      <section ref={ref} className="gallery-example-code">
        { language &&
          <h3 className="nx-h3 nx-tile__section-header">
            {language.toUpperCase()}:
          </h3>
        }
        <SyntaxHighlighter language={language || 'tsx'} style={a11yDark} tabIndex={scrollable ? 0 : -1}>
          {licenseStrippedContent}
        </SyntaxHighlighter>
      </section>
    );
  };

CodeExample.propTypes = propTypes;

export default CodeExample;
