/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxThreatIndicator, { Props } from '../NxThreatIndicator';
import { rtlRender, userEvent } from '../../../__testutils__/rtlUtils';
import { screen } from '@testing-library/react';
import {
  allThreatLevelCategories,
  allThreatLevelNumbers,
  categoryByPolicyThreatLevel
} from '../../../util/threatLevels';

describe('NxThreatIndicator', function() {
  const quickRender = rtlRender<Props>(NxThreatIndicator, {});

  it('renders a threat indicator svg', function() {
    const { container } = quickRender(),
        threatIndicator = container.querySelector('svg');
    expect(threatIndicator).toBeInTheDocument();
  });

  it('renders a threat indicator if threatLevelCategory prop is provided', async function() {
    const { container } = quickRender({ threatLevelCategory: 'severe' }),
        user = userEvent.setup(),
        threatIndicator = container.querySelector('svg')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Severe');
  });

  it('renders a threat indicator if policyThreatLevel prop is provided', async function() {
    const { container } = quickRender({ policyThreatLevel: 2 }),
        user = userEvent.setup(),
        threatIndicator = container.querySelector('svg')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Moderate');
  });

  it('takes precedence of threatLevelCategory if both props are provided', async function() {
    const { container } = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' }),
        user = userEvent.setup(),
        threatIndicator = container.querySelector('svg')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Low');
  });

  it('adds aria attrs to help the icon show up for screen readers', function() {
    const { container } = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' }),
        threatIndicator = container.querySelector('svg')!;

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
    const { container } = quickRender({ title: 'Extinction Level Threat' }),
        user = userEvent.setup(),
        threatIndicator = container.querySelector('svg')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Extinction Level Threat');
  });

  it('should hide tooltip when presentational prop is set true', async function() {
    const el = quickRender({ presentational: true }),
        user = userEvent.setup(),
        threatIndicator = el.getByRole('presentation', { hidden: true });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await user.hover(threatIndicator);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should set the role to "presentation" when presentational prop is true', function() {
    const el = quickRender({ presentational: true }),
        threatIndicator = el.getByRole('presentation', { hidden: true });

    expect(threatIndicator).toBeInTheDocument();
  });

  it('should set aria-label to undefined when presentational prop is true', function() {
    const el = quickRender({ presentational: true }),
        threatIndicator = el.getByRole('presentation', { hidden: true });

    expect(threatIndicator).not.toHaveAttribute('aria-label');
  });
});
