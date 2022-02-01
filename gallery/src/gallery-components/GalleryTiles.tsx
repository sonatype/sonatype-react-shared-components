/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, JSXElementConstructor, ReactNode, useState } from 'react';
import classnames from 'classnames';
import { ensureArray } from '../util/jsUtil';

import CodeExample, { Props as CodeExampleProps } from '../CodeExample';
import RawHtmlExample from '../RawHtmlExample';
import {
  NxAccordion,
  NxCheckbox,
  NxP,
  NxStatefulAccordion,
  NxTab,
  NxTabList,
  NxTabPanel,
  NxTabs,
  NxTile,
  useToggle
} from '@sonatype/react-shared-components';

interface PropsWithRequiredChildren {
  children: ReactNode;
}

interface GalleryBaseProps extends PropsWithRequiredChildren {
  id?: string;
  title: string;
  className?: string;
}

// Props for GalleryTile
interface GalleryTileProps extends GalleryBaseProps {
  actionButtons?: ReactNode;
}

type StringOrCodeExampleProps = string | CodeExampleProps;

interface GalleryExampleTileProps extends GalleryBaseProps {
  liveExample?: JSXElementConstructor<Record<string, never>>;
  htmlExample?: string;
  codeExamples: StringOrCodeExampleProps | StringOrCodeExampleProps[];
  defaultCheckeredBackground?: boolean;
}

interface GalleryMultiExampleTileBaseProps extends GalleryBaseProps {
  reactLiveExample: JSXElementConstructor<Record<string, never>>;
  reactCodeExample: string;
  extraCodeExamples?: StringOrCodeExampleProps | StringOrCodeExampleProps[];
  defaultCheckeredBackground?: boolean;
}

interface GalleryMultiExampleTileJsxHtmlProps extends GalleryMultiExampleTileBaseProps {
  htmlLiveExample: JSXElementConstructor<Record<string, never>>;
  htmlCodeExample: string;
}

interface GalleryMultiExampleTileStringHtmlProps extends GalleryMultiExampleTileBaseProps {
  htmlLiveExample: string;
}

type GalleryMultiExampleTileProps = GalleryMultiExampleTileStringHtmlProps | GalleryMultiExampleTileJsxHtmlProps;

// Component for a simple nx-tile with a specified title and contents
export const GalleryTile: FunctionComponent<GalleryTileProps> =
  function GalleryTile({ className, id, title, actionButtons, children }) {
    const tileClasses = classnames('nx-tile', className);

    return (
      <div id={id} className={tileClasses}>
        <div className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">{title}</h2>
          </div>
          { actionButtons &&
            <div className="nx-tile__actions gallery-checkered-background-toggle">{actionButtons}</div>
          }
        </div>
        {children}
      </div>
    );
  };

// GalleryDescriptionTile is just a GalleryTile with a specified title
export const GalleryDescriptionTile: FunctionComponent<PropsWithRequiredChildren> =
  function GalleryDescriptionTile({ children, ...otherProps }: PropsWithRequiredChildren) {
    return (
      <GalleryTile { ...otherProps } title="Description">
        <NxTile.Content className="gallery-description">{children}</NxTile.Content>
      </GalleryTile>
    );
  };

export const GalleryExampleTile: FunctionComponent<GalleryExampleTileProps> =
  function GalleryExampleTile(props: GalleryExampleTileProps) {
    const {
          id,
          children,
          className,
          title,
          liveExample: LiveExample,
          htmlExample,
          codeExamples,
          defaultCheckeredBackground
        } = props,

        [checkeredBackground, toggleCheckeredBackground] = useToggle(defaultCheckeredBackground || false),

        liveExampleRender =
          htmlExample ? <RawHtmlExample html={htmlExample} /> :
          LiveExample ? <div className="gallery-example-live"><LiveExample /></div> :
          null,

        tileClasses = classnames('gallery-example', className, {
          'gallery-example--checkered-background': checkeredBackground
        }),
        codeExampleElements = ensureArray(codeExamples)
            .map((example, idx) => {
              const props = typeof example === 'string' ? { content: example } : example;
              return <CodeExample key={idx} { ...props } />;
            }),
        tileActions = (
          <NxCheckbox isChecked={checkeredBackground}
                      onChange={toggleCheckeredBackground}>
            Show checkered background
          </NxCheckbox>
        );

    return (
      <GalleryTile id={id}
                   title={title}
                   className={tileClasses}
                   actionButtons={tileActions}>
        <NxTile.Content className="gallery-example">
          <p className="nx-p">{children}</p>

          { liveExampleRender &&
            <>
              <h3 className="nx-h3 nx-tile__section-header">Example:</h3>
              {liveExampleRender}
            </>
          }
        </NxTile.Content>

        <NxTile.Content className="nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <h2 className="nx-accordion__header-title">Example Code</h2>
            </NxAccordion.Header>
            {codeExampleElements}
          </NxStatefulAccordion>
        </NxTile.Content>
      </GalleryTile>
    );
  };

export function GalleryMultiExampleTile(props: GalleryMultiExampleTileProps) {
  const {
        reactLiveExample: ReactLiveExample,
        reactCodeExample,
        htmlLiveExample,
        extraCodeExamples,
        defaultCheckeredBackground,
        children,
        className,
        ...otherProps
      } = props,
      [checkeredBackground, toggleCheckeredBackground] = useToggle(defaultCheckeredBackground || false),
      [activeTab, setActiveTab] = useState(0),
      tileClasses = classnames('gallery-example', className, {
        'gallery-example--checkered-background': checkeredBackground
      }),
      normalizedExtraCodeExamples = ensureArray(extraCodeExamples || []).map(ex =>
        typeof ex === 'string' ? { content: ex } : ex
      ),
      extraCodeExampleRender = normalizedExtraCodeExamples.map((props, i) => <CodeExample key={i} { ...props } />),
      tileActions = (
        <NxCheckbox isChecked={checkeredBackground}
                    onChange={toggleCheckeredBackground}>
          Show checkered background
        </NxCheckbox>
      ),
      htmlExampleRender = typeof htmlLiveExample === 'string' ?
        <RawHtmlExample html={htmlLiveExample} /> : React.createElement(htmlLiveExample),
      htmlExampleCodeString = typeof htmlLiveExample === 'string' ?
        htmlLiveExample : (props as GalleryMultiExampleTileJsxHtmlProps).htmlCodeExample;

  const codeExampleAccordion = (
    <NxStatefulAccordion>
      <NxAccordion.Header>
        <NxAccordion.Title>Example Code</NxAccordion.Title>
      </NxAccordion.Header>
      <CodeExample content={activeTab ? htmlExampleCodeString : reactCodeExample} />
      {extraCodeExampleRender}
    </NxStatefulAccordion>
  );

  return (
    <GalleryTile className={tileClasses} actionButtons={tileActions} { ...otherProps }>
      <NxTile.Content>
        <NxP>{children}</NxP>
        <NxTabs activeTab={activeTab} onTabSelect={setActiveTab}>
          <NxTabList>
            <NxTab>React</NxTab>
            <NxTab>HTML</NxTab>
          </NxTabList>
          <NxTabPanel>
            <div className="gallery-example-live">
              <ReactLiveExample />
            </div>
          </NxTabPanel>
          <NxTabPanel>
            {htmlExampleRender}
          </NxTabPanel>
        </NxTabs>
      </NxTile.Content>
      <NxTile.Content className="nx-tile-content--accordion-container">{codeExampleAccordion}</NxTile.Content>
    </GalleryTile>
  );
}
