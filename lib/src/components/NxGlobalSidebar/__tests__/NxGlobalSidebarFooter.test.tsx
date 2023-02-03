/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxGlobalSidebarFooter, { NxGlobalSidebarFooterProps as Props } from '../NxGlobalSidebarFooter';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

describe('NxGlobalSidebarFooter', function() {
  const minimalProps: Props = {},
      quickRender = rtlRender<Props>(NxGlobalSidebarFooter, minimalProps),
      renderEl = rtlRenderElement<Props>(NxGlobalSidebarFooter, minimalProps);

  it('passes additional classes specified as props to <footer>', function() {
    const el = renderEl({ className: 'test-class' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('test-class');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attributes to <footer>', function() {
    expect(renderEl({ id: 'test-id' })).toHaveAttribute('id', 'test-id');
    expect(renderEl({ lang: 'en-ca' })).toHaveAttribute('lang', 'en-ca');
  });

  describe('props', function() {
    describe('supportText and supportLink', function() {
      it('renders the Support div with a link with the passed href and text ' +
      'if supportText and supportLink props are provided', function() {
        const view = quickRender({ supportText: 'Support for RSC', supportLink: '#supporturl' }),
            supportLink = view.getByRole('link');

        expect(view.getByText('Support for RSC')).toBeVisible();
        expect(supportLink).toHaveTextContent(/^Support for RSC$/);
        expect(supportLink).toHaveAttribute('href', '#supporturl');
      });

      it('renders the Support div with a link with the passed href and jsx ' +
      'if supportText and supportLink props are provided', function() {
        const jsx =
          <>
            <span data-testid="spantext">TestSpan</span>
          </>,
            view = quickRender({ supportText: jsx, supportLink: '#supporturl' }),
            supportLink = view.getByRole('link');

        expect(view.getByTestId('spantext')).toBeInTheDocument();
        expect(view.getByText('TestSpan')).toBeVisible();
        expect(supportLink).toHaveTextContent(/^TestSpan$/);
        expect(supportLink).toHaveAttribute('href', '#supporturl');
      });

      it('does not render support text if supportText prop is provided but supportLink is not', function() {
        const view = quickRender({ supportText: 'Support for RSC' });

        expect(view.queryByRole('link')).not.toBeInTheDocument();
        expect(view.queryByText('Support for RSC')).not.toBeInTheDocument();
      });

      it('render default support text of "Help and Support" ' +
      'if supportLink prop is provided but supportText is not', function() {
        const view = quickRender({ supportLink: '#supporturl' }),
            supportLink = view.getByRole('link');

        expect(view.getByText('Help and Support')).toBeVisible();
        expect(supportLink).toHaveTextContent(/^Help and Support$/);
        expect(supportLink).toHaveAttribute('href', '#supporturl');
      });
    });

    describe('releaseText', function() {
      it('renders the Release div with a text and version number if releaseText is a string', function() {
        const view = quickRender({ releaseText: 'React Shared Components: 3.1.4' });

        expect(view.getByText('React Shared Components: 3.1.4')).toBeVisible();
      });

      it('renders the Release div with a text and version number if releaseText is jsx', function() {
        const jsx =
          <>
            <span data-testid="spantext">TestSpan 3.1.4</span>
          </>,
            view = quickRender({ releaseText: jsx });

        expect(view.getByTestId('spantext')).toBeInTheDocument();
        expect(view.getByText('TestSpan 3.1.4')).toBeVisible();
      });
    });

    describe('productTagLine', function() {
      it('renders the Product name div with text if productTagLine is a string', function() {
        const view = quickRender({ productTagLine: 'Powered by PLAID VILLAIN' });

        expect(view.getByText('Powered by PLAID VILLAIN')).toBeVisible();
      });

      it('renders the Product name div with text if productTagLine is jsx', function() {
        const jsx =
          <>
            <span data-testid="spantext">Powered by JSX</span>
          </>,
            view = quickRender({ productTagLine: jsx });

        expect(view.getByTestId('spantext')).toBeInTheDocument();
        expect(view.getByText('Powered by JSX')).toBeVisible();
      });
    });

    it('renders all required texts when all additional supported props are provided', function() {
      const view = quickRender({
        supportText: 'Support for RSC',
        supportLink: '#supporturl',
        releaseText: 'React Shared Components: 3.1.4',
        productTagLine: 'Powered by PLAID VILLAIN'
      });

      expect(view.getByText('Support for RSC')).toBeVisible();
      expect(view.getByRole('link')).toHaveTextContent(/^Support for RSC$/);
      expect(view.getByText('React Shared Components: 3.1.4')).toBeVisible();
      expect(view.getByText('Powered by PLAID VILLAIN')).toBeVisible();
      expect(view.getByText('Created by Sonatype')).toBeVisible();
    });

    it('renders the Created By text by default and does not render when set to false', function() {
      expect(quickRender().getByText('Created by Sonatype')).toBeVisible();
      expect(quickRender({ showCreatedBy: false }).queryByText('Created by Sonatype')).not.toBeInTheDocument();
    });
  });
});
