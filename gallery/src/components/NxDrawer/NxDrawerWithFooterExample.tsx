/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxDrawer, NxButton, NxP, NxButtonBar } from '@sonatype/react-shared-components';

export default function NxDrawerExample() {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerCloseHandler = () => setShowDrawer(false);

  return (
    <div className="gallery-pop-over-with-footer-example">
      <NxButton onClick={() => setShowDrawer(true)}>Open Drawer With Footer</NxButton>
      {showDrawer && (
        <NxDrawer onCancel={drawerCloseHandler}
                  headerTitle="Example Drawer Duis aute irure dolor in reprehenderit in voluptate velit esse{' '}
        cillum dolore eu fugiat nulla pariatur.">
          <NxDrawer.Content>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
              dolore eu fugiat nulla pariatur.
            </NxP>
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
          </NxDrawer.Content>
          <NxDrawer.Footer>
            <NxP>
              Pastry tiramisu jujubes biscuit marshmallow donut dragée.
              Jelly beans chocolate bar jelly beans soufflé candy wafer topping.
            </NxP>
            <NxButtonBar>
              <NxButton variant="primary">Footer</NxButton>
            </NxButtonBar>
          </NxDrawer.Footer>
        </NxDrawer>
      )}
    </div>
  );
}
