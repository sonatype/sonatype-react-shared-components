import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { find } from 'ramda';
import React, { HTMLAttributes, ReactNode, useEffect } from 'react';
import withClass from '../../util/withClass';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import SkeletonContext from './SkeletonContext';

import './NxSkeletonLoader.scss';

export { SkeletonContext };

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
  /*
   * Synchronize all skeleton animations
   */
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
      <div className="nx-skeleton-loader__status" role="status">Loading. Please Wait.</div>
      <SkeletonContext.Provider value={true}>
        <div className="nx-skeleton-loader__contents" aria-hidden="true">
          {children}
        </div>
      </SkeletonContext.Provider>
    </div>
  );
}

function MultiLineText() {
  return (
    <span className="nx-skeleton-loader__multiline-text">
      <NxSkeletonLoader.Text />
      <NxSkeletonLoader.Text />
      <NxSkeletonLoader.Text />
    </span>
  );
}

function Block({ icon, ...props }: { icon: IconProp } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="nx-skeleton-loader__block" { ...props }>
      { icon && <NxFontAwesomeIcon icon={icon} /> }
    </div>
  );
}

const NxSkeletonLoader = Object.assign(_NxSkeletonLoader, {
  Text: withClass('span', 'nx-skeleton-loader__text'),
  MultiLineText,
  Block
});

export default NxSkeletonLoader;
