/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

interface PropsWithRequiredChildren {
  children: ReactNode;
}

// Props for GalleryTile
interface GalleryTileProps extends PropsWithRequiredChildren {
  title: string;
  className?: string;
}

// Component for a simple nx-tile with a specified title and contents
export const GalleryTile: FunctionComponent<GalleryTileProps> =
  function GalleryTile({ title, className, children }) {
    const galleryTileClasses = classnames('nx-tile-content', className);

    return (
      <div className="nx-tile gallery-tile">
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

// GalleryTile and GalleryExample components are just GalleryTiles with specified titles
export const GalleryDescriptionTile: FunctionComponent<PropsWithRequiredChildren> =
  function GalleryDescriptionTile(props: PropsWithRequiredChildren) {
    return <GalleryTile { ...props } title="Description" className="gallery-description" />;
  };

export const GalleryExampleTile: FunctionComponent<PropsWithRequiredChildren> =
  function GalleryExampleTile(props: PropsWithRequiredChildren) {
    return <GalleryTile { ...props } title="Example" className="gallery-example"/>;
  };
