/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxDescriptionList, NxFontAwesomeIcon} from '@sonatype/react-shared-components';

const NxListDescriptionExample = () =>
  <div>
    <h3 className="nx-h3">
      List heading
    </h3>
    <dl className="nx-list nx-list--description-list">
      <div className="nx-list__item">
        <dt className="nx-list__term">Item 1</dt>
        <dd className="nx-list__description">
          A very interesting item. The first item. You might say it's the original. The item to begin
          all items. But not to end them; definitely not. Rest assured there will be more items after this one
          and they will definitely also have descriptions.
        </dd>
      </div>
      <div className="nx-list__item">
        <dt className="nx-list__term">Item 2</dt>
        <dd className="nx-list__description">
          The second item.
        </dd>
      </div>
      <div className="nx-list__item">
        <dt className="nx-list__term">Item 3</dt>
        <dd className="nx-list__description">
          The third item. Not interesting at all, unlike the first item.
        </dd>
      </div>
      <div className="nx-list__item">
        <dt className="nx-list__term">Item 9000000000000000000000000000000001</dt>
        <dd className="nx-list__description">It's over 9000!</dd>
      </div>
      <div className="nx-list__item nx-list__item--clickable">
        <dt className="nx-list__term">
          <button className="nx-list__btn" onClick={() => { alert('You clicked a clickable row!'); }}>
            This is a clickable row
          </button>
        </dt>
        <dd className="nx-list__description">
          <button className="nx-list__btn" onClick={() => { alert('You clicked a clickable row!'); }}>
            Clicking this row will create an alert
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </button>
        </dd>
      </div>
      <div className="nx-list__item nx-list__item--clickable">
        <dt className="nx-list__term">
          <a href="https://developer.mozilla.org/en-US/" className="nx-list__link">
            This clickable row is a link.
          </a>
        </dt>
        <dd className="nx-list__description">
          <a href="https://developer.mozilla.org/en-US/" className="nx-list__link">
            This clicking this row will take you to MDN.
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </a>
        </dd>
      </div>
      <NxDescriptionList.ButtonItem onClick={() => { alert('You clicked the NxDescriptionList.ButtonItem component.'); }}>
        <dt>This is the NxDescriptionList.ButtonItem component</dt>
        <dd>Clicking this row will give you an alert message.</dd>
      </NxDescriptionList.ButtonItem>
    </dl>
  </div>;

export default NxListDescriptionExample;
