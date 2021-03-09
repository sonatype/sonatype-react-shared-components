/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import TooltipConfigPropsDropdownExample from './TooltipConfigPropsDropdownExample';

const tooltipConfigPropsDropdownExampleCode = require('./TooltipConfigPropsDropdownExample?raw');

const TooltipConfigPropsPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>TooltipConfigProps</NxCode> is a TypeScript type that represents
        all <NxCode>NxTooltip</NxCode> props except <NxCode>children</NxCode>.
        This type is used for properties on some other components that can optionally contain a tooltip around
        one of their elements. For example, <NxCode>NxDropdown</NxCode> has a prop
        called <NxCode>toggleTooltip</NxCode> which can be used to specify configuration for
        a tooltip on the dropdown's toggle button. The omission of
        the <NxCode>children</NxCode> prop is important here as
        the <NxCode>NxDropdown</NxCode> itself fills in its own toggle button as the tooltip
        child.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example with NxDropdown"
                        liveExample={TooltipConfigPropsDropdownExample}
                        codeExamples={tooltipConfigPropsDropdownExampleCode}>
      A basic <NxCode>NxDropdown</NxCode> demonstrating usage of its
      {' '}<NxCode>toggleTooltip</NxCode> prop, which is of type
      {' '}<NxCode>TooltipConfigProps</NxCode>.
    </GalleryExampleTile>
  </>;

export default TooltipConfigPropsPage;
