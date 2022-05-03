/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import {
  NxForm,
  NxFormGroup,
  NxH2,
  NxP,
  NxScrollNav,
  NxStatefulTextInput,
  NxTable,
  NxTile,
  useScrollSpy,
  useToggle
} from '@sonatype/react-shared-components';
import { keys } from 'ramda';

const tableData = [
  { codepoint: '0020', glyph: ' ', category: 'Zs' },
  { codepoint: '0021', glyph: '!', category: 'Po' },
  { codepoint: '0022', glyph: '"', category: 'Po' },
  { codepoint: '0023', glyph: '#', category: 'Po' },
  { codepoint: '0024', glyph: '$', category: 'Sc' },
  { codepoint: '0025', glyph: '%', category: 'Po' },
  { codepoint: '0026', glyph: '&', category: 'Po' },
  { codepoint: '0027', glyph: '\'', category: 'Po' },
  { codepoint: '0028', glyph: '(', category: 'Ps' },
  { codepoint: '0029', glyph: ')', category: 'Pe' },
  { codepoint: '002A', glyph: '*', category: 'Po' },
  { codepoint: '002B', glyph: '+', category: 'Sm' },
  { codepoint: '002C', glyph: ',', category: 'Po' },
  { codepoint: '002D', glyph: '-', category: 'Pd' },
  { codepoint: '002E', glyph: '.', category: 'Po' },
  { codepoint: '002F', glyph: '/', category: 'Po' },
  { codepoint: '0030', glyph: '0', category: 'Nd' },
  { codepoint: '0031', glyph: '1', category: 'Nd' },
  { codepoint: '0032', glyph: '2', category: 'Nd' },
  { codepoint: '0033', glyph: '3', category: 'Nd' },
  { codepoint: '0034', glyph: '4', category: 'Nd' },
  { codepoint: '0035', glyph: '5', category: 'Nd' },
  { codepoint: '0036', glyph: '6', category: 'Nd' },
  { codepoint: '0037', glyph: '7', category: 'Nd' },
  { codepoint: '0038', glyph: '8', category: 'Nd' },
  { codepoint: '0039', glyph: '9', category: 'Nd' },
  { codepoint: '003A', glyph: ':', category: 'Po' },
  { codepoint: '003B', glyph: ';', category: 'Po' },
];

