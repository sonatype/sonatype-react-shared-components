/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import { ensureArray } from '@sonatype/react-shared-components/util/jsUtil';

import CodeExample, { Props as CodeExampleProps } from '../CodeExample';

interface PropsWithRequiredChildren {
  children: ReactNode;
}

// Props for GalleryTile
interface GalleryTileProps extends PropsWithRequiredChildren {
  title: string;
  className?: string;
}

type StringOrCodeExampleProps = string | CodeExampleProps;

interface GalleryExampleTileProps extends GalleryTileProps {
  description: string;
  codeExamples: StringOrCodeExampleProps | StringOrCodeExampleProps[];
}

// Component for a simple nx-tile with a specified title and contents
export const GalleryTile: FunctionComponent<GalleryTileProps> =
  function GalleryTile({ title, className, children }) {
    const galleryTileClasses = classnames('nx-tile-content', className);

    return (
      <div className="nx-tile">
        <div className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">{title}</h2>
          </div>
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
  function GalleryExampleTile({ children, className, title, description, codeExamples }: GalleryExampleTileProps) {
    const tileClasses = classnames('gallery-example', className),
        codeExampleElements = ensureArray(codeExamples)
            .map((example, idx) => {
              const props = typeof example === 'string' ? { content: example } : example;
              return <CodeExample key={idx} { ...props } />;
            });

    return (
      <GalleryTile title={title} className={tileClasses}>
        <p className="nx-p">{description}</p>

        <h3 className="nx-h3">Example:</h3>
        <div>{children}</div>

        <h3 className="nx-h3">Code Snippet:</h3>
        {codeExampleElements}
      </GalleryTile>
    );
  };
