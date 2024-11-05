/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxFilterInput,
  NxButton,
  NxFontAwesomeIcon,
  NxIconDropdown,
  NxTextLink,
  useToggle
} from '@sonatype/react-shared-components';
import { faTasks, faPencilAlt, faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function NxTableIconButtonExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      deleteFn = () => { alert('delete'); },
      onClick = () => { alert('click'); };

  return (
    <table className="nx-table">
      <thead>
        <tr className="nx-table-row nx-table-row--header">
          <th className="nx-cell nx-cell--header">Name</th>
          <th className="nx-cell nx-cell--header">Country</th>
          <th className="nx-cell nx-cell--header"/>
        </tr>
        <tr className="nx-table-row nx-table-row--header nx-table-row--filter-header">
          <td className="nx-cell nx-cell--header">
            <NxFilterInput value="" placeholder="Type a name"/>
          </td>
          <td className="nx-cell nx-cell--header">
            <NxFilterInput value="" placeholder="Select a country" inputAttributes={{ list: 'countryList' }}/>
            <datalist id="countryList">
              <option value="Colombia"/>
              <option value="France"/>
              <option value="Germany"/>
              <option value="USA"/>
            </datalist>
          </td>
          <td className="nx-cell nx-cell--header">
            <div className="nx-btn-bar">
              <NxButton title="Tasks" variant="icon-only"><NxFontAwesomeIcon icon={faTasks} /></NxButton>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="nx-table-row">
          <td className="nx-cell"><span>Anna</span></td>
          <td className="nx-cell"><span>USA</span></td>
          <td className="nx-cell">
            <div className="nx-btn-bar">
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </div>
          </td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell"><span>Lean</span></td>
          <td className="nx-cell"><span>France</span></td>
          <td className="nx-cell">
            <div className="nx-btn-bar">
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxIconDropdown icon={faEllipsisV}
                              isOpen={isOpen}
                              onToggleCollapse={onToggleCollapse}
                              title="Links options">
                <button className="nx-dropdown-button disabled">Save</button>
                <button className="nx-dropdown-button" onClick={deleteFn}>Delete</button>
                <NxTextLink external className="nx-dropdown-link" onClick={onClick}>Website Link</NxTextLink>
              </NxIconDropdown>
            </div>
          </td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell"><span>Louis</span></td>
          <td className="nx-cell"><span>France</span></td>
          <td className="nx-cell">
            <div className="nx-btn-bar">
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </div>
          </td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell"><span>Zach</span></td>
          <td className="nx-cell"><span>Colombia</span></td>
          <td className="nx-cell">
            <div className="nx-btn-bar">
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </div>
          </td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell"><span>Jimmy</span></td>
          <td className="nx-cell"><span>Germany</span></td>
          <td className="nx-cell">
            <div className="nx-btn-bar">
              <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faPencilAlt} /></NxButton>
              <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
