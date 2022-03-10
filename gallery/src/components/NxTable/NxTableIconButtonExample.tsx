/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxButton,
  NxFontAwesomeIcon,
  NxIconDropdown,
  NxTextLink,
  useToggle,
  NxTable,
  NxButtonBar
} from '@sonatype/react-shared-components';
import { faPencilAlt, faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function NxTableIconButtonExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      deleteFn = () => { alert('delete'); },
      onClick = () => { alert('click'); };

  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Name</NxTable.Cell>
          <NxTable.Cell>Country</NxTable.Cell>
          <NxTable.Cell />
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        <NxTable.Row>
          <NxTable.Cell><span>Anna</span></NxTable.Cell>
          <NxTable.Cell><span>USA</span></NxTable.Cell>
          <NxTable.Cell>
            <NxButtonBar>
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </NxButtonBar>
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell><span>Lean</span></NxTable.Cell>
          <NxTable.Cell><span>France</span></NxTable.Cell>
          <NxTable.Cell>
            <NxButtonBar>
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxIconDropdown icon={faEllipsisV}
                              isOpen={isOpen}
                              onToggleCollapse={onToggleCollapse}
                              title="Links options">
                <button className="nx-dropdown-button disabled">Save</button>
                <button className="nx-dropdown-button" onClick={deleteFn}>Delete</button>
                <NxTextLink external className="nx-dropdown-link" onClick={onClick}>Website Link</NxTextLink>
              </NxIconDropdown>
            </NxButtonBar>
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell><span>Louis</span></NxTable.Cell>
          <NxTable.Cell><span>France</span></NxTable.Cell>
          <NxTable.Cell>
            <NxButtonBar>
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </NxButtonBar>
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell><span>Zach</span></NxTable.Cell>
          <NxTable.Cell><span>Colombia</span></NxTable.Cell>
          <NxTable.Cell>
            <NxButtonBar>
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </NxButtonBar>
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell><span>Jimmy</span></NxTable.Cell>
          <NxTable.Cell><span>Germany</span></NxTable.Cell>
          <NxTable.Cell>
            <NxButtonBar>
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </NxButtonBar>
          </NxTable.Cell>
        </NxTable.Row>
      </NxTable.Body>
    </NxTable>
  );
}
