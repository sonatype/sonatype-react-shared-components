/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import * as PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';

interface Props {
  content: string;
  language?: string | null;
};

const propTypes: PropTypes.ValidationMap<Props> = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string
};

const CodeExample: FunctionComponent<Props> =
  function CodeExample({ content, language }): ReactElement<Props> {
    return <SyntaxHighlighter language={language || 'tsx'} style={atomDark}>{content}</SyntaxHighlighter>;
  };

CodeExample.propTypes = propTypes;

export default CodeExample;
