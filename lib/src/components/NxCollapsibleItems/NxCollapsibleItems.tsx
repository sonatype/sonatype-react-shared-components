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
import { Props, NxCollapsibleItemsChildProps, propTypes, childPropTypes } from './types';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

export { Props, NxCollapsibleItemsChildProps } from './types';

import './NxCollapsibleItems.scss';
import { ensureElement } from '../../util/reactUtil';

type NxCollapsibleItemsFC =
  FC<Props> &
  {
    Child: React.ForwardRefExoticComponent<NxCollapsibleItemsChildProps & React.RefAttributes<Element>>
  };

const NxCollapsibleItems: NxCollapsibleItemsFC = function NxCollapsibleItems(props: Props) {
  const {
    onToggleCollapse,
    isOpen,
    disabled,
    children,
    triggerContent,
    triggerTooltip,
    className,
    id,
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
      treeViewId = useUniqueId('nx-collapsible-items', id),
      trigger = (
        <button type="button"
                className="nx-collapsible-items__trigger"
                onClick={onToggleCollapse || undefined}
                aria-controls={treeViewId}
                aria-expanded={isExpanded}
                disabled={disabled || isEmpty || undefined}>
          <NxFontAwesomeIcon className="nx-collapsible-items__twisty" icon={faCaretRight} />
          <span className="nx-collapsible-items__text">
            {ensureElement(triggerContent)}
          </span>
        </button>
      ),
      triggerTooltipProps = typeof triggerTooltip === 'string' ? { title: triggerTooltip } : triggerTooltip;

  // There is a bug in role-supports-aria-props that it restricts aria-disabled even though it shouldn't.
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/805
  return (
    /* eslint-disable-next-line jsx-a11y/role-supports-aria-props */
    <div className={treeViewClasses}
         id={treeViewId}
         role="list"
         { ...otherProps }
         aria-disabled={disabled || undefined}>
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
      <div className="nx-collapsible-items__children" role="group">
        {children}
      </div>
    </div>
  );
};

NxCollapsibleItems.propTypes = propTypes;

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
        const classes = classnames('nx-collapsible-items__child', children.props.className, className);

        return React.cloneElement(children, { className: classes, ref, role: 'listitem', ...otherProps });
      }
    }
);

NxCollapsibleItemsChild.propTypes = childPropTypes;

NxCollapsibleItems.Child = NxCollapsibleItemsChild;

export default NxCollapsibleItems;

export { NxCollapsibleItemsChild };
