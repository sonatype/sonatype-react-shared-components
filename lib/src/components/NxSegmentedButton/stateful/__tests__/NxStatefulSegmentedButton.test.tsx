/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import NxStatefulSegmentedButton, { Props } from '../NxStatefulSegmentedButton';
import { act } from 'react-dom/test-utils';

describe('NxSegmentedButton', function() {
  let container: HTMLDivElement | null;

  const minimalProps: Props = {
        variant: 'primary',
        children: <div/>,
        buttonContent: 'Click Me',
        onClick: () => {}
      },
      quickRender = rtlRender(NxStatefulSegmentedButton, minimalProps),
      renderEl = rtlRenderElement(NxStatefulSegmentedButton, minimalProps);

  beforeEach(function() {
    // Avoid rendering directly on the body.
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function() {
    if (container) {
      document.body.removeChild(container);
      container = null;
    }
  });

  it('passes the specified classes and attributes to the top level element', function() {
    const el = renderEl({ className: 'foo', id: 'bar', lang: 'en' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');
    expect(el).toHaveAttribute('id', 'bar');
    expect(el).toHaveAttribute('lang', 'en');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('fowards a ref to the top level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref } as Partial<Props>);

    expect(ref.current).toBe(el);
  });

  it('renders two button children', function() {
    const el = renderEl()!,
        buttons = within(el).getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  describe('main button', function() {
    it('passes the type to the main btn if specified', function() {
      const defaultBtn = quickRender().getAllByRole('button')[0],
          customBtn = quickRender({ type: 'button'}).getAllByRole('button')[0],
          customSubmitBtn = quickRender({ type: 'submit' }).getAllByRole('button')[0];

      expect(defaultBtn).not.toHaveAttribute('type', 'button');
      expect(customBtn).toHaveAttribute('type', 'button');
      expect(customSubmitBtn).toHaveAttribute('type', 'submit');
    });

    it('renders the buttonContent within the main button and sets its accessible name', function() {
      const btns = quickRender().getAllByRole('button');

      expect(btns[0]).toHaveTextContent('Click Me');
      expect(btns[0]).toHaveAccessibleName('Click Me');
      expect(btns[1]).not.toHaveTextContent('Click Me');
    });

    it('sets the onClick handler on the main button', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          btns = quickRender({onClick}).getAllByRole('button');

      expect(onClick).not.toHaveBeenCalled();

      // confirm onClick handler is not on dropdown button
      await act(async () => { await user.click(btns[1]); });
      expect(onClick).not.toHaveBeenCalled();

      await act(async () => { await user.click(btns[0]); });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('dropdown button', function() {
    it('sets type="button" on the dropdown button', function() {
      expect(quickRender().getAllByRole('button')[1]).toHaveAttribute('type', 'button');
      expect(quickRender({ type: 'submit'}).getAllByRole('button')[1]).toHaveAttribute('type', 'button');
    });

    it('sets an accessible name of "more options" on the dropdown button', function() {
      expect(quickRender().getAllByRole('button')[1]).toHaveAccessibleName('more options');
    });
  });

  it('disables the buttons based on the disabled prop', function() {
    const defaultBtns = quickRender().getAllByRole('button'),
        enabledBtns = quickRender({ disabled: false }).getAllByRole('button'),
        disabledBtns = quickRender({ disabled: true }).getAllByRole('button');

    expect(defaultBtns[0]).not.toBeDisabled();
    expect(defaultBtns[1]).not.toBeDisabled();
    expect(enabledBtns[0]).not.toBeDisabled();
    expect(enabledBtns[1]).not.toBeDisabled();
    expect(disabledBtns[0]).toBeDisabled();
    expect(disabledBtns[1]).toBeDisabled();
  });
});

// import React from 'react';
// import { act } from 'react-dom/test-utils';
// import { mount, ReactWrapper } from 'enzyme';
// import 'jest-enzyme';
// import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

// import NxSegmentedButton from '../../NxSegmentedButton';
// import NxStatefulSegmentedButton, { Props } from '../NxStatefulSegmentedButton';

// describe('NxStatefulSegmentedButton', () => {
//   let container: HTMLDivElement | null;

//   const minimalProps: Props = {
//         variant: 'primary',
//         children: <div className="child"/>,
//         buttonContent: 'Click Me',
//         onClick: () => {}
//       },
//       getShallowComponent = enzymeUtils.getShallowComponent(NxStatefulSegmentedButton, minimalProps),
//       getMountedComponent = enzymeUtils.getMountedComponent(NxStatefulSegmentedButton, minimalProps);

//   beforeEach(function() {
//     // Avoid rendering directly on the body.
//     container = document.createElement('div');
//     document.body.appendChild(container);
//   });

//   afterEach(function() {
//     if (container) {
//       document.body.removeChild(container);
//       container = null;
//     }
//   });

//   it('renders an NxSegmentedButton component', function() {
//     const component = getShallowComponent();
//     expect(component).toMatchSelector(NxSegmentedButton);
//   });

//   it('renders an NxSegmentedButton component passing on the given props', function() {
//     const onClick = jest.fn(),
//         component = getShallowComponent({
//           ...minimalProps,
//           onClick,
//           disabled: true
//         }),
//         statelessButton = component.find(NxSegmentedButton);

//     expect(component).toMatchSelector(NxSegmentedButton);
//     expect(statelessButton).toHaveProp('variant', 'primary');
//     expect(statelessButton).toHaveProp('children', <div className="child" />);
//     expect(statelessButton).toHaveProp('disabled', true);
//     expect(statelessButton).toHaveProp('buttonContent', 'Click Me');
//     expect(statelessButton).toHaveProp('onClick', onClick);
//   });

//   it('opens the dropdown when the toggle is clicked', function() {
//     const mounted = getMountedComponent();

//     expect(mounted.find('.nx-dropdown-menu')).not.toExist();

//     mounted.find('button.nx-segmented-btn__dropdown-btn').simulate('click');
//     expect(mounted.find('.nx-dropdown-menu')).toExist();
//     mounted.unmount();
//   });

//   it('closes the dropdown if the menu is open and the toggle is clicked', function() {
//     const mounted = getMountedComponent(undefined, { attachTo: container });

//     act(() => {
//       mounted.find('button.nx-segmented-btn__dropdown-btn').getDOMNode()
//           .dispatchEvent(new MouseEvent('click', { bubbles: true }));
//     });
//     mounted.update();
//     expect(mounted.find('.nx-dropdown-menu')).toExist();

//     act(() => {
//       mounted.find('button.nx-segmented-btn__dropdown-btn').getDOMNode()
//           .dispatchEvent(new MouseEvent('click', { bubbles: true }));
//     });
//     mounted.update();
//     expect(mounted.find('.nx-dropdown-menu')).not.toExist();
//     mounted.unmount();
//   });

//   it('closes the dropdown when the Escape key is pressed on this component', function() {
//     const mounted = getMountedComponent(undefined, { attachTo: container });

//     act(() => {
//       mounted.find('button.nx-segmented-btn__dropdown-btn').getDOMNode()
//           .dispatchEvent(new MouseEvent('click', { bubbles: true }));
//     });
//     mounted.update();
//     expect(mounted.find('.nx-dropdown-menu')).toExist();

//     act(() => {
//       mounted.find(NxSegmentedButton).getDOMNode()
//           .dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape', bubbles: true }));
//     });
//     mounted.update();
//     expect(mounted.find('.nx-dropdown-menu')).not.toExist();

//     mounted.unmount();
//   });

//   it('closes the dropdown when an outside click happens', function() {
//     let element: ReactWrapper;

//     // `act` ensures that updates related to “units” of interaction with a user interface have been processed
//     // and applied to the DOM before you make any assertions.
//     // See https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
//     // and https://reactjs.org/docs/testing-recipes.html#act
//     act(() => {
//       element = mount(
//         <div>
//           <NxStatefulSegmentedButton { ...minimalProps }/>
//           <button id="test-btn">click</button>
//         </div>,
//         { attachTo: container }
//       );
//     });

//     act(() => {
//       // Jest/JSDom need actual events to be able to trigger effects properly
//       // See https://stackoverflow.com/questions/27557624/simulating-click-on-document-reactjs-jsdom
//       element.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();
//     expect(element!.find('.nx-dropdown-menu')).toExist();

//     act(() => {
//       element!.find('#test-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();
//     expect(element!.find('.nx-dropdown-menu')).not.toExist();

//     act(() => {
//       element!.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();
//     expect(element!.find('.nx-dropdown-menu')).toExist();

//     element!.unmount();
//   });

//   it('closes the dropdown when a child is clicked - after calling the child\'s click handler', function() {
//     let element: ReactWrapper;

//     const childClickSpy = jest.fn();
//     act(() => {
//       element = mount(
//         <NxStatefulSegmentedButton { ...minimalProps }>
//           <a id="child" onClick={childClickSpy}>Hello</a>
//         </NxStatefulSegmentedButton>,
//         { attachTo: container }
//       );
//     });

//     act(() => {
//       element.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();
//     expect(element!.find('.nx-dropdown-menu')).toExist();

//     act(() => {
//       element!.find('#child').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();

//     expect(childClickSpy).toHaveBeenCalled();
//     expect(element!.find('.nx-dropdown-menu')).not.toExist();

//     act(() => {
//       element!.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
//         bubbles: true
//       }));
//     });
//     element!.update();
//     expect(element!.find('.nx-dropdown-menu')).toExist();

//     element!.unmount();
//   });

//   it('forwards a ref to the div', function() {
//     const ref = React.createRef<HTMLDivElement>(),

//         // note: the fragment is necessary to get around an enzyme issue:
//         // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
//         div = mount(<><NxStatefulSegmentedButton ref={ref} { ...minimalProps }/></>).children().children();

//     expect(ref.current).toBe(div.getDOMNode());
//   });

// });
