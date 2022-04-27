/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefObject, useRef } from 'react';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxFontAwesomeIcon, NxP, useScrollSpy } from '@sonatype/react-shared-components';

export default function UseScrollSpyExample() {
  const scrollRefs: Record<string, RefObject<HTMLElement>> = {
        foo: useRef<HTMLElement>(null),
        bar: useRef<HTMLElement>(null),
        baz: useRef<HTMLElement>(null)
      },
      { withScrollSpy, scrollTo, activeSection } = useScrollSpy(scrollRefs);

  return (
    <>
      <div>
        <NxButton onClick={() => scrollTo('foo')}>Foo</NxButton>
        { activeSection === 'foo' && <NxFontAwesomeIcon icon={faHandPointLeft} /> }
      </div>
      <div>
        <NxButton onClick={() => scrollTo('bar')}>Bar</NxButton>
        { activeSection === 'bar' && <NxFontAwesomeIcon icon={faHandPointLeft} /> }
      </div>
      <div>
        <NxButton onClick={() => scrollTo('baz')}>Baz</NxButton>
        { activeSection === 'baz' && <NxFontAwesomeIcon icon={faHandPointLeft} /> }
      </div>
      {
        withScrollSpy(
          <div className="nx-scrollable">
            <NxP ref={scrollRefs.foo}>
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
              tellus et aliquet tempus. Phasellus gravida justo sagittis ligula finibus, vel facilisis sem dignissim.
              Morbi euismod odio ex, sit amet sodales nisi vehicula ac.  Curabitur faucibus sagittis mauris, ut dapibus
              ex feugiat et. Vestibulum nec metus nec arcu placerat maximus. In maximus tortor tellus, vel tempus lacus
              cursus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non est elit. Morbi eu
              leo in diam ultricies euismod. Maecenas id nulla at felis pharetra tincidunt. Pellentesque pulvinar diam
              non diam lobortis, molestie eleifend orci rhoncus. Duis vehicula viverra sem vitae feugiat. Sed semper,
              nisi a laoreet vehicula, leo erat imperdiet diam, at aliquet metus ex id sapien. Nullam porta mauris ex,
              ac dictum elit imperdiet vel. Ut porta eget velit eu iaculis. Sed sed tortor lacinia, pellentesque lectus
              et, ultricies ipsum. Sed blandit neque ex, et fermentum mauris tincidunt ut. Phasellus vitae nulla eget
              ipsum luctus rhoncus. Nulla imperdiet dolor eu placerat pulvinar.  Aliquam commodo leo diam, porta
              sollicitudin purus congue mollis. Aliquam erat volutpat.  Interdum et malesuada fames ac ante ipsum primis
              in faucibus. In vestibulum posuere magna. Duis eget commodo risus. Sed in dapibus magna. Etiam quis nisl
              eu risus porttitor tempus ornare at nisl. Aenean pretium at est quis viverra.  Integer ligula enim,
              ullamcorper in ligula dignissim, semper dictum metus. Curabitur ut finibus purus, sed finibus nunc.  Etiam
              varius tincidunt venenatis. Sed efficitur cursus aliquet.
            </NxP>
            <NxP ref={scrollRefs.bar}>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur scelerisque a augue rhoncus
              rutrum.  Phasellus volutpat nunc lorem, at eleifend est tempus ac. Sed at sapien quis augue pretium
              commodo. Donec malesuada erat vel ex ullamcorper, id iaculis est sodales. Proin dapibus, odio non tempor
              lobortis, lectus leo interdum ligula, ut tempus neque mi sed quam. Fusce sodales risus at turpis cursus
              lobortis. In dapibus, lectus sed eleifend consectetur, sapien augue pellentesque ex, fermentum semper elit
              sapien et quam. Donec arcu lectus, faucibus quis ullamcorper at, aliquet vel magna. Fusce eu massa luctus
              nibh lobortis maximus at a sapien. In mollis, leo sit amet commodo congue, arcu dui porta elit, ac
              molestie turpis nibh id ante. Sed tortor magna, tempor eu justo at, suscipit fringilla dui. Sed ultricies
              enim vitae magna lobortis hendrerit.  Maecenas sit amet orci nulla. Nulla accumsan elit sed commodo
              lacinia.  Aliquam eget tortor placerat, accumsan felis nec, ultricies sem. Curabitur a nibh sed enim
              volutpat malesuada ac vel augue. Quisque efficitur auctor diam, at tempor augue ultrices non. Sed
              efficitur, massa quis fringilla euismod, augue justo dignissim metus, tincidunt dignissim enim lacus quis
              velit. Mauris varius dignissim hendrerit.  Suspendisse potenti. Mauris cursus felis id ultrices congue.
              Quisque consectetur sodales turpis ut finibus. Donec risus lorem, ullamcorper et placerat at, dapibus
              rhoncus augue. Nulla posuere blandit mauris eget imperdiet. Pellentesque rutrum massa et nibh lobortis, in
              mattis lectus aliquet. Donec consectetur dolor at nisi dignissim aliquet. Donec viverra leo efficitur,
              varius erat a, ultrices sapien. Nulla nec magna in libero suscipit euismod. Aliquam eleifend at augue eu
              lacinia. Integer sodales dignissim ipsum, iaculis interdum lorem fringilla at. Proin sit amet ex non
              libero tincidunt imperdiet. Sed viverra felis at rhoncus condimentum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget posuere purus. Phasellus volutpat
              cursus placerat.  Nunc elementum ipsum sed ex sollicitudin, ut luctus orci efficitur. Suspendisse in porta
              ex. Cras sit amet ligula nisl. Vestibulum id odio at lacus tempus porttitor ac a tellus. Quisque malesuada
              diam eu sagittis venenatis. Nulla tristique dui rhoncus orci facilisis pharetra. Aliquam facilisis luctus
              nisl ac ornare. Nunc purus dui, consequat eu magna eu, euismod convallis justo. Proin sapien ex,
              consectetur sit amet leo non, aliquet ultricies ligula. Phasellus luctus arcu ac volutpat mollis. Nunc
              ornare ligula odio, lacinia tincidunt ex gravida sit amet. In id condimentum massa. Cras sed fermentum
              turpis, ut commodo orci.  Integer eu erat vitae ligula feugiat tincidunt quis quis ipsum. Suspendisse
              potenti. Sed rutrum est eu urna bibendum, eget commodo neque consectetur. In mollis tincidunt bibendum.
              Curabitur facilisis tristique magna, vitae feugiat libero eleifend ut. Mauris eget sagittis erat, ut
              iaculis enim.  Duis in vulputate ante, eu pellentesque sapien. Integer convallis orci in condimentum
              venenatis. Etiam dui tellus, maximus ac augue quis, ullamcorper rutrum risus. Proin facilisis venenatis
              sem eget dapibus. Aenean varius elit vel ex sollicitudin suscipit a ut augue.  Sed at purus vitae nibh
              dapibus ultrices. Donec orci mi, condimentum viverra dignissim ac, faucibus quis arcu.  Vivamus viverra
              imperdiet nibh, ac dapibus dolor. Proin varius, justo a pharetra scelerisque, nulla nunc finibus urna, ac
              ornare diam ex id lacus.  Nunc at auctor felis, a iaculis purus.  Aliquam scelerisque, dolor sit amet
              fermentum interdum, odio eros pretium odio, ac facilisis elit ex ac urna.  Maecenas quis ex ex.  Praesent
              consectetur ornare orci et tristique. Nullam pretium sodales elementum. Nam sit amet mauris turpis.  Duis
              erat sapien, consequat at placerat non, pharetra ut eros. Aenean non bibendum magna.  Pellentesque
              volutpat ipsum in massa mattis rhoncus. Mauris malesuada ornare massa, posuere ultricies magna fermentum
              non.  Cras dapibus, dolor non volutpat fringilla, ipsum quam elementum orci, eget varius odio felis in
              turpis. Morbi neque velit, placerat ac iaculis a, maximus id tellus. Pellentesque aliquam risus ut
              interdum eleifend.
            </NxP>
            <NxP ref={scrollRefs.baz}>
              Proin nec leo id mauris placerat tincidunt. Aenean commodo urna pellentesque sem laoreet finibus. Proin
              faucibus justo et pretium sodales. Ut molestie, justo ut vestibulum porta, nulla leo porta diam, quis
              mattis est sem a augue. Praesent scelerisque nec felis quis eleifend. Curabitur facilisis felis ornare
              malesuada suscipit.  Donec vitae ligula ut dui semper accumsan. Vestibulum pretium elementum nulla. In
              rutrum, lacus id sagittis dapibus, neque nisl pellentesque erat, ut lobortis felis tortor vitae ante. In
              ornare, est ullamcorper ornare ullamcorper, arcu magna aliquam odio, vitae porta elit eros a ante. Cras
              iaculis venenatis volutpat.  Praesent congue massa sed neque sodales, sit amet pharetra purus finibus.
              Donec eu diam ex. Nullam quis fermentum ipsum, ac ullamcorper lectus. Duis eget diam id ante luctus
              tincidunt. Donec elementum mattis nibh, non aliquam sem consectetur efficitur. Quisque quis eros aliquet,
              aliquet risus quis, auctor dolor.  Mauris ornare justo ac consectetur pellentesque. Aliquam malesuada
              efficitur quam, sit amet ultrices justo mattis ac. Nullam hendrerit tellus tellus, in dignissim urna
              pharetra eget.  Donec nec justo mauris.  In sed nunc enim. Mauris ultrices in enim sit amet pretium.
              Pellentesque massa neque, varius in lorem a, volutpat ullamcorper arcu. Phasellus tincidunt suscipit
              felis, non finibus dolor pretium nec. Vestibulum aliquam nisl blandit egestas molestie. Nam non lacus
              tempor, porta neque at, ornare sem. Suspendisse quis sollicitudin sapien.  Quisque at lacus purus. Nulla
              cursus pharetra ligula, sit amet viverra quam tempus nec. Quisque dignissim tempor risus ut porttitor.
              Maecenas vel justo nec felis ullamcorper viverra. Donec non dapibus ipsum. Sed rutrum in nisi et feugiat.
              Duis mollis diam a rutrum dapibus. Ut dignissim sed turpis non condimentum.  Curabitur suscipit orci at
              diam pretium, vitae vestibulum sem scelerisque. Aenean accumsan vehicula pellentesque. Morbi suscipit
              felis in aliquet molestie.  Aenean at eleifend lorem, sed mollis augue.  Vestibulum porta velit est. Cras
              nec suscipit nisl. Fusce nec augue condimentum, eleifend mi eget, pulvinar quam. Ut facilisis, augue vel
              sagittis molestie, ligula dolor bibendum odio, interdum blandit sem nisl a velit. Nullam tellus justo,
              vestibulum vitae ullamcorper eu, venenatis ac justo. Vestibulum ac diam diam.  Pellentesque porta massa
              non dolor porta, vel congue massa lacinia. Nulla fermentum libero at tincidunt auctor. Proin quis lacus
              sed ex aliquet semper eu elementum risus. Nam vulputate, dolor at commodo ultrices, nunc lacus scelerisque
              mi, sed lacinia lacus sapien at orci. Suspendisse augue tortor, dictum vel dui id, molestie vehicula arcu.
              Curabitur vulputate, odio posuere hendrerit placerat, orci purus dapibus ligula, non ultricies est nibh
              accumsan magna.  Integer eu nulla laoreet, ultricies est quis, porttitor diam. Suspendisse potenti. Nam
              blandit consectetur odio sed fringilla. Praesent blandit odio et tellus aliquam, non efficitur libero
              semper.
            </NxP>
          </div>
        )
      }
    </>
  );
}
