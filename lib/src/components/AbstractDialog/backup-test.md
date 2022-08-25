// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */
// import React from 'react';
// import { mount } from 'enzyme';

// import { Tooltip } from '@material-ui/core';

// import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
// import AbstractDialog, { DialogContext, Props } from '../AbstractDialog';
// import NxButton from '../../NxButton/NxButton';
// import NxTooltip from '../../NxTooltip/NxTooltip';

// describe('AbstractDialog', function() {
//   const dummyCloseHandler = jest.fn();

//   const minimalProps: Props = {
//     children: 'A message inside the dialog element.',
//     onCancel: dummyCloseHandler
//   };

//   const getShallow = getShallowComponent<Props>(AbstractDialog, minimalProps),
//       getDialog = (props?: Partial<Props>) => getShallow(props).children();

//   it('renders a context provider around a <dialog>', function () {
//     const contextProvider = getShallow(),
//         dialog = contextProvider.children();

//     expect(contextProvider).toMatchSelector(DialogContext.Provider);
//     expect(dialog).toMatchSelector('dialog');
//     expect(dialog.children()).toHaveText('A message inside the dialog element.');
//   });

//   it('renders children nodes within the dialog', function() {
//     const dialog = getDialog({ children: <div className="bar"/> });
//     expect(dialog.find('dialog')).toContainMatchingElement('div.bar');
//   });

//   it('forwards the dialog element ref', function() {
//     const ref = React.createRef<HTMLDialogElement>();
//     const dialog = mount(
//       <AbstractDialog ref={ref} onCancel={() => {}}>
//       </AbstractDialog>
//     );
//     const dialogEl = dialog.find('dialog').getDOMNode();
//     expect(ref.current).toBe(dialogEl);
//   });

//   it('uses passed in className to the dialog', function() {
//     const abstractDialog = getDialog({ className: 'test' });

//     const dialog = abstractDialog.find('dialog');
//     expect(dialog).toHaveClassName('test');
//   });

//   it('includes any passed in attributes to the dialog', function() {
//     const abstractDialog = getDialog({ id: 'dialog-id', lang: 'en_US' });

//     const dialog = abstractDialog.find('dialog');

//     expect(dialog.prop('id')).toEqual('dialog-id');
//     expect(dialog.prop('lang')).toEqual('en_US');
//   });

//   it('sets the dialog role on the backdrop by default', function() {
//     expect(getDialog()).toHaveProp('role', 'dialog');
//   });

//   it('sets the specified role on the backdrop', function() {
//     expect(getDialog({ role: 'asdf' })).toHaveProp('role', 'asdf');
//   });

//   describe('Dialog event listener support', () => {
//     let dialogContainer: HTMLDivElement | null;

//     beforeEach(function () {
//       // Rendering dialogContainer for the component in test.
//       dialogContainer = document.createElement('div');

//       document.body.appendChild(dialogContainer);
//     });

//     afterEach(function () {
//       if (dialogContainer) {
//         document.body.removeChild(dialogContainer);
//         dialogContainer = null;
//       }
//     });

//     const createEvent = (key = 'Escape') => ({
//       key,
//       stopPropagation: jest.fn(),
//       preventDefault: () => {},
//       nativeEvent: {
//         stopImmediatePropagation: jest.fn()
//       }
//     });

//     it('executes event.preventDefault when useNativeCancelOnEscape is false', function () {
//       const mockCallBack = jest.fn();
//       const component = getDialog({ useNativeCancelOnEscape: false, onCancel: mockCallBack });
//       const mockPreventDefault = jest.fn();

//       const escapeEvent = {
//         key: 'Escape',
//         stopPropagation: jest.fn(),
//         preventDefault: mockPreventDefault,
//         nativeEvent: {
//           stopImmediatePropagation: jest.fn()
//         }
//       };

//       expect(mockCallBack).not.toHaveBeenCalled();
//       expect(mockPreventDefault).not.toHaveBeenCalled();
//       component.simulate('keyDown', escapeEvent);
//       expect(mockCallBack).toHaveBeenCalledTimes(1);
//       expect(mockPreventDefault).toHaveBeenCalledTimes(1);
//       expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
//     });

//     it('executes onCancel method with a cancel event when pressing ESC key', function () {
//       const mockCallBack = jest.fn();
//       const component = getDialog({ useNativeCancelOnEscape: true, onCancel: mockCallBack });

//       expect(mockCallBack).not.toHaveBeenCalled();
//       component.simulate('keyDown', createEvent());
//       expect(mockCallBack).toHaveBeenCalledTimes(1);
//       expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
//     });

//     it('executes onCancel method ONLY when pressing ESC key', function () {
//       const mockCallBack = jest.fn();
//       const component = getDialog({ useNativeCancelOnEscape: true, onCancel: mockCallBack });

//       component.simulate('keyDown', createEvent('Tab'));
//       component.simulate('keyDown', createEvent('Enter'));
//       component.simulate('keyDown', createEvent('q'));
//       component.simulate('keyDown', createEvent('Q'));
//       expect(mockCallBack).not.toHaveBeenCalled();
//     });

