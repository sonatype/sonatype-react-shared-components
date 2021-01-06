/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, useMemo, forwardRef } from 'react';
import classnames from 'classnames';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxTooltip from '../NxTooltip/NxTooltip';
import { getRandomId } from '../../util/idUtil';
import { Props, NxTreeViewChildProps, propTypes, childPropTypes } from './types';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

export { Props, NxTreeViewChildProps } from './types';

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
                  disabled={disabled || isEmpty || undefined}>
            <NxFontAwesomeIcon className="nx-tree-view__twisty" icon={faCaretRight} />
            <span className="nx-tree-view__text">
              {triggerContent}
            </span>
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

/**
 * All individual treeview children should be wrapped in this component. When the child is an element,
 * this does not actually add another element to the DOM (as doing so would cause styling and screenreading
 * challenges) but instead adds the needed class and role to its child. If on the other hand the child is text,
 * this wraps it in a div
 */
const NxTreeViewChild = forwardRef<Element, NxTreeViewChildProps>(
    function NxTreeViewChildImpl({ children, className, ...otherProps }: NxTreeViewChildProps, ref) {
      if (typeof children === 'string' || typeof children === 'number') {
        return (
          <NxTreeViewChild className={className} ref={ref} { ...otherProps }>
            <div>{children}</div>
          </NxTreeViewChild>
        );
      }
      else {
        const classes = classnames('nx-tree-view__child', children.props.className, className);

        return React.cloneElement(children, { className: classes, ref, role: 'treeitem', ...otherProps });
      }
    }
);

NxTreeViewChild.propTypes = childPropTypes;
NxTreeView.propTypes = propTypes;

export default NxTreeView;
export { NxTreeViewChild };