export default function NxScrollNavExample() {
  const scrollRefs = {
        'Information': useRef<HTMLElement>(null),
        'Form': useRef<HTMLElement>(null),
        'Table': useRef<HTMLElement>(null)
      },
      [isDropdownOpen, toggleDropdownOpen] = useToggle(false),
      { scrollContainerProps, scrollTo, activeSection } = useScrollSpy(scrollRefs);

  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <>
      <NxScrollNav scrollSections={keys(scrollRefs)}
                   activeSection={activeSection}
                   isDropdownOpen={isDropdownOpen}
                   onScrollSectionClick={scrollTo}
                   onToggleDropdownCollapse={toggleDropdownOpen} />
      <div className="nx-scrollable" { ...scrollContainerProps }>
        <NxTile ref={scrollRefs.Information}>
          <NxTile.Header>
            <NxTile.HeaderTitle>
              <NxH2>Information</NxH2>
            </NxTile.HeaderTitle>
          </NxTile.Header>
          <NxTile.Content>
            <NxP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis augue at scelerisque dictum. Nunc
              euismod ipsum a dui consectetur cursus. Curabitur efficitur risus ac lorem faucibus, nec varius velit
              accumsan. Praesent vulputate a odio ut gravida. Curabitur pharetra iaculis semper. Fusce eget quam
              eleifend, pellentesque mauris eget, placerat magna. Aliquam rhoncus ligula quis facilisis suscipit. Nunc
              eu mi dignissim, varius nisi eget, accumsan sem.  Vestibulum neque turpis, maximus quis magna vel,
              eleifend feugiat lorem. In vel ante eu arcu viverra blandit eu vel nunc. Ut sit amet velit ut quam
              condimentum scelerisque eu quis mi. Donec eget nisl sapien. Curabitur ac faucibus nisi.  Mauris pulvinar
              elementum ante ac posuere.  Phasellus tempus ultricies nisl, vitae egestas lacus tempor vel. Cras sagittis
              pretium velit sed commodo. Cras tincidunt nibh accumsan tellus tincidunt pellentesque. Donec et imperdiet
              purus. Proin arcu est, porta quis risus cursus, maximus feugiat dui. Phasellus augue massa, volutpat
              euismod erat sit amet, porttitor bibendum magna. Donec eget ligula porttitor, fringilla risus sed, posuere
              elit. Proin euismod purus felis, eu eleifend metus lobortis ut. Donec mattis ut lorem quis porta. Quisque
              sed mi maximus, fermentum diam quis, sollicitudin lectus. Mauris in convallis tortor. Praesent viverra
              tellus et aliquet tempus.  Phasellus gravida justo sagittis ligula finibus, vel facilisis sem dignissim.
              Morbi euismod odio ex, sit amet sodales nisi vehicula ac.  Curabitur faucibus sagittis mauris, ut dapibus
              ex feugiat et.  Vestibulum nec metus nec arcu placerat maximus. In maximus tortor tellus, vel tempus lacus
              cursus vel.  Interdum et malesuada fames ac ante ipsum primis in faucibus.  Praesent non est elit. Morbi
              eu leo in diam ultricies euismod. Maecenas id nulla at felis pharetra tincidunt.  Pellentesque pulvinar
              diam non diam lobortis, molestie eleifend orci rhoncus. Duis vehicula viverra sem vitae feugiat.  Sed
              semper, nisi a laoreet vehicula, leo erat imperdiet diam, at aliquet metus ex id sapien. Nullam porta
              mauris ex, ac dictum elit imperdiet vel. Ut porta eget velit eu iaculis. Sed sed tortor lacinia,
              pellentesque lectus et, ultricies ipsum. Sed blandit neque ex, et fermentum mauris tincidunt ut. Phasellus
              vitae nulla eget ipsum luctus rhoncus. Nulla imperdiet dolor eu placerat pulvinar.  Aliquam commodo leo
              diam, porta sollicitudin purus congue mollis. Aliquam erat volutpat.  Interdum et malesuada fames ac ante
              ipsum primis in faucibus.  In vestibulum posuere magna. Duis eget commodo risus. Sed in dapibus magna.
              Etiam quis nisl eu risus porttitor tempus ornare at nisl. Aenean pretium at est quis viverra.  Integer
              ligula enim, ullamcorper in ligula dignissim, semper dictum metus. Curabitur ut finibus purus, sed finibus
              nunc.  Etiam varius tincidunt venenatis. Sed efficitur cursus aliquet.
            </NxP>
          </NxTile.Content>
        </NxTile>
        <NxTile ref={scrollRefs.Form}>
          <NxForm onSubmit={onSubmit}>
            <NxTile.Header>
              <NxTile.HeaderTitle>
                <NxH2>Form</NxH2>
              </NxTile.HeaderTitle>
            </NxTile.Header>
            <NxTile.Content>
              <NxFormGroup label="Username">
                <NxStatefulTextInput />
              </NxFormGroup>
              <NxFormGroup label="Hostname">
                <NxStatefulTextInput />
              </NxFormGroup>
            </NxTile.Content>
          </NxForm>
        </NxTile>
        <NxTile ref={scrollRefs.Table}>
          <NxTile.Header>
            <NxTile.HeaderTitle>
              <NxH2>Information</NxH2>
            </NxTile.HeaderTitle>
          </NxTile.Header>
          <NxTile.Content>
            <NxTable>
              <NxTable.Head>
                <NxTable.Row>
                  <NxTable.Cell>Codepoint</NxTable.Cell>
                  <NxTable.Cell>Glyph</NxTable.Cell>
                  <NxTable.Cell>General Category</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Head>
              <NxTable.Body>
                {
                  tableData.map(({ codepoint, glyph, category }) => (
                    <NxTable.Row key={codepoint}>
                      <NxTable.Cell>{codepoint}</NxTable.Cell>
                      <NxTable.Cell>{glyph}</NxTable.Cell>
                      <NxTable.Cell>{category}</NxTable.Cell>
                    </NxTable.Row>
                  ))
                }
              </NxTable.Body>
            </NxTable>
          </NxTile.Content>
        </NxTile>
      </div>
    </>
  );
}
