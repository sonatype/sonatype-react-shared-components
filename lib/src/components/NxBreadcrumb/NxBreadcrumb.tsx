/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { append, dropLast, head, init, insert, last, map, tail, takeLast } from 'ramda';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import NxTextLink from '../NxTextLink/NxTextLink';
import { Props, Crumb, DropdownProps, propTypes } from './types';
import NxIconDropdown from '../NxIconDropdown/NxIconDropdown';

export { Props, Crumb };

function CurrentBreadcrumb({ name }: Crumb) {
  return (
    <li className="nx-breadcrumb__list-item">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="nx-breadcrumb__current" aria-current="page">{name}</a>
    </li>
  );
}

function BreadcrumbLink({ name, href }: Crumb) {
  return (
    <li className="nx-breadcrumb__list-item">
      <NxTextLink href={href}>{name}</NxTextLink>
    </li>
  );
}

function BreadcrumbDropdownLink({ name, href }: Crumb) {
  return (
    <NxTextLink className="nx-dropdown-link" href={href}>{name}</NxTextLink>
  );
}

function BreadcrumbDropdown({ crumbs, isOpen }: DropdownProps) {
  return (
    <li className="nx-breadcrumb__list-item">
      <NxIconDropdown isOpen={isOpen} icon={faEllipsisH} title="more…">
        {map(c => <BreadcrumbDropdownLink key={c.href} { ...c } />, crumbs)}
      </NxIconDropdown>
    </li>
  );
}

export default function NxBreadcrumb({ crumbs, isDropdownOpen, ...otherProps }: Props) {
  const crumbBeforeDropdown = crumbs.length < 2 ? null : head(crumbs);

  if (crumbBeforeDropdown) {
    const dropdownCrumbs = crumbs.length < 5 ? [] : tail(dropLast(3, crumbs)),
        crumbsAfterDropdown = crumbs.length < 5 ? tail(crumbs) : takeLast(3, crumbs),
        crumbsToBecomeLinks = [crumbBeforeDropdown, ...init(crumbsAfterDropdown)],
        currentCrumb = last(crumbsAfterDropdown)!,
        currentCrumbRender = <CurrentBreadcrumb key={currentCrumb.href} { ...currentCrumb } />,
        rowLinks = map(c => <BreadcrumbLink key={c.href} { ...c } />, crumbsToBecomeLinks),
        dropdown = <BreadcrumbDropdown isOpen={isDropdownOpen} crumbs={dropdownCrumbs} />,
        rowInteractiveParts = dropdownCrumbs ? insert(1, dropdown, rowLinks) :
            rowLinks,
        rowItems = append(currentCrumbRender, rowInteractiveParts);

    // do not render anything when at the top level of the breadcrumb hiearchy
    return (
      <nav className="nx-breadcrumb" aria-label="breadcrumbs" { ...otherProps }>
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
