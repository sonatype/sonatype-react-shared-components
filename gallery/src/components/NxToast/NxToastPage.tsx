/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode,
  NxP,
  NxTable,
  NxTile,
  NxH2,
  NxTextLink,
  NxStatefulAccordion,
  NxAccordion
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryTileFooter } from '../../gallery-components/GalleryTileFooter';

import CodeExample from '../../CodeExample';

const NxToastFullPageVariationsExampleCode = require('./NxToastFullPageVariationsExample?raw'),
    NxToastFullPageSimpleExampleCode = require('./NxToastFullPageSimpleExample?raw');

const NxToastPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Toasts are rendered on the top right corner of the screen. RSC provides 4 different variations of
        Toasts: success, warning, info, and error.
      </NxP>
      <NxP>
        Unlike all of the other React components provided by the RSC, the RSC toast component has a
        slightly different API. While other components can simply be used directly by using the component
        names, for example, using <NxCode>{'<NxList>'}</NxCode> to render a list or
        using <NxCode>{'<NxAlert>'}</NxCode> to render an alert, the pattern for rendering
        toasts is slightly different. Instead of using component names, the following functions are used
        to display the different kinds of toasts:
      </NxP>
      <NxP>
        <NxCode>showErrorToast()</NxCode> to render an error toast.
      </NxP>
      <NxP>
        <NxCode>showSuccessToast()</NxCode> to render a success toast.
      </NxP>
      <NxP>
        <NxCode>showWarningToast()</NxCode> to render a warning toast.
      </NxP>
      <NxP>
        <NxCode>showInfoToast()</NxCode> to render an info toast.
      </NxP>
      <NxP>
        Toasts generally fall under a 'global and static'
        context, in a sense that throughout an application, toasts are rendered within the same
        container on the top-right corner of the screen. Keeping this in mind, the most effective way of rendering
        the toasts is to wrap the parent root React component with <NxCode>NxToastProvider</NxCode>.
        RSC also provides a convenience React hook <NxCode>useToast</NxCode> that contains all of the functions
        for rendering toasts. The <NxCode>useToast</NxCode> hook is used as follows:{' '}
      </NxP>
      <NxP>
        <NxCode>
          {'const { showErrorToast, showSuccessToast, showWarningToast, showInfoToast } = useToast();'}
        </NxCode>
      </NxP>
      <NxP>
        When these functions to display the various kinds of toasts are contained within the children of
        {' '}<NxCode>NxToastProvider</NxCode>, all toasts are rendered within the same container in the same top-right
        corner of the screen.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Resource</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxToastProvider</NxCode></NxTable.Cell>
            <NxTable.Cell>React component</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Component that wraps the parent root React component</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>useToast</NxCode></NxTable.Cell>
            <NxTable.Cell>React hook</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Convenience React hook that provides functions to display toasts</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showErrorToast</NxCode></NxTable.Cell>
            <NxTable.Cell>function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Function to call in order to display an error toast. The function takes in a parameter of
              type <NxCode>string</NxCode>, which is the message to be displayed on the toast.
              For example: <NxCode>showErrorToast('Error. Please try again.');</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showSuccessToast</NxCode></NxTable.Cell>
            <NxTable.Cell>function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Function to call in order to display a success toast. The function takes in a parameter of
              type <NxCode>string</NxCode>, which is the message to be displayed on the toast.
              For example: <NxCode>showSuccessToast('Account successfully created.');</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showWarningToast</NxCode></NxTable.Cell>
            <NxTable.Cell>function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Function to call in order to display a warning toast. The function takes in a parameter of
              type <NxCode>string</NxCode>, which is the message to be displayed on the toast.
              For example: <NxCode>showWarningToast('Unauthorized access may be monitored.');</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showInfoToast</NxCode></NxTable.Cell>
            <NxTable.Cell>function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Function to call in order to display an info toast. The function takes in a parameter of
              type <NxCode>string</NxCode>, which is the message to be displayed on the toast.
              For example: <NxCode>showInfoToast('Check permissions.');</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts Used Without NxGlobalHeader Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          <NxTextLink href="#/NxToastFullPageSimpleExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastFullPageSimpleExampleCode} />
          <GalleryTileFooter clipboardContent= {NxToastFullPageSimpleExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts Used With NxGlobalHeader Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          <NxTextLink href="#/NxToastFullPageVariationsExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastFullPageVariationsExampleCode} />
          <GalleryTileFooter clipboardContent= {NxToastFullPageVariationsExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>
  </>;

export default NxToastPage;
