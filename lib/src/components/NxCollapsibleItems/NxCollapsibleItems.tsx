/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FC, forwardRef } from 'react';
import classnames from 'classnames';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxTooltip from '../NxTooltip/NxTooltip';
import { useUniqueId } from '../../util/idUtil';
import { Props, PublicProps, NxCollapsibleItemsChildProps, propTypes, childPropTypes } from './types';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

export { Props, PublicProps, NxCollapsibleItemsChildProps } from './types';

import './NxCollapsibleItems.scss';
import { ensureStartEndElements } from '../../util/reactUtil';

type NxCollapsibleItemsFC =
  FC<PublicProps> &
  {
    Child: React.ForwardRefExoticComponent<NxCollapsibleItemsChildProps & React.RefAttributes<Element>>
  };

function PrivateNxCollapsibleItems(props: Props) {
  const {
    onToggleCollapse,
    isOpen,
    disabled,
    children,
    triggerContent,
    triggerTooltip,
    actionContent,
    className,
    role,
    contentBeforeChildren,
    collapsibleChildrenId,
    ...otherProps
  } = props;

  const isEmpty = !React.Children.count(children),
      isExpanded = isOpen && !isEmpty, // conceptually we don't allow empty collapsible items to expand
      treeViewClasses = classnames('nx-collapsible-items', className, {
        'nx-collapsible-items--expanded': isExpanded,
        'nx-collapsible-items--collapsed': !isExpanded,
        'nx-collapsible-items--disabled': disabled,
        'nx-collapsible-items--empty': isEmpty
      }),
      treeViewChildrenId = collapsibleChildrenId ?? useUniqueId('nx-collapsible-items-children'),
      treeViewChildrenRole = role ?? 'list',
      trigger = (
        <button type="button"
                className="nx-collapsible-items__trigger"
                onClick={onToggleCollapse || undefined}
                aria-controls={treeViewChildrenId}
                aria-expanded={isExpanded}
                disabled={disabled || isEmpty || undefined}>
          <NxFontAwesomeIcon className="nx-collapsible-items__twisty" icon={faCaretRight} />
          <span className="nx-collapsible-items__text">
            {ensureStartEndElements(triggerContent)}
          </span>
        </button>
      ),
      triggerTooltipProps = typeof triggerTooltip === 'string' ? { title: triggerTooltip } : triggerTooltip;

  return (
    <div className={treeViewClasses}
         role="group"
         { ...otherProps }>
      <div className="nx-collapsible-items__header">
        {
          triggerTooltipProps ? (
            // div necessary to avoid error message when tooltip is on disabled button
            <NxTooltip { ...triggerTooltipProps } >
              <div className="nx-collapsible-items__tooltip-wrapper">
                {trigger}
              </div>
            </NxTooltip>
          ) : trigger
        }
        { actionContent && (
        <div className="nx-collapsible-items__action-content">
          {actionContent}
        </div>
        )}
      </div>
      {contentBeforeChildren}
      <div className="nx-collapsible-items__children" role={treeViewChildrenRole} id={treeViewChildrenId}>
        {children}
      </div>
    </div>
  );
}

/**
 * All individual treeview children should be wrapped in this component. When the child is an element,
 * this does not actually add another element to the DOM (as doing so would cause styling and screenreading
 * challenges) but instead adds the needed class and role to its child. If on the other hand the child is text,
 * this wraps it in a div
 */
const NxCollapsibleItemsChild = forwardRef<Element, NxCollapsibleItemsChildProps>(
    function NxCollapsibleItemsChildImpl({ children, className, ...otherProps }: NxCollapsibleItemsChildProps, ref) {
      if (typeof children === 'string' || typeof children === 'number') {
        return (
          <NxCollapsibleItemsChild className={className} ref={ref} { ...otherProps }>
            <div>{children}</div>
          </NxCollapsibleItemsChild>
        );
      }
      else {
        const classes = classnames('nx-collapsible-items__child', children.props.className, className),

            // if no role is specified, default it to listitem. If role is specified as empty string, unset it entirely
            role = (children.props.role ?? 'listitem') || undefined;

        return React.cloneElement(children, { className: classes, ref, role, ...otherProps });
      }
    }
);

const NxCollapsibleItems: NxCollapsibleItemsFC = Object.assign(PrivateNxCollapsibleItems, {
  Child: NxCollapsibleItemsChild,
  propTypes: propTypes
});

NxCollapsibleItemsChild.propTypes = childPropTypes;

export default NxCollapsibleItems;

export { NxCollapsibleItemsChild, PrivateNxCollapsibleItems };
