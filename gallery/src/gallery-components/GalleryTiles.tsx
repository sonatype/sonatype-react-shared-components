/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, JSXElementConstructor, ReactNode } from 'react';
import classnames from 'classnames';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { ensureArray } from '../util/jsUtil';

import CodeExample, { Props as CodeExampleProps } from '../CodeExample';
import RawHtmlExample from '../RawHtmlExample';
import {
  NxAccordion,
  NxCheckbox,
  NxFontAwesomeIcon,
  NxStatefulAccordion,
  NxTile,
  useToggle
} from '@sonatype/react-shared-components';
import { GalleryTileFooter } from './GalleryTileFooter';

import { useLocation, useParams } from 'react-router-dom';

interface PropsWithRequiredChildren {
  children: ReactNode;
}

interface GalleryBaseProps {
  id?: string;
  title: string;
  className?: string;
}

// Props for GalleryTile
type GalleryTileProps = PropsWithRequiredChildren & GalleryBaseProps & {
  actionButtons?: ReactNode;
};

type StringOrCodeExampleProps = string | CodeExampleProps;

interface GalleryExampleTileProps extends GalleryBaseProps {
  children: ReactNode;
  liveExample?: JSXElementConstructor<Record<string, never>>;
  htmlExample?: string;
  codeExamples: StringOrCodeExampleProps | StringOrCodeExampleProps[];
  defaultCheckeredBackground?: boolean;
}

// Component for a simple nx-tile with a specified title and contents
export const GalleryTile: FunctionComponent<GalleryTileProps> =
  function GalleryTile({ className, id, title, actionButtons, children }) {
    const tileClasses = classnames('nx-tile', className),
        routeParams = useParams<{ pageName: string }>();

    return (
      <div id={id} className={tileClasses}>
        <div className="nx-tile-header">
          <div className="nx-tile-header__title">
            { id && (
              <a className="gallery-tile-link" href={`#/pages/${routeParams.pageName}/${id}`}>
                <NxFontAwesomeIcon icon={faLink} />
              </a>
            )}
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

        location = useLocation(),

        overrideCheckeredBackground = location.search.includes('noCheckeredBackground'),

        [checkeredBackground, toggleCheckeredBackground] =
          useToggle((overrideCheckeredBackground ? false : defaultCheckeredBackground) || false),

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
          <NxStatefulAccordion className="gallery-code-accordion">
            <NxAccordion.Header>
              <h2 className="nx-accordion__header-title">Example Code</h2>
            </NxAccordion.Header>
            {codeExampleElements}
            <GalleryTileFooter clipboardContent={codeExampleElements[0].props.content}/>
          </NxStatefulAccordion>
        </NxTile.Content>
      </GalleryTile>
    );
  };
