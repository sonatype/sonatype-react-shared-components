/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { append, dropLast, head, init, insert, last, map, tail, takeLast } from 'ramda';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import NxTextLink from '../NxTextLink/NxTextLink';
import { Props, Crumb, DropdownProps, propTypes } from './types';
import NxIconDropdown from '../NxIconDropdown/NxIconDropdown';

import './NxBreadcrumb.scss';

export { Props, Crumb };

function CurrentBreadcrumb({ name }: Crumb) {
  return (
    <li className="nx-breadcrumb__list-item nx-breadcrumb__list-item--link-container">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="nx-breadcrumb__link nx-breadcrumb__link--current" aria-current="page">{name}</a>
    </li>
  );
}

function BreadcrumbLink({ name, href }: Crumb) {
  return (
    <li className="nx-breadcrumb__list-item nx-breadcrumb__list-item--link-container">
      <NxTextLink className="nx-breadcrumb__link" href={href}>{name}</NxTextLink>
    </li>
  );
}

function BreadcrumbDropdownLink({ name, href }: Crumb) {
  return (
    <NxTextLink className="nx-dropdown-link" href={href}>{name}</NxTextLink>
  );
}

function BreadcrumbDropdown({ crumbs, isOpen, onToggleCollapse }: DropdownProps) {
  return (
    <li className="nx-breadcrumb__list-item">
      <NxIconDropdown isOpen={isOpen} onToggleCollapse={onToggleCollapse} icon={faEllipsisH} title="more…">
        {map(c => <BreadcrumbDropdownLink key={c.href} { ...c } />, crumbs)}
      </NxIconDropdown>
    </li>
  );
}

export default function NxBreadcrumb(props: Props) {
  const { crumbs, isDropdownOpen, onToggleDropdown, className: classNameProp, ...otherProps } = props,
      crumbBeforeDropdown = crumbs.length < 2 ? null : head(crumbs);

  if (crumbBeforeDropdown) {
    const dropdownCrumbs = crumbs.length < 5 ? [] : tail(dropLast(2, crumbs)),
        crumbsAfterDropdown = crumbs.length < 5 ? tail(crumbs) : takeLast(2, crumbs),
        crumbsToBecomeLinks = [crumbBeforeDropdown, ...init(crumbsAfterDropdown)],

        // if we're in this block, the list was at least two items long so last on the "after" crumbs will
        // always have a value
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        currentCrumb = last(crumbsAfterDropdown)!,
        currentCrumbRender = <CurrentBreadcrumb key={currentCrumb.href} { ...currentCrumb } />,
        rowLinks = map(c => <BreadcrumbLink key={c.href} { ...c } />, crumbsToBecomeLinks),
        dropdown = dropdownCrumbs.length ?
          <BreadcrumbDropdown key="%%nx-breadcrumb-dropdown"
                              isOpen={isDropdownOpen}
                              onToggleCollapse={onToggleDropdown}
                              crumbs={dropdownCrumbs} /> :
          null,
        rowInteractiveParts = dropdown ? insert(1, dropdown, rowLinks) : rowLinks,
        rowItems = append(currentCrumbRender, rowInteractiveParts),
        className = classnames('nx-breadcrumb', classNameProp);

    // do not render anything when at the top level of the breadcrumb hiearchy
    return (
      <nav className={className} aria-label="breadcrumbs" { ...otherProps }>
        <ol className="nx-breadcrumb__list">
          {rowItems}
        </ol>
      </nav>
    );
  }
  else {
    return null;
  }
}

NxBreadcrumb.propTypes = propTypes;