//     it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', function() {
//       const component = getDialog({ useNativeCancelOnEscape: true, onCancel: jest.fn() }),
//           escEvent = createEvent(),
//           otherEvent = createEvent('q');

//       component.simulate('keyDown', escEvent);
//       component.simulate('keyDown', otherEvent);

//       expect(escEvent.stopPropagation).toHaveBeenCalled();
//       expect(escEvent.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();

//       expect(otherEvent.stopPropagation).not.toHaveBeenCalled();
//       expect(otherEvent.nativeEvent.stopImmediatePropagation).not.toHaveBeenCalled();
//     });
//   });

//   it('renders descendant tooltips attached to the backdrop rather than the document body', function() {
//     const dialog = mount(
//       <AbstractDialog onCancel={() => {}}>
//         <div id="test-div">
//           <NxTooltip title="foo">
//             <NxButton>Foo</NxButton>
//           </NxTooltip>
//         </div>
//       </AbstractDialog>
//     );

//     const tooltip = dialog.find(Tooltip).at(0);

//     expect(tooltip.prop('PopperProps')!.container).toBe(dialog.getDOMNode());
//   });

//   it('moves focus back to the previously focused element when closed', function(done) {
//     function Fixture({ dialogOpen }: { dialogOpen: boolean }) {
//       return (
//         <>
//           <button id="test-btn">Test</button>
//           { dialogOpen && <AbstractDialog onCancel={jest.fn()}><button id="cancel-btn">Close</button></AbstractDialog> }
//         </>
//       );
//     }

//     const container = document.createElement('div');
//     document.body.append(container);

//     const component = mount(<Fixture dialogOpen={false} />, { attachTo: container }),
//         externalBtn = component.find('#test-btn').getDOMNode() as HTMLElement;

//     externalBtn.focus();
//     expect(component).not.toContainMatchingElement(AbstractDialog);
//     expect(document.activeElement === externalBtn).toBe(true);

//     component.setProps({ dialogOpen: true });
//     expect(component).toContainMatchingElement(AbstractDialog);
//     expect(document.activeElement === component.find(AbstractDialog).getDOMNode()).toBe(true);

//     component.setProps({ dialogOpen: false });
//     expect(component).not.toContainMatchingElement(AbstractDialog);

//     // The focus is moved asynchronously
//     setTimeout(() => {
//       expect(document.activeElement === externalBtn).toBe(true);
//       done();
//     }, 100);
//   });

//   it('executes onCancel when clicked outside of the dialog and when cancelOnClickOutside is true', function() {
//     const mockOnCancel = jest.fn();

//     const map: any = {};

//     document.addEventListener = jest.fn((e: string, cb: () => void) => {
//       map[e] = cb;
//     }) as jest.Mock;

//     const container = mount(
//       <div className="container">
//         <NxButton className="outside-button">Outside</NxButton>
//         <AbstractDialog cancelOnClickOutside={true} onCancel={mockOnCancel}>
//           <NxButton className="inside-button">Inside</NxButton>
//         </AbstractDialog>
//       </div>
//     );
//     const outsideButton = container.find('.outside-button').at(0);
//     const insideButton = container.find('.inside-button').at(0);

//     expect(mockOnCancel).toHaveBeenCalledTimes(0);

//     map.click({ target: insideButton.getDOMNode() });

//     expect(mockOnCancel).toHaveBeenCalledTimes(0);

//     map.click({ target: outsideButton.getDOMNode() });

//     expect(mockOnCancel).toHaveBeenCalledTimes(1);
//   });

//   it('executes cancelOnClickOutsideTargetClassName when' +
//   'clicked outside of the dialog and when cancelOnClickOutside is true', function() {
//     const mockOnCancel = jest.fn();

//     const map: any = {};

//     document.addEventListener = jest.fn((e: string, cb: () => void) => {
//       map[e] = cb;
//     }) as jest.Mock;

//     const container = mount(
//       <div className="container">
//         <NxButton className="outside-button">Outside</NxButton>
//         <AbstractDialog cancelOnClickOutside={true} cancelOnClickOutsideTargetClassName="inner" onCancel={mockOnCancel}>
//           <NxButton className="inside-button">Inside</NxButton>
//           <div className="inner">
//             <NxButton className="inner-button">Inner</NxButton>
//           </div>
//         </AbstractDialog>
//       </div>
//     );

//     const outsideButton = container.find('.outside-button').at(0);
//     const insideButton = container.find('.inside-button').at(0);
//     const innerButton = container.find('.inner-button').at(0);

//     expect(mockOnCancel).toHaveBeenCalledTimes(0);
//     map.click({ target: innerButton.getDOMNode() });

//     expect(mockOnCancel).toHaveBeenCalledTimes(0);
//     map.click({ target: insideButton.getDOMNode() });

//     expect(mockOnCancel).toHaveBeenCalledTimes(1);
//     map.click({ target: outsideButton.getDOMNode() });

//     expect(mockOnCancel).toHaveBeenCalledTimes(2);
//   });
// });
