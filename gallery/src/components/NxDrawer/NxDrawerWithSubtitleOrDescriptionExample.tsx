/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDrawer,
  NxButton,
  NxP,
  NxBackButton,
  NxPageMain,
  NxPageTitle,
  NxH1,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxDrawerWithSubtitleOrDescriptionExample() {
  const [showDrawerWithSubtitle, setShowDrawerWithSubtitle] = useState(false);
  const [showDrawerWithDescription, setShowDrawerWithDescription] = useState(false);
  const [showDrawerWithBoth, setShowDrawerWithBoth] = useState(false);

  const description = (
    <>
      Pastry carrot cake cake bear <em>claw bear</em> claw. Toffee jelly beans biscuit jelly cotton
      candy marzipan liquorice. Brownie candy pie sweet roll powder danish dragée. Cake cookie
      topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
      tootsie roll croissant chupa chups oat cake.
    </>
  );

  const content = (
    <NxDrawer.Content>
      <NxP>
        Powder tiramisu gingerbread I love gummi bears I love. Lollipop gingerbread bonbon chupa chups cookie
        I love dessert cake. Pie candy canes liquorice jelly beans sweet roll. Jelly candy donut cotton candy
        halvah. Fruitcake halvah I love cheesecake I love I love. Wafer sweet sweet roll apple
        pie jelly-o cheesecake candy I love.
      </NxP>
      <NxP>
        Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
        Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
        love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
      </NxP>
      <NxP>
        Toffee tootsie roll danish chupa chups dessert cookie I love gummi bears wafer. Dragée
        chocolate cake cake brownie carrot cake caramels chocolate cake. Halvah jelly-o tart wafer
        jelly. Pastry <em>carrot</em> cake cake bear claw bear claw. Toffee jelly beans biscuit jelly cotton
        candy marzipan liquorice. Brownie candy pie sweet roll powder danish dragée. Cake cookie
        topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
        tootsie roll croissant chupa chups oat cake. Icing gingerbread pastry marshmallow pudding
        brownie gingerbread marzipan.
      </NxP>
      <NxP>
        Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
        cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
        halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
        macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
        drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
        powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
        love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
        chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
      </NxP>
      <NxP>
        Brownie candy pie sweet roll <strong>powder</strong> danish dragée. Cake cookie
        topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
        tootsie roll croissant chupa chups oat cake. Icing gingerbread pastry marshmallow pudding
        brownie gingerbread marzipan. I love candy canes dragée croissant cookie chocolate muffin. Marshmallow
        powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o.
      </NxP>
    </NxDrawer.Content>
  );

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
        <div className="nx-global-header__actions">
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </div>
      </header>

      {showDrawerWithSubtitle && (
        <NxDrawer id="nx-drawer-with-subtitle"
                  onCancel={() => setShowDrawerWithSubtitle(false)}
                  aria-labelledby="nx-drawer-with-subtitle">
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Drawer With Subtitle</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Subtitle</NxDrawer.Header.Subtitle>
          </NxDrawer.Header>
          {content}
        </NxDrawer>
      )}
      {showDrawerWithDescription && (
        <NxDrawer id="nx-drawer-with-description"
                  onCancel={() => setShowDrawerWithDescription(false)}
                  aria-labelledby="nx-drawer-with-description">
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Drawer With Description</NxDrawer.Header.Title>
            <NxDrawer.Header.Description>{description}</NxDrawer.Header.Description>
          </NxDrawer.Header>
          {content}
        </NxDrawer>
      )}
      {showDrawerWithBoth && (
        <NxDrawer id="nx-drawer-with-subtitle-and-description"
                  onCancel={() => setShowDrawerWithBoth(false)}
                  aria-labelledby="nx-drawer-with-subtitle-and-description">
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Drawer With Both</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Header Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>{description}</NxDrawer.Header.Description>
          </NxDrawer.Header>
          {content}
        </NxDrawer>
      )}
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Drawers With Subtitle Or Description Example</NxH1>
        </NxPageTitle>

        <NxP>
          Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
          cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
          halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
          macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
          drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
          powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
          love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
          chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
        </NxP>
        <NxP>
          <NxButton id="nx-drawer-with-subtitle-open-button" onClick={() => setShowDrawerWithSubtitle(true)}>
            Open Drawer with Subtitle
          </NxButton>
          <br/>
          <br/>
          <NxButton id="nx-drawer-with-description-open-button" onClick={() => setShowDrawerWithDescription(true)}>
            Open Drawer with Description
          </NxButton>
          <br/>
          <br/>
          <NxButton id="nx-drawer-with-subtitle-and-description-open-button"
                    onClick={() => setShowDrawerWithBoth(true)}>
            Open Drawer with Both
          </NxButton>
        </NxP>
        <NxP>
          Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
          Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
          love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
        </NxP>
        <NxP>
          Toffee tootsie roll danish chupa chups dessert cookie I love gummi bears wafer. Dragée
          chocolate cake cake brownie carrot cake caramels chocolate cake. Halvah jelly-o tart wafer
          jelly. Pastry <em>carrot</em> cake cake bear claw bear claw. Toffee jelly beans biscuit jelly cotton
          candy marzipan liquorice. Brownie candy pie sweet roll powder danish dragée. Cake cookie
          topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
          tootsie roll croissant chupa chups oat cake. Icing gingerbread pastry marshmallow pudding
          brownie gingerbread marzipan.
        </NxP>
        <NxP>
          Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
          cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
          halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
          macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
          drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
          powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
          love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
          chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
        </NxP>
        <NxP>
          Toffee tootsie roll danish chupa chups dessert cookie I love gummi bears wafer. Dragée
          chocolate cake cake brownie carrot cake caramels chocolate cake. Halvah jelly-o tart wafer
          jelly. Pastry <em>carrot</em> cake cake bear claw bear claw. Toffee jelly beans biscuit jelly cotton
          candy marzipan liquorice. Brownie candy pie sweet roll powder danish dragée. Cake cookie
          topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
          tootsie roll croissant chupa chups oat cake. Icing gingerbread pastry marshmallow pudding
          brownie gingerbread marzipan.
        </NxP>
        <NxP>
          Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
          cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
          halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
          macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
          drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
          powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
          love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
          chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
        </NxP>
      </NxPageMain>
    </>
  );
}
