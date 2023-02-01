/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
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

  it('renders the Support div with a link with the passed href and text and does not render when empty', function() {
    const { container: viewWithoutSupportText} = quickRender(),
        viewWithSupportText = quickRender({ supportText: 'Support for RSC', supportLink: '#supporturl' }),
        supportLink = viewWithSupportText.getByRole('link');

    expect(viewWithSupportText.getByText('Support for RSC')).toBeVisible();
    expect(supportLink).toHaveAttribute('href', '#supporturl');

    expect(viewWithoutSupportText.querySelector('.nx-global-sidebar__support')).not.toBeInTheDocument();
  });

  it('renders the Release div with a text and version number and does not render when empty', function() {
    const { container: viewWithoutReleaseText} = quickRender(),
        viewWithReleaseText = quickRender({ releaseText: 'React Shared Components: 3.1.4' });

    expect(viewWithReleaseText.getByText('React Shared Components: 3.1.4')).toBeVisible();

    expect(viewWithoutReleaseText.querySelector('.nx-global-sidebar__release')).not.toBeInTheDocument();
  });

  it('renders the Powered By div with text and does not render when empty', function() {
    const { container: viewWithoutPoweredByDiv } = quickRender(),
        viewWithPoweredByDiv = quickRender({ productTagLine: 'Powered by PLAID VILLAIN' });

    expect(viewWithPoweredByDiv.getByText('Powered by PLAID VILLAIN')).toBeVisible();

    expect(viewWithoutPoweredByDiv.querySelector('.nx-global-sidebar__product-name')).not.toBeInTheDocument();
  });

  it('renders the Created By text by default and does not render when set to false', function() {
    expect(quickRender().getByText('Created by Sonatype')).toBeVisible();
    expect(quickRender({ showCreatedBy: false }).queryByText('Created by Sonatype')).not.toBeInTheDocument();
  });
});
