/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import classnames from 'classnames';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxTooltip from '../NxTooltip/NxTooltip';
import { getRandomId } from '../../util/idUtil';
import { Props, propTypes, childPropTypes } from './types';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

export { Props } from './types';

import './NxTreeView.scss';

const NxTreeView: FunctionComponent<Props> =
  function NxTreeView(props) {
    const { onToggleCollapse, isOpen, disabled, children, triggerContent, triggerTooltip, className, id } = props;

    const isEmpty = !React.Children.count(children),
        isExpanded = isOpen && !isEmpty, // conceptually we don't allow empty tree views to expand
        treeViewClasses = classnames('nx-tree-view', className, {
          'nx-tree-view--expanded': isExpanded,
          'nx-tree-view--collapsed': !isExpanded,
          'nx-tree-view--disabled': disabled,
          'nx-tree-view--empty': isEmpty
        }),
        treeViewId = useMemo(() => id || getRandomId('nx-tree-view'), [id]),
        trigger = (
          <button className="nx-tree-view__trigger"
                  onClick={onToggleCollapse || undefined}
                  aria-controls={treeViewId}
                  aria-expanded={isExpanded}
                  aria-disabled={disabled || isEmpty || undefined}>
            <NxFontAwesomeIcon className="nx-tree-view__twisty" icon={faCaretRight} />
            <div className="nx-tree-view__text">
              {triggerContent}
            </div>
          </button>
        ),
        triggerTooltipProps = typeof triggerTooltip === 'string' ? { title: triggerTooltip } : triggerTooltip;

    return (
      <div className={treeViewClasses} id={treeViewId} role="tree">
        { triggerTooltipProps ? <NxTooltip { ...triggerTooltipProps } >{trigger}</NxTooltip> : trigger }
        <div className="nx-tree-view__children" role="group">
          {children}
        </div>
      </div>
    );
  };

export const NxTreeViewChild: FunctionComponent<HTMLAttributes<HTMLDivElement>> =
  function NxTreeViewChild(props) {
    return (
      <div { ...props } className={classnames('nx-tree-view__child', props.className)} role="treeitem" />
    );
  };

NxTreeViewChild.propTypes = childPropTypes;
NxTreeView.propTypes = propTypes;

export default NxTreeView;
