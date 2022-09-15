/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

function expectSameElement(page, e1, e2) {
  expect(page.evaluate((e1, e2) => e1 === e2, e1, e2)).toBe(true);
}

describe('NxScrollRender', function() {
  const { waitAndGetElements, wait, checkScreenshot, getPage } = setupBrowser('#/pages/Scroll Render');

  const simpleExample = '#nx-scroll-render-example .nx-scrollable',
      noReuseExample = '#nx-scroll-render-no-reuse-example .nx-scrollable',
      unfilledExample = '#nx-scroll-render-unfilled-example .nx-scrollable',
      emptyExample = '#nx-scroll-render-empty-example .nx-scrollable',
      emptyListExample = '#nx-scroll-render-empty-list-example .nx-scrollable';

  describe('when used on an empty container', function() {
    it('does nothing', async function() {
      const [container] = await waitAndGetElements(emptyExample);

      expect(await container.$$('*')).toHaveLength(0);
    });
  });

  describe('when used on an empty NxList', function() {
    it('does nothing and allows the empty element to render', async function() {
      const [container] = await waitAndGetElements(emptyListExample),
          children = await container.$$(':scope > *');

      expect(children).toHaveLength(1);
      expect(await children[0].evaluate(e => e.textContent)).toBe('No Items.');

      await checkScreenshot(container);
    });
  });

  describe('when used on a container that isn\'t currently scrolling', function() {
    it('does nothing', async function() {
      const [container] = await waitAndGetElements(unfilledExample),
          children = await container.$$(':scope > *');

      expect(children).toHaveLength(6);
      expect(await container.evaluate(e => e.scrollHeight === e.clientHeight)).toBe(true);

      await checkScreenshot(container);
    });
  });

  function scrollTests(selector) {
    beforeEach(async function() {
      // give layout time to settle
      await wait(500);
    });

    it('starts scrolled to the top, with the first elements in view', async function() {
      const [container] = await waitAndGetElements(selector);

      expect(await container.evaluate(e => e.scrollTop)).toBe(0);

      await checkScreenshot(container);
    });

    it('only renders the visible elements plus two more and spacers', async function() {
      const [container] = await waitAndGetElements(selector),
          children = await container.$$(':scope > *');

      // Just barely 8 children are visble, plus two more plus the spacers
      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);
        expect(await children[i].evaluate(e => e.textContent)).toBe(i.toString());
      }
    });

    it('only renders visible elements after scrolling down', async function() {
      const [container] = await waitAndGetElements(selector);

      await container.evaluate(e => e.scrollTop = 300);

      let children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        // first rendered child at this point in scrolling should be "5"
        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 4).toString());
      }

      await checkScreenshot();

      await container.evaluate(e => e.scrollTop = 1234);

      children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        // first rendered child at this point in scrolling should be "21"
        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 20).toString());
      }

      await checkScreenshot();

      await container.evaluate(e => e.scrollTop = 406936);

      children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 7138).toString());
      }

      await checkScreenshot();

      // Not exact, just scroll all the way down
      await container.evaluate(e => e.scrollTop = 1000000);

      children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 9989).toString());
      }

      await checkScreenshot();
    });

    it('only renders visible elements after scrolling up', async function() {
      const [container] = await waitAndGetElements(selector);

      await container.evaluate(e => e.scrollTop = 10000000);

      let children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 9889).toString());
      }

      await checkScreenshot();

      await container.evaluate(e => e.scrollTop = 1234);

      children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        // first rendered child at this point in scrolling should be "21"
        expect(await children[i].evaluate(e => e.textContent)).toBe((i + 20).toString());
      }

      await checkScreenshot();

      await container.evaluate(e => e.scrollTop = 0);

      children = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      expect(await children[0].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);
      expect(await children[11].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(true);

      for (let i = 1; i < children.length - 1; i++) {
        expect(await children[i].evaluate(e => e.classList.contains('nx-scroll-render__spacer'))).toBe(false);
        expect(await children[i].evaluate(e => e.classList.contains('nx-list__item'))).toBe(true);

        expect(await children[i].evaluate(e => e.textContent)).toBe(i.toString());
      }

      await checkScreenshot();
    });
  }

  describe('when used on a container with lots of scrolling children', function() {
    scrollTests(simpleExample);

    it('reuses the same elements after scrolling', async function() {
      const [container] = await waitAndGetElements(simpleExample),
          initialChildren = await container.$$(':scope > *');

      await container.evaluate(e => e.scrollTop = 300);

      const childrenAfterScroll = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      // spacers should be the same elements
      expectSameElement(getPage(), initialChildren[0], childrenAfterScroll[0]);
      expectSameElement(getPage(), initialChildren[11], childrenAfterScroll[11]);

      for (let i = 5; i < childrenAfterScroll.length - 1; i++) {
        expect(initialChildren[i]).toBe(childrenAfterScroll[i - 4]);
      }

      for (let i = 1; i < 5; i++) {
        expect(initialChildren[i]).toBe(childrenAfterScroll[i + 5]);
        expect(childrenAfterScroll[i + 5].evaluate(e => e.textContent)).toBe((i + 5).toString());
      }

      await container.evaluate(e => e.scrollTop = 1000000);

      const childrenAtBottom = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      // spacers should be the same elements
      expectSameElement(getPage(), initialChildren[0], childrenAfterScroll[0]);
      expectSameElement(getPage(), initialChildren[11], childrenAfterScroll[11]);

      for (let i = 1; i < childrenAtBottom.length - 1; i++) {
        expect(initialChildren[i]).toBe(childrenAtBottom[i]);
        expect(childrenAtBottom[i + 5].evaluate(e => e.textContent)).toBe((i + 9990).toString());
      }
    });
  });

  describe('when used on a container with lots of scrolling children and reuseChildren set to false', function() {
    scrollTests(noReuseExample);

    it('does not reuse the same elements after scrolling except for the spacers', async function() {
      const [container] = await waitAndGetElements(noReuseExample),
          page = getPage(),
          initialChildren = await container.$$(':scope > *');

      await container.evaluate(e => e.scrollTop = 300);

      const childrenAfterScroll = await container.$$(':scope > *');

      expect(childrenAfterScroll.length).toBe(12);

      // spacers should be the same elements
      expectSameElement(getPage(), initialChildren[0], childrenAfterScroll[0]);
      expectSameElement(getPage(), initialChildren[11], childrenAfterScroll[11]);

      for (let i = 5; i < childrenAfterScroll.length - 1; i++) {
        expect(initialChildren).not.toContain(childrenAfterScroll[i]);
      }

      for (let i = 1; i < 5; i++) {
        expect(initialChildren[i + 5]).toBe(childrenAfterScroll[i]);
      }

      await container.evaluate(e => e.scrollTop = 1000000);

      const childrenAtBottom = await container.$$(':scope > *');

      expect(children.length).toBe(12);

      // spacers should be the same elements
      expectSameElement(getPage(), initialChildren[0], childrenAfterScroll[0]);
      expectSameElement(getPage(), initialChildren[11], childrenAfterScroll[11]);

      for (let i = 1; i < childrenAtBottom.length - 1; i++) {
        expect(initialChildren).not.toContain(childrenAtBottom[i]);
      }
    });
  });
});
