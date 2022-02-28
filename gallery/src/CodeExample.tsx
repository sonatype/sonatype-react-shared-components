/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import * as PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { removeLicense } from './util/exampleUtil';
import useScrollableTabIndex from './util/useScrollableTabIndex';

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
        { ref, tabIndex } = useScrollableTabIndex(licenseStrippedContent, true, 'pre');

    return (
      <section ref={ref} className="gallery-example-code">
        { language &&
          <h3 className="nx-h3 nx-tile__section-header">
            {language.toUpperCase()}:
          </h3>
        }
        <SyntaxHighlighter language={language || 'tsx'} style={a11yDark} tabIndex={tabIndex}>
          {licenseStrippedContent}
        </SyntaxHighlighter>
      </section>
    );
  };

CodeExample.propTypes = propTypes;

export default CodeExample;
