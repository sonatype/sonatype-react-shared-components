/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTree', function() {
  const {
    focusTest,
    simpleTest,
    blurElement,
    waitAndGetElements,
    getPage,
    isFocused,
    scrollPage,
    a11yTest
  } = setupBrowser('#/pages/Tree');

  const nonCollapsibleExampleSelector = '#nx-tree-non-collapsible-example .nx-tree',
      collapsibleExampleSelector = '#nx-tree-collapsible-example .gallery-example-live > .nx-tree',
      collapsibleExamplePreviousFocusableElementSelector =
        '#nx-tree-collapsible-example .gallery-checkered-background-toggle label',
      nonCollapsibleMultiTopExampleSelector = '#nx-tree-non-collapsible-multi-top-example .nx-tree',
      collapsibleMultiTopExampleSelector = '#nx-tree-collapsible-multi-top-example .nx-tree',
      noGutterExampleSelector = '#nx-tree-no-gutter-example .gallery-example-live',
      anItemSelector = `${collapsibleExampleSelector} > .nx-tree__item > .nx-tree > .nx-tree__item >
          .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item:nth-child(2)`,
      noGutterFirstItemSelector = `${noGutterExampleSelector} .nx-tree > .nx-tree__item`;

  async function itemWithText(tree, text) {
    // creates a relative XPath selector for a tree item with the given text
    return (await tree.$x(`.//li[./span//*[text()="${text}"]]`))[0];
  }

  function clickTarget(treeitem) {
    return treeitem.$('.nx-tree__item-label .nx-icon');
  }

  function collapseTarget(treeitem) {
    return treeitem.$('.nx-tree__collapse-click');
  }

  function hasClass(element, cls) {
    return element.evaluate((el, cls) => el.classList.contains(cls), cls);
  }

  it('looks right with a single top entry and no collapsing', async function() {
    await simpleTest(nonCollapsibleExampleSelector)();
  });

  it('looks right with a single top entry and collapsing', simpleTest(collapsibleExampleSelector));
  it('looks right with a multiple top entries and no collapsing', simpleTest(nonCollapsibleMultiTopExampleSelector));
  it('looks right with a multiple top entries and collapsing', simpleTest(collapsibleMultiTopExampleSelector));
  it('looks right in relation to other content when it has the no-gutter modifier',
      simpleTest(noGutterExampleSelector));

  it('looks right with some collapsible elements collapsed', async function() {
    const [tree] = await waitAndGetElements(collapsibleExampleSelector),
        [images, keyboard] = await Promise.all([itemWithText(tree, 'images'), itemWithText(tree, 'keyboard')]),
        [imagesCollapse, keyboardCollapse] = await Promise.all([collapseTarget(images), collapseTarget(keyboard)]);

    await imagesCollapse.click();
    await keyboardCollapse.click();
    await blurElement(keyboard);

    await simpleTest(collapsibleExampleSelector)();
  });

  it('looks right when an item is focused', focusTest(collapsibleExampleSelector, anItemSelector));

  it('looks right when a no-gutter item is focused', focusTest(noGutterExampleSelector, noGutterFirstItemSelector));

  it('looks right when a collapse control is clicked', async function() {
    const [tree] = await waitAndGetElements(collapsibleExampleSelector),
        images = await itemWithText(tree, 'images'),
        imagesCollapse = await collapseTarget(images);

    await imagesCollapse.click();
    await simpleTest(collapsibleExampleSelector)();
  });

  // Check for RSC-1342
  it('does not scroll when a partially out-of-view tree\'s label is clicked', async function() {
    const [tree] = await waitAndGetElements(collapsibleExampleSelector),
        images = await itemWithText(tree, 'images');

    await scrollPage(0);

    const imagesLowerBound = await images.evaluate(e => e.getBoundingClientRect().bottom),
        viewportHeight = await getPage().evaluate(() => window.innerHeight),
        desiredScroll = imagesLowerBound - viewportHeight - 50;

    await scrollPage(desiredScroll);
    await (await clickTarget(images)).click();

    expect(await getPage().evaluate(() => window.scrollY)).toBe(desiredScroll);
  });

  describe('keyboard navigation', function() {
    it('initially focuses the first item in the tree when reached via tab', async function() {
      const [previousFocusableElement, tree] = await waitAndGetElements(
          collapsibleExamplePreviousFocusableElementSelector,
          collapsibleExampleSelector
      );

      const firstItem = await tree.$('.nx-tree__item');

      await previousFocusableElement.focus();

      await getPage().keyboard.press('Tab');

      expect(await isFocused(firstItem)).toBe(true);
    });

    it('moves beyond the tree when tab is pressed while part of the tree is focused', async function() {
      const [tree, firstItem] = await waitAndGetElements(
              collapsibleExampleSelector,
              `${collapsibleExampleSelector} .nx-tree__item`
          ),
          page = getPage();

      await firstItem.focus();

      await getPage().keyboard.press('Tab');
      const treeContainsFocusedEl = await page.evaluate(t => t.contains(document.activeElement), tree);

      expect(treeContainsFocusedEl).toBe(false);
    });

    it('focuses an item when that item is clicked', async function() {
      const [tree, itemOutsideTree] = await waitAndGetElements(
              collapsibleExampleSelector,
              collapsibleExamplePreviousFocusableElementSelector
          ),
          [root, cat1, videos] = await Promise.all([
            itemWithText(tree, '/'),
            itemWithText(tree, 'cat1.jpg'),
            itemWithText(tree, 'videos')
          ]),
          [rootClickTarget, cat1ClickTarget, videosClickTarget] = await Promise.all([
            clickTarget(root),
            clickTarget(cat1),
            clickTarget(videos)
          ]);

      await cat1ClickTarget.click();
      expect(await isFocused(cat1)).toBe(true);

      await rootClickTarget.click();
      expect(await isFocused(root)).toBe(true);

      await itemOutsideTree.click();
      expect(await tree.evaluate(t => t.contains(document.activeElement))).toBe(false);

      await videosClickTarget.click();
      expect(await isFocused(videos)).toBe(true);
    });

    it('moves to the next visible tree item when down is pressed', async function() {
      const [tree] = await waitAndGetElements(collapsibleExampleSelector),
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
          ]),
          page = getPage();

      // collapse the images subtree, and then reset the focus at the top before testing keynav
      await imagesCollapse.click();
      await rootClick.click();

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(srv)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(ftp)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(http)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(cats)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(indexHtml)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(images)).toBe(true);

      // images children do not get focused since they are collapsed

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(videos)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(boxesWebm)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(cucumberWebm)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(keyboard)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(keyboard1)).toBe(true);

      await page.keyboard.press('ArrowDown');
      expect(await isFocused(keyboard2)).toBe(true);
    });

    it('moves to the previous visible tree item when up is pressed', async function() {
      const [tree] = await waitAndGetElements(collapsibleExampleSelector),
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
          ]),
          page = getPage();

      await keyboard2Click.click();
      expect(await isFocused(keyboard2)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(keyboard1)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(keyboard)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cucumberWebm)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(boxesWebm)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(videos)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cat5000)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cat3)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cat2)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cat1)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(images)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(indexHtml)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(cats)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(http)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(ftp)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(srv)).toBe(true);

      await page.keyboard.press('ArrowUp');
      expect(await isFocused(root)).toBe(true);

      // trying to go beyond start has no effect
      await page.keyboard.press('ArrowUp');
      expect(await isFocused(root)).toBe(true);

      await imagesCollapse.click();
      await videosClick.click();

      // collapsed subtree is skipped
      await page.keyboard.press('ArrowUp');
      expect(await isFocused(images)).toBe(true);
    });

    describe('right arrow', function() {
      it('expands a collapsed, expandable tree item, without expanding previously collapsed subtrees',
          async function() {
            const [tree] = await waitAndGetElements(collapsibleExampleSelector),
                [root, images] = await Promise.all([
                  itemWithText(tree, '/'),
                  itemWithText(tree, 'images')
                ]),
                [rootCollapse, imagesCollapse] = await Promise.all([collapseTarget(root), collapseTarget(images)]),
                page = getPage();

            await imagesCollapse.click();
            await rootCollapse.click();
            expect(await isFocused(root)).toBe(true);
            expect(await hasClass(root, 'open')).toBe(false);

            await page.keyboard.press('ArrowRight');
            expect(await isFocused(root)).toBe(true);
            expect(await hasClass(root, 'open')).toBe(true);
            expect(await hasClass(images, 'open')).toBe(false);
          });

      it('moves to the first child of an expanded tree item', async function() {
        const [tree] = await waitAndGetElements(collapsibleExampleSelector),
            [root, srv] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'srv')
            ]),
            rootClick = await clickTarget(root),
            page = getPage();

        await rootClick.click();
        expect(await isFocused(root)).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);

        await page.keyboard.press('ArrowRight');
        expect(await isFocused(srv)).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
      });

      it('moves to the first child of an non-collapsible tree item', async function() {
        const [tree] = await waitAndGetElements(nonCollapsibleExampleSelector),
            [root, bin] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'bin')
            ]),
            rootClick = await clickTarget(root),
            page = getPage();

        await rootClick.click();
        expect(await isFocused(root)).toBe(true);

        await page.keyboard.press('ArrowRight');
        expect(await isFocused(bin)).toBe(true);
      });

      it('does nothing on a leaf node tree item', async function() {
        const [tree] = await waitAndGetElements(nonCollapsibleExampleSelector),
            cat1 = await itemWithText(tree, 'cat1.jpg'),
            cat1Click = await clickTarget(cat1),
            page = getPage();

        await cat1Click.click();
        expect(await isFocused(cat1)).toBe(true);

        await page.keyboard.press('ArrowRight');
        expect(await isFocused(cat1)).toBe(true);
      });
    });

    describe('left arrow', function() {
      it('collapses an expanded, collapsible tree item, without affecting collapse state of subtrees',
          async function() {
            const [tree] = await waitAndGetElements(collapsibleExampleSelector),
                [root, images, videos] = await Promise.all([
                  itemWithText(tree, '/'),
                  itemWithText(tree, 'images'),
                  itemWithText(tree, 'videos')
                ]),
                [imagesCollapse, rootClick] = await Promise.all([
                  collapseTarget(images),
                  clickTarget(root)
                ]),
                page = getPage();

            await imagesCollapse.click();
            await rootClick.click();
            expect(await isFocused(root)).toBe(true);
            expect(await hasClass(root, 'open')).toBe(true);

            await page.keyboard.press('ArrowLeft');
            expect(await isFocused(root)).toBe(true);
            expect(await hasClass(root, 'open')).toBe(false);

            await page.keyboard.press('ArrowRight');
            expect(await isFocused(root)).toBe(true);
            expect(await hasClass(root, 'open')).toBe(true);
            expect(await hasClass(images, 'open')).toBe(false);
            expect(await hasClass(videos, 'open')).toBe(true);
          });

      it('moves to the parent of a collapsed tree item', async function() {
        const [tree] = await waitAndGetElements(collapsibleExampleSelector),
            [root, srv] = await Promise.all([
              itemWithText(tree, '/'),
              itemWithText(tree, 'srv')
            ]),
            srvCollapse = await collapseTarget(srv),
            page = getPage();

        await srvCollapse.click();
        expect(await isFocused(srv)).toBe(true);
        expect(await hasClass(srv, 'open')).toBe(false);

        await page.keyboard.press('ArrowLeft');
        expect(await isFocused(root)).toBe(true);
        expect(await hasClass(root, 'open')).toBe(true);
        expect(await hasClass(srv, 'open')).toBe(false);
      });

      it('moves to the parent of a non-collapsible tree item', async function() {
        const [tree] = await waitAndGetElements(collapsibleExampleSelector),
            [images, cat1] = await Promise.all([
              itemWithText(tree, 'images'),
              itemWithText(tree, 'cat1.jpg')
            ]),
            cat1Click = await clickTarget(cat1),
            page = getPage();

        await cat1Click.click();
        expect(await isFocused(cat1)).toBe(true);

        await page.keyboard.press('ArrowLeft');
        expect(await isFocused(images)).toBe(true);
        expect(await hasClass(images, 'open')).toBe(true);
      });

      it('does nothing on a top-level collapsed tree item', async function() {
        const [tree] = await waitAndGetElements(collapsibleExampleSelector),
            root = await itemWithText(tree, '/'),
            rootCollapse = await collapseTarget(root),
            page = getPage();

        await rootCollapse.click();
        expect(await isFocused(root)).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);

        await page.keyboard.press('ArrowLeft');
        expect(await isFocused(root)).toBe(true);
        expect(await hasClass(root, 'open')).toBe(false);
      });

      it('does nothing on a top-level non-collapsible tree item', async function() {
        const [tree] = await waitAndGetElements(collapsibleExampleSelector),
            root = await itemWithText(tree, '/'),
            rootClick = await clickTarget(root),
            page = getPage();

        await rootClick.click();
        expect(await isFocused(root)).toBe(true);

        await page.keyboard.press('ArrowLeft');
        expect(await isFocused(root)).toBe(true);
      });
    });

    it('goes to the first element in the tree when Home is pressed', async function() {
      const [tree] = await waitAndGetElements(collapsibleMultiTopExampleSelector),
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
          ]),
          page = getPage();

      await manitobaClick.click();
      expect(await isFocused(manitoba)).toBe(true);

      await page.keyboard.press('Home');
      expect(await isFocused(provinces)).toBe(true);
      expect(await hasClass(provinces, 'open')).toBe(true);

      await nunavutClick.click();

      await page.keyboard.press('Home');
      expect(await isFocused(provinces)).toBe(true);

      await page.keyboard.press('Home');
      expect(await isFocused(provinces)).toBe(true);

      await territoriesClick.click();

      await page.keyboard.press('Home');
      expect(await isFocused(provinces)).toBe(true);

      await provincesCollapse.click();
      await territoriesClick.click();

      await page.keyboard.press('Home');
      expect(await isFocused(provinces)).toBe(true);
    });

    it('goes to the last visible element in the tree when End is pressed', async function() {
      const [tree] = await waitAndGetElements(collapsibleMultiTopExampleSelector),
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
          ]),
          page = getPage();

      await manitobaClick.click();
      expect(await isFocused(manitoba)).toBe(true);

      await page.keyboard.press('End');
      expect(await isFocused(nunavut)).toBe(true);
      expect(await hasClass(provinces, 'open')).toBe(true);
      expect(await hasClass(territories, 'open')).toBe(true);

      await provincesClick.click();

      await page.keyboard.press('End');
      expect(await isFocused(nunavut)).toBe(true);

      await page.keyboard.press('End');
      expect(await isFocused(nunavut)).toBe(true);

      await territoriesClick.click();

      await page.keyboard.press('End');
      expect(await isFocused(nunavut)).toBe(true);

      await yukonClick.click();

      await page.keyboard.press('End');
      expect(await isFocused(nunavut)).toBe(true);

      await territoriesCollapse.click();
      expect(await hasClass(territories, 'open')).toBe(false);

      await manitobaClick.click();

      await page.keyboard.press('End');
      expect(await isFocused(territories)).toBe(true);
      expect(await hasClass(territories, 'open')).toBe(false);
    });

    it('remembers which item in the tree was focused when tab takes focus away and back again', async function() {
      const [tree] = await waitAndGetElements(collapsibleMultiTopExampleSelector),
          manitoba = await itemWithText(tree, 'Manitoba'),
          manitobaClick = await clickTarget(manitoba),
          page = getPage();

      await manitobaClick.click();
      expect(await isFocused(manitoba)).toBe(true);

      await page.keyboard.press('Tab');

      expect(await tree.evaluate(t => t.contains(document.activeElement))).toBe(false);

      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');
      expect(await isFocused(manitoba)).toBe(true);
    });

    it('activates the item\'s link and does not change collapse state on Enter', async function() {
      const [tree] = await waitAndGetElements(collapsibleExampleSelector),
          [images, cat1] = await Promise.all([
            itemWithText(tree, 'images'),
            itemWithText(tree, 'cat1.jpg')
          ]),
          [cat1Click, imagesClick] = await Promise.all([clickTarget(cat1), clickTarget(images)]),
          page = getPage();

      await cat1Click.click();
      expect(await isFocused(cat1)).toBe(true);

      const sawPopup = new Promise(resolve => {
        page.once('popup', newTab => {
          newTab.close().then(resolve);
        });
      });

      // this is expected to open the link in a new tab
      await page.keyboard.press('Enter');
      await sawPopup;

      expect(await hasClass(images, 'open')).toBe(true);
      await imagesClick.click();

      const sawSecondPopup = new Promise(resolve => {
        page.once('popup', newTab => {
          newTab.close().then(resolve);
        });
      });

      await page.keyboard.press('Enter');
      await sawSecondPopup;

      expect(await hasClass(images, 'open')).toBe(true);
    });

    it('does nothing when enter is pressed on an item without interactive content', async function() {
      const [tree] = await waitAndGetElements(collapsibleExampleSelector),
          keyboard = await itemWithText(tree, 'keyboard'),
          keyboardClick = await clickTarget(keyboard),
          page = getPage();

      await keyboardClick.click();
      expect(await isFocused(keyboard)).toBe(true);
      expect(await hasClass(keyboard, 'open')).toBe(true);

      await page.keyboard.press('Enter');

      // no change
      expect(await isFocused(keyboard)).toBe(true);
      expect(await hasClass(keyboard, 'open')).toBe(true);
    });
  });

  it('passes a11y checks', a11yTest());
});
