/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxThreatIndicator, { Props } from '../NxThreatIndicator';
import { rtlRender, runTimers, userEvent } from '../../../__testutils__/rtlUtils';
import { screen } from '@testing-library/react';

describe('NxThreatIndicator', function() {
  const quickRender = rtlRender<Props>(NxThreatIndicator, {});

  it('renders an element with a role of graphics-symbol', async function() {
    const el = quickRender();
    await runTimers();
    const threatIndicator = el.getByRole('graphics-symbol');
    expect(threatIndicator).toBeInTheDocument();
  });

  it('has a fallback role of img', async function() {
    const el = quickRender();
    await runTimers();
    const threatIndicator = el.getByRole('img', { queryFallbacks: true });
    expect(threatIndicator).toBeInTheDocument();
  });

  it('takes precedence of threatLevelCategory if both props are provided', async function() {
    const el = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' });
    await runTimers();
    const user = userEvent.setup(),
        threatIndicator = el.getByRole('graphics-symbol')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Low');
  });

  it('sets the accessible name based on the threat level category', async function() {
    const el = quickRender({ policyThreatLevel: 9, threatLevelCategory: 'low' });
    await runTimers();
    const threatIndicator = el.getByRole('graphics-symbol')!;

    expect(threatIndicator).toHaveAccessibleName('Low');
  });

  describe('should have default tooltips', function() {
    const getTooltipTextForProps = async (threat: Props) => {
      const el = quickRender(threat)!;
      await runTimers();
      const user = userEvent.setup(),
          threatIndicator = el.getByRole('graphics-symbol');

      await user.hover(threatIndicator);
      const tooltip = await screen.findByRole('tooltip');
      return tooltip.textContent;
    };

    describe('when policyThreatLevel prop is provided', function() {
      it('for policyThreatLevel 0', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 0 })).toBe('None');
      });
      it('for policyThreatLevel 1', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 1 })).toBe('Low');
      });
      it('for policyThreatLevel 2', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 2 })).toBe('Moderate');
      });
      it('for policyThreatLevel 3', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 3 })).toBe('Moderate');
      });
      it('for policyThreatLevel 4', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 4 })).toBe('Severe');
      });
      it('for policyThreatLevel 5', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 5 })).toBe('Severe');
      });
      it('for policyThreatLevel 6', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 6 })).toBe('Severe');
      });
      it('for policyThreatLevel 7', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 7 })).toBe('Severe');
      });
      it('for policyThreatLevel 8', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 8 })).toBe('Critical');
      });
      it('for policyThreatLevel 9', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 9 })).toBe('Critical');
      });
      it('for policyThreatLevel 10', async function() {
        expect(await getTooltipTextForProps({ policyThreatLevel: 10 })).toBe('Critical');
      });
    });

    describe('when threatLevelCategory prop is provided', function() {
      it('for threatLevelCategory unspecified', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'unspecified' })).toBe('Unspecified');
      });
      it('for threatLevelCategory none', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'none' })).toBe('None');
      });
      it('for threatLevelCategory low', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'low' })).toBe('Low');
      });
      it('for threatLevelCategory moderate', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'moderate' })).toBe('Moderate');
      });
      it('for threatLevelCategory severe', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'severe' })).toBe('Severe');
      });
      it('for threatLevelCategory critical', async function() {
        expect(await getTooltipTextForProps({ threatLevelCategory: 'critical' })).toBe('Critical');
      });
    });
  });

  it('should show custom tooltip title', async function() {
    const el = quickRender({ title: 'Extinction Level Threat' });
    await runTimers();
    const user = userEvent.setup(),
        threatIndicator = el.getByRole('graphics-symbol')!;

    await user.hover(threatIndicator);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Extinction Level Threat');
  });

  describe('when presentational prop is set to true', function() {
    const quickRender = rtlRender(NxThreatIndicator, { presentational: true });

    it('should hide tooltip', async function() {
      const user = userEvent.setup(),
          threatIndicator = quickRender().getByRole('presentation', { hidden: true });

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      await user.hover(threatIndicator);
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should set the role to "presentation"', function() {
      const threatIndicator = quickRender().getByRole('presentation', { hidden: true });

      expect(threatIndicator).toBeInTheDocument();
    });

    it('should not have an accessible name', function() {
      const threatIndicator = quickRender().getByRole('presentation', { hidden: true });

      expect(threatIndicator).not.toHaveAccessibleName();
    });
  });
});
