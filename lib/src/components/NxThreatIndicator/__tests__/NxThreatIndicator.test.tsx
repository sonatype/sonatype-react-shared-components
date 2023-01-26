/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxThreatIndicator, { Props } from '../NxThreatIndicator';
import { rtlRender, userEvent } from '../../../__testutils__/rtlUtils';
import { RenderResult, screen } from '@testing-library/react';
import {
  allThreatLevelCategories,
  allThreatLevelNumbers,
  categoryByPolicyThreatLevel
} from '../../../util/threatLevels';

describe('NxThreatIndicator', function() {
  const quickRender = rtlRender<Props>(NxThreatIndicator, {});

  it('renders a threat indicator', function() {
    const el = quickRender(),
        threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true });
    expect(threatIndicator).toBeInTheDocument();
  });

  it('takes precedence of threatLevelCategory if both props are provided', async function() {
    const el = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' }),
        user = userEvent.setup(),
        threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true })!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Low');
  });

  it('adds aria attrs to help the icon show up for screen readers', function() {
    const el = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' }),
        threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true })!;

    expect(threatIndicator).toHaveAttribute('aria-label', 'threat level low');
    expect(threatIndicator).not.toHaveAttribute('aria-hidden', true);
  });

  describe('should have default tooltips', function() {
    describe('when policyThreatLevel prop is provided', function() {
      allThreatLevelNumbers.forEach(threatNumber => {
        it(`for policy threat level ${threatNumber}`, async function() {
          const el = quickRender({ policyThreatLevel: threatNumber })!,
              user = userEvent.setup(),
              category = categoryByPolicyThreatLevel[threatNumber],
              categoryTitleCase = category[0].toUpperCase() + category.slice(1),
              threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true });

          await user.hover(threatIndicator);
          const tooltip = await screen.findByRole('tooltip');
          expect(tooltip).toHaveTextContent(categoryTitleCase);
        });
      });
    });

    describe('when threatLevelCategory prop is provided', function() {
      allThreatLevelCategories.forEach(category => {
        it(`for threat level category ${category}`, async function() {
          const el = quickRender({ threatLevelCategory: category })!,
              user = userEvent.setup(),
              threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true }),
              categoryTitleCase = category[0].toUpperCase() + category.slice(1);

          await user.hover(threatIndicator);
          const tooltip = await screen.findByRole('tooltip');
          expect(tooltip).toHaveTextContent(categoryTitleCase);
        });
      });
    });
  });

  it('should show custom tooltip title', async function() {
    const el = quickRender({ title: 'Extinction Level Threat' }),
        user = userEvent.setup(),
        threatIndicator = el.getByRole('img', { hidden: true, queryFallbacks: true })!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Extinction Level Threat');
  });

  describe('when presentational prop is set to true', function() {
    let el: RenderResult;

    beforeEach(() => {
      el = quickRender({ presentational: true });
    });

    it('should hide tooltip', async function() {
      const user = userEvent.setup(),
          threatIndicator = el.getByRole('presentation', { hidden: true, queryFallbacks: true });

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      await user.hover(threatIndicator);
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should set the role to "presentation"', function() {
      const threatIndicator = el.getByRole('presentation', { hidden: true, queryFallbacks: true });

      expect(threatIndicator).toBeInTheDocument();
    });

    it('should not have an accessible name', function() {
      const threatIndicator = el.getByRole('presentation', { hidden: true, queryFallbacks: true });

      expect(threatIndicator).not.toHaveAccessibleName();
    });
  });
});
