/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, simpleTest, simpleTestLongElement } = require('./testUtils');

describe('NxTree', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTree');
    await browser.refresh();
  });

  const nonCollapsibleExampleSelector = '#nx-tree-non-collapsible-example .nx-tree',
      collapsibleExampleSelector = '#nx-tree-collapsible-example .gallery-example-live > .nx-tree',
      collapsibleExamplePreviousFocusableElementSelector = '#nx-tree-collapsible-example .gallery-checkered-background-toggle label',
      nonCollapsibleMultiTopExampleSelector = '#nx-tree-non-collapsible-multi-top-example .nx-tree',
      collapsibleMultiTopExampleSelector = '#nx-tree-collapsible-multi-top-example .nx-tree',
      noGutterExampleSelector = '#nx-tree-no-gutter-example .gallery-example-live',
      anItemSelector = `${collapsibleExampleSelector} > .nx-tree__item > .nx-tree > .nx-tree__item >
          .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item:nth-child(2)`,
      noGutterFirstItemSelector = `${noGutterExampleSelector} .nx-tree > .nx-tree__item`;

  function itemWithText(tree, text) {
    // creates a relative XPath selector for a tree item with the given text
    return tree.$(`.//li[./span//*[text()="${text}"]]`);
  }

  function clickTarget(treeitem) {
    return treeitem.$('.nx-tree__item-label .nx-icon');
  }

  function collapseTarget(treeitem) {
    return treeitem.$('.nx-tree__collapse-click');
  }

  function hasClass(element, cls) {
    return browser.execute((el, cls) => el.classList.contains(cls), element, cls);
  }

  it('looks right with a single top entry and no collapsing', simpleTestLongElement(nonCollapsibleExampleSelector));
  it('looks right with a single top entry and collapsing', simpleTest(collapsibleExampleSelector));
  it('looks right with a multiple top entries and no collapsing', simpleTest(nonCollapsibleMultiTopExampleSelector));
  it('looks right with a multiple top entries and collapsing', simpleTest(collapsibleMultiTopExampleSelector));
  it('looks right in relation to other content when it has the no-gutter modifier',
      simpleTest(noGutterExampleSelector));

  it('looks right with some collapsible elements collapsed', async function() {
    const tree = await browser.$(collapsibleExampleSelector),
        [images, keyboard] = await Promise.all([itemWithText(tree, 'images'), itemWithText(tree, 'keyboard')]),
        [imagesCollapse, keyboardCollapse] = await Promise.all([collapseTarget(images), collapseTarget(keyboard)]);

    await imagesCollapse.scrollIntoView({ block: 'center' });
    await imagesCollapse.click();
    await keyboardCollapse.click();
    await browser.execute(function(el) {
      el.blur();
    }, keyboard);

    await simpleTest(collapsibleExampleSelector)();
  });

  it('looks right when an item is focused', focusTest(collapsibleExampleSelector, anItemSelector));

  it('looks right when a no-gutter item is focused', focusTest(noGutterExampleSelector, noGutterFirstItemSelector));

  it('looks right when a collapse control is clicked', async function() {
    const tree = await browser.$(collapsibleExampleSelector),
        images = await itemWithText(tree, 'images'),
        imagesCollapse = await collapseTarget(images);

    await imagesCollapse.click();
    await simpleTest(collapsibleExampleSelector)();
  });

  describe('keyboard navigation', function() {
    it('initially focuses the first item in the tree when reached via tab', async function() {
      const [previousFocusableElement, tree] = await Promise.all([
        browser.$(collapsibleExamplePreviousFocusableElementSelector),
        browser.$(collapsibleExampleSelector)
      ]);

      const firstItem = await tree.$('.nx-tree__item');

      await browser.execute(function(el) {
        el.focus();
      }, previousFocusableElement);

      await browser.keys('Tab');

      expect(await firstItem.isFocused()).toBe(true);
    });

    it('moves beyond the tree when tab is pressed while part of the tree is focused', async function() {
      const [tree, firstItem] = await Promise.all([
        browser.$(collapsibleExampleSelector),
        browser.$(`${collapsibleExampleSelector} .nx-tree__item`)
      ]);

      await browser.execute(function(el) {
        el.focus();
      }, firstItem);

      await browser.keys('Tab');
      const treeContainsFocusedEl = await browser.execute(t => t.contains(document.activeElement), tree);

      expect(treeContainsFocusedEl).toBe(false);
    });

    it('focuses an item when that item is clicked', async function() {
      const tree = await browser.$(collapsibleExampleSelector),
          [root, cat1, videos, itemOutsideTree] = await Promise.all([
            itemWithText(tree, '/'),
            itemWithText(tree, 'cat1.jpg'),
            itemWithText(tree, 'videos'),
            browser.$(collapsibleExamplePreviousFocusableElementSelector)
          ]),
          [rootClickTarget, cat1ClickTarget, videosClickTarget] = await Promise.all([
            clickTarget(root),
            clickTarget(cat1),
            clickTarget(videos)
          ]);

      await cat1ClickTarget.click();
      expect(await cat1.isFocused()).toBe(true);

      await rootClickTarget.click();
      expect(await root.isFocused()).toBe(true);

      await itemOutsideTree.click();
      expect(await browser.execute(t => t.contains(document.activeElement), tree)).toBe(false);

      await videosClickTarget.click();
      expect(await videos.isFocused()).toBe(true);
    });

    it('moves to the next visible tree item when down is pressed', async function() {
      const tree = await browser.$(collapsibleExampleSelector),
          [
            // these variable names reflect the label content of the various tree items
            root,
            srv,
            ftp,
            http,
            cats,
            indexHtml,
            images,
            videos,
            boxesWebm,
            cucumberWebm,
            keyboard,
            keyboard1,
            keyboard2
          ] = await Promise.all([
            itemWithText(tree, '/'),
            itemWithText(tree, 'srv'),
            itemWithText(tree, 'ftp'),
            itemWithText(tree, 'http'),
            itemWithText(tree, 'cats'),
            itemWithText(tree, 'index.html'),
            itemWithText(tree, 'images'),
            itemWithText(tree, 'videos'),
            itemWithText(tree, 'boxes.webm'),
            itemWithText(tree, 'cucumber.webm'),
            itemWithText(tree, 'keyboard'),
            itemWithText(tree, 'keyboard1.webm'),
            itemWithText(tree, 'keyboard2.webm')
          ]),
          [imagesCollapse, rootClick] = await Promise.all([
            collapseTarget(images),
            clickTarget(root)
          ]);

      // collapse the images subtree, and then reset the focus at the top before testing keynav
      await imagesCollapse.click();
      await rootClick.click();

      await browser.keys('ArrowDown');
      expect(await srv.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await ftp.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await http.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await cats.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await indexHtml.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await images.isFocused()).toBe(true);

      // images children do not get focused since they are collapsed

      await browser.keys('ArrowDown');
      expect(await videos.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await boxesWebm.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await cucumberWebm.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await keyboard.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await keyboard1.isFocused()).toBe(true);

      await browser.keys('ArrowDown');
      expect(await keyboard2.isFocused()).toBe(true);
    });

    it('moves to the previous visible tree item when up is pressed', async function() {
      const tree = await browser.$(collapsibleExampleSelector),
          [
            root,
            srv,
            ftp,
            http,
            cats,
            indexHtml,
            images,
            cat1,
            cat2,
            cat3,
            cat5000,
            videos,
            boxesWebm,
            cucumberWebm,
            keyboard,
            keyboard1,
            keyboard2
          ] = await Promise.all([
            itemWithText(tree, '/'),
            itemWithText(tree, 'srv'),
            itemWithText(tree, 'ftp'),
            itemWithText(tree, 'http'),
            itemWithText(tree, 'cats'),
            itemWithText(tree, 'index.html'),
            itemWithText(tree, 'images'),
            itemWithText(tree, 'cat1.jpg'),
            itemWithText(tree, 'cat2.jpg'),
            itemWithText(tree, 'cat3.jpg'),
            itemWithText(tree, 'cat5000.jpg'),
            itemWithText(tree, 'videos'),
            itemWithText(tree, 'boxes.webm'),
            itemWithText(tree, 'cucumber.webm'),
            itemWithText(tree, 'keyboard'),
            itemWithText(tree, 'keyboard1.webm'),
            itemWithText(tree, 'keyboard2.webm')
          ]),
          [imagesCollapse, keyboard2Click, videosClick] = await Promise.all([
            collapseTarget(images),
            clickTarget(keyboard2),
            clickTarget(videos)
          ]);

      await keyboard2Click.click();
      expect(await keyboard2.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await keyboard1.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await keyboard.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cucumberWebm.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await boxesWebm.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await videos.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cat5000.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cat3.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cat2.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cat1.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await images.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await indexHtml.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await cats.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await http.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await ftp.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await srv.isFocused()).toBe(true);

      await browser.keys('ArrowUp');
      expect(await root.isFocused()).toBe(true);

      // trying to go beyond start has no effect
      await browser.keys('ArrowUp');
      expect(await root.isFocused()).toBe(true);

      await imagesCollapse.click();
      await videosClick.click();

      // collapsed subtree is skipped
      await browser.keys('ArrowUp');
      expect(await images.isFocused()).toBe(true);
    });

    describe('right arrow', function() {
      it('expands a collapsed, expandable tree item, without expanding previously collapsed subtrees', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            [root, images] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'images')
            ]),
            [rootCollapse, imagesCollapse] = await Promise.all([collapseTarget(root), collapseTarget(images)]);

        await imagesCollapse.click();
        await rootCollapse.click();
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);

        await browser.keys('ArrowRight');
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
        expect(await hasClass(images, 'open')).toBe(false);
      });

      it('moves to the first child of an expanded tree item', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            [root, srv] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'srv')
            ]),
            rootClick = await clickTarget(root);

        await rootClick.click();
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);

        await browser.keys('ArrowRight');
        expect(await srv.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
      });

      it('moves to the first child of an non-collapsible tree item', async function() {
        const tree = await browser.$(nonCollapsibleExampleSelector),
            [root, bin] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'bin')
            ]),
            rootClick = await clickTarget(root);

        await rootClick.click();
        expect(await root.isFocused()).toBe(true);

        await browser.keys('ArrowRight');
        expect(await bin.isFocused()).toBe(true);
      });

      it('does nothing on a leaf node tree item', async function() {
        const tree = await browser.$(nonCollapsibleExampleSelector),
            cat1 = await itemWithText(tree, 'cat1.jpg'),
            cat1Click = await clickTarget(cat1);

        await cat1Click.click();
        expect(await cat1.isFocused()).toBe(true);

        await browser.keys('ArrowRight');
        expect(await cat1.isFocused()).toBe(true);
      });
    });

    describe('left arrow', function() {
      it('collapses an expanded, collapsible tree item, without affecting collapse state of subtrees', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            [root, images, videos] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'images'),
              itemWithText(tree, 'videos')
            ]),
            [imagesCollapse, rootClick] = await Promise.all([
              collapseTarget(images),
              clickTarget(root)
            ]);

        await imagesCollapse.click();
        await rootClick.click();
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);

        await browser.keys('ArrowLeft');
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);

        await browser.keys('ArrowRight');
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
        expect(await hasClass(images, 'open')).toBe(false);
        expect(await hasClass(videos, 'open')).toBe(true);
      });

      it('moves to the parent of a collapsed tree item', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            [root, srv] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'srv')
            ]),
            srvCollapse = await collapseTarget(srv);

        await srvCollapse.click();
        expect(await srv.isFocused()).toBe(true);
        expect(await hasClass(srv, 'open')).toBe(false);

        await browser.keys('ArrowLeft');
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
        expect(await hasClass(srv, 'open')).toBe(false);
      });

      it('moves to the parent of a non-collapsible tree item', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            [images, cat1] = await Promise.all([
              itemWithText(tree, 'images'),
              itemWithText(tree, 'cat1.jpg')
            ]),
            cat1Click = await clickTarget(cat1);

        await cat1Click.click();
        expect(await cat1.isFocused()).toBe(true);

        await browser.keys('ArrowLeft');
        expect(await images.isFocused()).toBe(true);
        expect(await hasClass(images, 'open')).toBe(true);
      });

      it('does nothing on a top-level collapsed tree item', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            root = await itemWithText(tree, '/'),
            rootCollapse = await collapseTarget(root);

        await rootCollapse.click();
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);

        await browser.keys('ArrowLeft');
        expect(await root.isFocused()).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);
      });

      it('does nothing on a top-level non-collapsible tree item', async function() {
        const tree = await browser.$(collapsibleExampleSelector),
            root = await itemWithText(tree, '/'),
            rootClick = await clickTarget(root);

        await rootClick.click();
        expect(await root.isFocused()).toBe(true);

        await browser.keys('ArrowLeft');
        expect(await root.isFocused()).toBe(true);
      });
    });

    it('goes to the first element in the tree when Home is pressed', async function() {
      const tree = await browser.$(collapsibleMultiTopExampleSelector),
          [provinces, territories, manitoba, nunavut] = await Promise.all([
            itemWithText(tree, 'Provinces'),
            itemWithText(tree, 'Territories'),
            itemWithText(tree, 'Manitoba'),
            itemWithText(tree, 'Nunavut')
          ]),
          [provincesCollapse, manitobaClick, nunavutClick, territoriesClick] = await Promise.all([
            collapseTarget(provinces),
            clickTarget(manitoba),
            clickTarget(nunavut),
            clickTarget(territories)
          ]);

      await manitobaClick.click();
      expect(await manitoba.isFocused()).toBe(true);

      await browser.keys('Home');
      expect(await provinces.isFocused()).toBe(true);
      expect(await hasClass(provinces, 'open')).toBe(true);

      await nunavutClick.click();

      await browser.keys('Home');
      expect(await provinces.isFocused()).toBe(true);

      await browser.keys('Home');
      expect(await provinces.isFocused()).toBe(true);

      await territoriesClick.click();

      await browser.keys('Home');
      expect(await provinces.isFocused()).toBe(true);

      await provincesCollapse.click();
      await territoriesClick.click();

      await browser.keys('Home');
      expect(await provinces.isFocused()).toBe(true);
    });

    it('goes to the last visible element in the tree when End is pressed', async function() {
      const tree = await browser.$(collapsibleMultiTopExampleSelector),
          [provinces, territories, manitoba, nunavut, yukon] = await Promise.all([
            itemWithText(tree, 'Provinces'),
            itemWithText(tree, 'Territories'),
            itemWithText(tree, 'Manitoba'),
            itemWithText(tree, 'Nunavut'),
            itemWithText(tree, 'Yukon')
          ]),
          [territoriesCollapse, provincesClick, manitobaClick, territoriesClick, yukonClick] = await Promise.all([
            collapseTarget(territories),
            clickTarget(provinces),
            clickTarget(manitoba),
            clickTarget(territories),
            clickTarget(yukon)
          ]);

      await manitobaClick.click();
      expect(await manitoba.isFocused()).toBe(true);

      await browser.keys('End');
      expect(await nunavut.isFocused()).toBe(true);
      expect(await hasClass(provinces, 'open')).toBe(true);
      expect(await hasClass(territories, 'open')).toBe(true);

      await provincesClick.scrollIntoView({ block: 'center' });
      await provincesClick.click();

      await browser.keys('End');
      expect(await nunavut.isFocused()).toBe(true);

      await browser.keys('End');
      expect(await nunavut.isFocused()).toBe(true);

      await territoriesClick.click();

      await browser.keys('End');
      expect(await nunavut.isFocused()).toBe(true);

      await yukonClick.click();

      await browser.keys('End');
      expect(await nunavut.isFocused()).toBe(true);

      await territoriesCollapse.click();
      expect(await hasClass(territories, 'open')).toBe(false);

      await manitobaClick.click();

      await browser.keys('End');
      expect(await territories.isFocused()).toBe(true);
      expect(await hasClass(territories, 'open')).toBe(false);
    });

    it('remembers which item in the tree was focused when tab takes focus away and back again', async function() {
      const tree = await browser.$(collapsibleMultiTopExampleSelector),
          manitoba = await itemWithText(tree, 'Manitoba'),
          manitobaClick = await clickTarget(manitoba);

      await manitobaClick.click();
      expect(await manitoba.isFocused()).toBe(true);

      await browser.keys('Tab');

      expect(await browser.execute(t => t.contains(document.activeElement), tree)).toBe(false);

      await browser.keys(['Shift', 'Tab']);
      expect(await manitoba.isFocused()).toBe(true);
    });

    it('activates the item\'s link and does not change collapse state on Enter', async function() {
      const tree = await browser.$(collapsibleExampleSelector),
          [images, cat1] = await Promise.all([
            itemWithText(tree, 'images'),
            itemWithText(tree, 'cat1.jpg')
          ]),
          [cat1Click, imagesClick] = await Promise.all([clickTarget(cat1), clickTarget(images)]);

      await cat1Click.click();
      expect(await cat1.isFocused()).toBe(true);

      // this is expected to open the link in a new tab
      await browser.keys('Enter');

      try {
        // this will fail if the new window didn't open
        await browser.switchWindow('cat1.jpg');
        await browser.closeWindow();
      }
      finally {
        await browser.switchWindow('Sonatype shared component gallery');
      }

      expect(await hasClass(images, 'open')).toBe(true);
      await imagesClick.click();

      // Using browser.keys() here messes with the alert handling so we have to go lower-level
      await browser.performActions([{
        id: 'key1',
        type: 'key',
        actions: [{
          type: 'keyDown',
          // This private-use-area unicode codepoint is defined as meaning "Enter" in this API. See
          // https://www.w3.org/TR/webdriver/#keyboard-actions
          value: '\uE007'
        }, {
          type: 'keyUp',
          value: '\uE007'
        }]
      }]);

      // this tree item is just wired to an alert() call
      expect(await browser.isAlertOpen()).toBe(true);
      await browser.acceptAlert();
      expect(await hasClass(images, 'open')).toBe(true);
    });

    it('does nothing when enter is pressed on an item without interactive content', async function() {
      const tree = await browser.$(collapsibleExampleSelector),
          keyboard = await itemWithText(tree, 'keyboard'),
          keyboardClick = await clickTarget(keyboard);

      await keyboardClick.click();
      expect(await keyboard.isFocused()).toBe(true);
      expect(await hasClass(keyboard, 'open')).toBe(true);

      await browser.keys('Enter');

      // no change
      expect(await keyboard.isFocused()).toBe(true);
      expect(await hasClass(keyboard, 'open')).toBe(true);
    });
  });
});
