/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { find } from 'ramda';
import React, { createContext, ReactNode, useEffect } from 'react';
import withClass from '../../util/withClass';

import './NxSkeletonLoader.scss';

export const SkeletonContext = createContext(false);

const ANIMATION_NAME = 'skeleton-animation';

// These two variables help globally synchronize skeleton loader animation state. Whenever a skeleton loader
// is present on the page, any additional skeleton loaders should synchronize with it. Once all skeleton loaders
// are removed, that synchronization state should be cleared so that a future skeleton loader added later will
// start its animation cleanly at the beginning and not based on the original skeleton loader's time
const activeSkeletonLoaders = new Set();
let animationStartTime: number | null = null;

/*
 * According to the spec, animations have an id property (that is presumably supposed
 * to be the CSS keyframe name) and not an animationName property. However, at the time of writing,
 * in at least Chrome and firefox the id for our animation is the empty string and an `animationName` property
 * contains the name of the CSS keyframes
 */
function isSkeletonAnimation(animation: Animation) {
  return animation.id === ANIMATION_NAME || (animation as { animationName?: string }).animationName === ANIMATION_NAME;
}

function _NxSkeletonLoader({ children }: { children: ReactNode }) {
  useEffect(() => {
    // a unique object to identify this NxSkeletonLoader instance in the activeSkeletonLoaders set
    const instance = {};

    function handleAnimationStart({ animationName, target }: AnimationEvent) {
      if (animationName === ANIMATION_NAME) {
        const animation = target instanceof Element && find(isSkeletonAnimation, target.getAnimations());

        if (animation) {
          if (animationStartTime) {
            animation.startTime = animationStartTime;
          }
          else {
            animationStartTime = animation.startTime;
          }
        }
      }
    }

    if (!activeSkeletonLoaders.size) {
      window.addEventListener('animationstart', handleAnimationStart);
    }

    activeSkeletonLoaders.add(instance);

    return () => {
      activeSkeletonLoaders.delete(instance);
      if (!activeSkeletonLoaders.size) {
        animationStartTime = null;
        window.removeEventListener('animationstart', handleAnimationStart);
      }
    };
  }, []);

  return (
    <div className="nx-skeleton-loader" aria-busy="true">
      <div className="nx-skeleton-loader__status" role="status">Loading…</div>
      <SkeletonContext.Provider value={true}>{children}</SkeletonContext.Provider>
    </div>
  );
}

const Text = withClass('span', 'nx-skeleton-loader__text');

function MultiLineText() {
  return (
    <span className="nx-skeleton-loader__multiline-text">
      <NxSkeletonLoader.Text />
      <NxSkeletonLoader.Text />
      <NxSkeletonLoader.Text />
    </span>
  );
}

const NxSkeletonLoader = Object.assign(_NxSkeletonLoader, {
  Block: withClass('div', 'nx-skeleton-loader__block'),
  MultiLineText,
  Text
});

export default NxSkeletonLoader;
