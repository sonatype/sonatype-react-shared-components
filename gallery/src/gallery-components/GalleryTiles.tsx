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
import { NxCheckbox } from '@sonatype/react-shared-components';

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
  function GalleryTile({ id, title, className, actionButtons, children }) {
    const galleryTileClasses = classnames('nx-tile-content', className);

    return (
      <div id={id} className="nx-tile">
        <div className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">{title}</h2>
          </div>
          { actionButtons &&
            <div className="nx-tile__actions gallery-checkered-background-toggle">{actionButtons}</div>
          }
        </div>
        <div className={galleryTileClasses}>
          {children}
        </div>
      </div>
    );
  };

// GalleryDescriptionTile is just a GalleryTile with a specified title
export const GalleryDescriptionTile: FunctionComponent<PropsWithRequiredChildren> =
  function GalleryDescriptionTile(props: PropsWithRequiredChildren) {
    return <GalleryTile { ...props } title="Description" className="gallery-description" />;
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

        [checkeredBackground, setCheckeredBackground] = useState(defaultCheckeredBackground || false),
        toggleCheckeredBackground = () => setCheckeredBackground(!checkeredBackground),

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
      <GalleryTile id={id} title={title} className={tileClasses} actionButtons={tileActions}>
        <p className="nx-p">{children}</p>

        { liveExampleRender &&
          <>
            <h3 className="nx-h3 nx-tile__section-header">Example:</h3>
            {liveExampleRender}
          </>
        }

        {codeExampleElements}
      </GalleryTile>
    );
  };
