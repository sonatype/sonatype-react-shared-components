/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { render, screen, within, waitFor } from '@testing-library/react';
import { rtlRenderElement, userEvent, runTimers } from '../../../__testutils__/rtlUtils';

import { NxTableCellProps } from '../types';

import NxTable from '../NxTable';
import NxTableHead from '../NxTableHead';
import NxTableRow, { NxTableRowProps } from '../NxTableRow';
import NxTableCell from '../NxTableCell';
import NxTableBody from '../NxTableBody';

describe('NxTable', function() {
  const renderEl = rtlRenderElement(NxTable, {});

  it('match subcomponents to its deprecated counterpart', function() {
    expect(NxTable.Head).toBe(NxTableHead);
    expect(NxTable.Row).toBe(NxTableRow);
    expect(NxTable.Cell).toBe(NxTableCell);
    expect(NxTable.Body).toBe(NxTableBody);
  });

  it('passes general attributes to top-level element', function() {
    const component = renderEl({ id: 'dolphin', lang: 'en-CA' });
    expect(component).toHaveAttribute('id', 'dolphin');
    expect(component).toHaveAttribute('lang', 'en-CA');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClass = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClass).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClass).toHaveClass(cls);
    }
  });

  it('renders a <caption> when caption prop is provided', function() {
    render(<NxTable caption="table-title"></NxTable>);
    expect(screen.getByRole('table', { name: 'table-title'})).toBeInTheDocument();
  });

  it('renders children of table with correct element types', function() {
    render(
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Foo</NxTable.Cell>
            <NxTable.Cell>Bar</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>0</NxTable.Cell>
            <NxTable.Cell>1024</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    );

    const table = screen.getByRole('table');
    const rowGroups = within(table).getAllByRole('rowgroup');
    const headerRows = within(rowGroups[0]).getAllByRole('row');
    const headerColumnHeaders = within(headerRows[0]).getAllByRole('columnheader');
    const headerCells = within(headerRows[0]).queryAllByRole('cell');
    const bodyRows = within(rowGroups[1]).getAllByRole('row');
    const bodyColumnHeaders = within(bodyRows[0]).queryAllByRole('columnheader');
    const bodyCells = within(bodyRows[0]).getAllByRole('cell');

    expect(table).toBeInTheDocument();
    expect(rowGroups).toHaveLength(2);
    expect(headerRows).toHaveLength(1);
    expect(headerColumnHeaders).toHaveLength(2);
    expect(headerCells).toHaveLength(0);
    expect(bodyRows).toHaveLength(1);
    expect(bodyColumnHeaders).toHaveLength(0);
    expect(bodyCells).toHaveLength(2);

    expect(bodyCells[0]).not.toHaveAttribute('colspan');
    expect(bodyCells[1]).not.toHaveAttribute('colspan');
  });

  describe('NxTable.Body', function() {
    it('Puts the correct colSpan on a loading meta-info cell', function() {
      render(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body isLoading />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
    });

    it('Puts the correct colSpan on an emptyMessage meta-info cell', async function() {
      render(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body emptyMessage="Empty" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
      expect(screen.getByRole('cell')).toHaveTextContent('Empty');
    });

    it('Puts the correct colSpan on an error meta-info cell', function() {
      render(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body error="Error!" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
      expect(screen.getByRole('cell')).toHaveTextContent('Error!');
    });

    it('correctly updates the colspan if the number of columns changes', async function() {
      const { rerender } = render(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body error="Error!" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');

      rerender(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body error="Error!" />
        </NxTable>
      );

      await waitFor(() => expect(screen.getByRole('cell')).toHaveAttribute('colspan', '1'));

      expect(screen.getByRole('cell')).toHaveTextContent('Error!');
    });

    it('does not show the emptyMessage when there are children', async function() {
      render(
        <NxTable>
          <NxTable.Body emptyMessage="Empty message">
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      );

      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('does not show the emptyMessage when isLoading', function() {
      render(<NxTable><NxTable.Body emptyMessage="Empty message" isLoading /></NxTable>);
      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('does not show the emptyMessage when in error', function() {
      render(<NxTable><NxTable.Body emptyMessage="Empty message" error="Errr" retryHandler={() => { }} /></NxTable>);

      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('removes the emptyMessage when children are added', async function() {
      const { rerender } = render(<NxTable><NxTable.Body emptyMessage="Empty message"></NxTable.Body></NxTable>);

      expect(screen.getByRole('rowgroup')).toHaveTextContent('Empty message');

      rerender(
        <NxTable>
          <NxTable.Body emptyMessage="Empty message">
            <NxTable.Row>
              <NxTable.Cell />
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell />
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      );

      await waitFor(() => expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message'));
    });
  });

  describe('NxTable.Row', function() {
    it('renders cell instead of columnheader when isFilterHeader is set to true', function() {
      render(
        <NxTable>
          <NxTable.Head>
            <NxTable.Row isFilterHeader={true}>
              <NxTable.Cell>Foo</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
        </NxTable>
      );

      expect(screen.getByRole('cell')).toBeInTheDocument();
    });

    it('sets the clickable row accessible name based on the text of its cells', function() {
      render(
        <NxTable>
          <NxTable.Body>
            <NxTable.Row isClickable={true}>
              <NxTable.Cell>Foo</NxTable.Cell>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      );

      expect(screen.getByRole('row')).toHaveAccessibleName('Foo Bar');
    });
  });

  describe('NxTable.Cell', function() {
    const renderColumnHeader = (extraProps?: NxTableCellProps) => render(
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell { ...extraProps }/>
          </NxTable.Row>
        </NxTable.Head>
      </NxTable>
    ).getByRole('columnheader') as HTMLElement;

    describe('when the chevron prop is true', function() {
      describe('when not isHeader', function() {
        it('sets the button accessible name from the row clickAccessibleLabel', function() {
          render(
            <NxTable>
              <NxTable.Body>
                <NxTable.Row clickAccessibleLabel="dolphin">
                  <NxTable.Cell chevron/>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          );

          expect(screen.getByRole('button')).toHaveAccessibleName('dolphin');
        });
      });

      describe('when isHeader', function() {
        it('renders a header cell with the text "Select Row"', function() {
          const component = renderColumnHeader({
            chevron: true,
            sortDir: 'asc',
            children: <span>foo</span>
          })!;

          expect(component).toHaveTextContent('Select Row');
        });
      });
    });

    describe('when clickable and the rowBtnIcon is set', function() {
      const renderTableCell = (cellProps?: NxTableCellProps, rowProps?: NxTableRowProps, isHeader?: boolean) => {
        const children = (
          <NxTable.Row isClickable={true} { ...rowProps }>
            <NxTable.Cell>Foo</NxTable.Cell>
            <NxTable.Cell>Bar</NxTable.Cell>
            <NxTable.Cell { ...cellProps }>Boo</NxTable.Cell>
          </NxTable.Row>
        );

        return render(
          <NxTable>
            { isHeader ? <NxTable.Head>{children}</NxTable.Head>
            : <NxTable.Body>{children}</NxTable.Body>
            }
          </NxTable>
        ).getAllByRole(isHeader ? 'columnheader' : 'cell')[2] as HTMLElement;
      };

      describe('when isHeader', function() {
        it('renders a header cell with the text "Select Row"', function() {
          const component = renderTableCell({
            rowBtnIcon: faEdit,
            sortDir: 'asc'
          }, undefined, true)!;

          expect(component).toHaveTextContent('Select Row');
        });
      });

      describe('when not isHeader', function() {
        it('does not show button when rowBtnIcon is undefined', function() {
          expect(within(renderTableCell({ rowBtnIcon: undefined })).queryByRole('button')).not.toBeInTheDocument();
        });

        it('does not show button when rowBtnIcon is null', function() {
          expect(within(renderTableCell({ rowBtnIcon: null })).queryByRole('button')).not.toBeInTheDocument();
        });

        it('show button when rowBtnIcon faEdit is set', function() {
          expect(within(renderTableCell({ rowBtnIcon: faEdit })).getByRole('button')).toBeInTheDocument();
        });

        it('ignores the JSX children and sort settings and renders a button that is not a sort button',
            function() {
              const cell = renderTableCell({
                rowBtnIcon: faEdit,
                sortDir: 'asc'
              });

              const button = within(cell).getByRole('button');
              expect(button).toBeInTheDocument();
              expect(cell).not.toHaveTextContent('Boo');
              expect(button).not.toHaveAccessibleName(/(Boo|ascending)/);
            }
        );

        it('sets the accessible name from the row clickAccessibleLabel', function() {
          const cell = renderTableCell({
            rowBtnIcon: faEdit,
            sortDir: 'asc'
          }, {
            clickAccessibleLabel: 'dolphin'
          });

          expect(within(cell).getByRole('button')).toHaveAccessibleName('dolphin');
        });

        it('sets the accessible name from the row cell contents, separated by a semi-colon', function() {
          const cell = renderTableCell({
            rowBtnIcon: faEdit,
            sortDir: 'asc'
          });

          expect(within(cell).getByRole('button')).toHaveAccessibleName('Foo; Bar');
        });
      });
    });

    describe('When isSortable is true', function() {
      it('sets default aria-sort', function() {
        expect(renderColumnHeader({ isSortable: true })).toHaveAttribute('aria-sort', 'none');
      });

      it('sets ascending aria-sort', function() {
        expect(renderColumnHeader({ isSortable: true, sortDir: 'asc' })).toHaveAttribute('aria-sort', 'ascending');
      });

      it('sets descending aria-sort', function() {
        expect(
            renderColumnHeader({ isSortable: true, sortDir: 'desc' })
        ).toHaveAttribute('aria-sort', 'descending');
      });

      it('renders default tooltip and content', async function() {
        const user = userEvent.setup();

        const sortDefault = within(
            renderColumnHeader({ isSortable: true, children: 'foo' })!
        ).getByRole('button');

        await user.hover(sortDefault);
        await runTimers();
        const tooltip = await screen.findByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent('foo unsorted');
      });

      it('renders ascending tooltip and content', async function() {
        const user = userEvent.setup();

        const sortAsc = within(
            renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'asc' })!
        ).getByRole('button');

        await user.hover(sortAsc);
        await runTimers();
        const tooltip = await screen.findByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent('foo ascending');
      });

      it('renders ascending tooltip and content', async function() {
        const user = userEvent.setup();

        const sortDesc = within(
            renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'desc' })!
        ).getByRole('button');

        await user.hover(sortDesc);
        await runTimers();
        const tooltip = await screen.findByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent('foo descending');
      });

      it('sets default button accessible name to match the tooltip', function() {
        const button = within(renderColumnHeader({ isSortable: true, children: 'foo' })).getByRole('button');

        expect(button).toHaveAccessibleName('foo unsorted');
      });

      it('sets ascending button accessible name to match the tooltip', function() {
        const button = within(renderColumnHeader({
          isSortable: true,
          children: 'foo',
          sortDir: 'asc'
        })).getByRole('button');

        expect(button).toHaveAccessibleName('foo ascending');
      });

      it('sets descending button accessible name to match the tooltip', function() {
        const button = within(renderColumnHeader({
          isSortable: true,
          children: 'foo',
          sortDir: 'desc'
        })).getByRole('button');

        expect(button).toHaveAccessibleName('foo descending');
      });
    });
  });
});
