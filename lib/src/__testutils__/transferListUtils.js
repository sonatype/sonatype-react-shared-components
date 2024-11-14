/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
export function mockTransferListLayout() {
  const getHeight = (el: Element) => {
    const isContainer = el.classList.contains('nx-transfer-list__item-list'),
        isItem = el.classList.contains('nx-transfer-list__item'),
        height = isContainer ? 520 :
        isItem ? 40 :
        0;
    return height;
  };

  Element.prototype.getBoundingClientRect = jest.fn().mockImplementation(function(this: Element) {
    const height = getHeight(this),
        siblingItems = this.parentElement!.children,
        idx = Array.prototype.indexOf.call(siblingItems, this),
        top = 40 * idx;

    return {
      bottom: 0,
      height,
      left: 0,
      right: 0,
      top,
      width: 0
    } as DOMRect;
  });

  jest.spyOn(Element.prototype, 'clientHeight', 'get').mockImplementation(function(this: Element) {
    return getHeight(this);
  });
}
