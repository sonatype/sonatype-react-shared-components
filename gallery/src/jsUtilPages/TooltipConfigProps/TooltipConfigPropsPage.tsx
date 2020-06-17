/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import TooltipConfigPropsDropdownExample from './TooltipConfigPropsDropdownExample';

const tooltipConfigPropsDropdownExampleCode = require('!!raw-loader!./TooltipConfigPropsDropdownExample').default;

const TooltipConfigPropsPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">TooltipConfigProps</code> is a TypeScript type that represents
        all <code className="nx-code">NxTooltip</code> props except <code className="nx-code">children</code>.
        This type is used for properties on some other components that can optionally contain a tooltip around
        one of their elements. For example, <code className="nx-code">NxDropdown</code> has a prop
        called <code className="nx-code">toggleTooltip</code> which can be used to specify configuration for
        a tooltip on the dropdown's toggle button. The omission of
        the <code className="nx-code">children</code> prop is important here as
        the <code className="nx-code">NxDropdown</code> itself fills in its own toggle button as the tooltip
        child.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example with NxDropdown"
                        codeExamples={tooltipConfigPropsDropdownExampleCode}
                        description="A basic NxDropdown demonstrating usage of its toggleTooltip prop, which
                            is of type TooltipConfigProps">
      <TooltipConfigPropsDropdownExample/>
    </GalleryExampleTile>
  </>;

export default TooltipConfigPropsPage;
