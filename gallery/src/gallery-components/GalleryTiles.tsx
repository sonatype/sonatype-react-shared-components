/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, JSXElementConstructor, ReactNode, useState } from 'react';
import classnames from 'classnames';
import { copyTextToClipboard, ensureArray, removeLicense } from '../util/jsUtil';

import CodeExample, { Props as CodeExampleProps } from '../CodeExample';
import RawHtmlExample from '../RawHtmlExample';
import {
  NxAccordion,
  NxButton,
  NxCheckbox,
  NxFontAwesomeIcon,
  NxStatefulAccordion,
  NxTile,
  useToggle
} from '@sonatype/react-shared-components';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

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
        ),
        setCopyStatusWithTimeout = (status: string) => {
          //Set timeout to show copy status message as button text
          //before reverting to default button text
          const timeout = 3000;
          setCopyStatus(status);
          setTimeout(() => {
            setCopyStatus('');
          }, timeout);
        },
        [copyStatus, setCopyStatus] = useState<string>(''),
        copyOnClick = () => {
          const textToCopy: string = codeExampleElements[0].props.content;
          try {
            copyTextToClipboard(removeLicense(textToCopy));
            setCopyStatusWithTimeout('success');
          }
          catch (error) {
            setCopyStatusWithTimeout('error');
          }
        };

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
            <footer className="nx-footer">
              <div className="nx-btn-bar">
                {copyStatus === 'success' &&
                  <>
                    <NxFontAwesomeIcon icon={faCheckCircle}
                                       title="Copied!"
                                       color="var(--nx-swatch-green-25)"/>
                    <span>Copied!</span>
                  </>
                }
                {copyStatus === 'error' &&
                  <>
                    <NxFontAwesomeIcon icon={faExclamationCircle}
                                       title="Copy failed."
                                       color="var(--nx-swatch-red-40)"/>
                    <span>Copy failed.</span>
                  </>
                }
                <NxButton onClick={copyOnClick}>Copy to Clipboard</NxButton>
              </div>
            </footer>
          </NxStatefulAccordion>
        </NxTile.Content>
      </GalleryTile>
    );
  };
