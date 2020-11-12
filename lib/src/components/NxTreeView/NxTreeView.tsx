/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxTooltip from '../NxTooltip/NxTooltip';
import { Props, ChildProps, propTypes, childPropTypes } from './types';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

export { Props, ChildProps } from './types';

import './NxTreeView.scss';

const NxTreeView: FunctionComponent<Props> =
  function NxTreeView(props) {
    const { onToggleCollapse, isOpen, disabled, children, triggerContent, triggerTooltip, className, id } = props;

    const treeViewClasses = classnames('nx-tree-view', className, {
          'nx-tree-view--expanded': isOpen,
          'nx-tree-view--collapsed': !isOpen,
          'nx-tree-view--disabled': disabled,
          'nx-tree-view--empty': !React.Children.count(children)
        }),
        trigger = (
          <div className="nx-tree-view__trigger" onClick={onToggleCollapse || undefined}>
            <NxFontAwesomeIcon className="nx-tree-view__twisty" icon={faCaretRight} />
            <span className="nx-tree-view__text">
              {triggerContent}
            </span>
          </div>
        ),
        triggerTooltipProps = typeof triggerTooltip === 'string' ? { title: triggerTooltip } : triggerTooltip;

    return (
      <div className={treeViewClasses} id={id || undefined}>
        { triggerTooltipProps ? <NxTooltip { ...triggerTooltipProps } >{trigger}</NxTooltip> : trigger }
        <div className="nx-tree-view__children">
          {children}
        </div>
      </div>
    );
  };

export const NxTreeViewChild: FunctionComponent<ChildProps> =
  function NxTreeViewChild({ clickable, selected, className, ...otherProps }) {
    const classes = classnames('nx-tree-view__child', className, {
      'nx-clickable': clickable,
      selected
    });

    return <div { ...otherProps } className={classes} tabIndex={clickable ? 0 : -1}/>;
  };

NxTreeViewChild.propTypes = childPropTypes;
NxTreeView.propTypes = propTypes;

export default NxTreeView;
