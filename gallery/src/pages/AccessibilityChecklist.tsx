/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import { NxP, NxH3, NxH4, NxList, NxTextLink } from '@sonatype/react-shared-components';

const Accessibility = () =>
  <GalleryTile title="WCAG Accessibility UX Checklist">
    <NxP>
      Accessibility UX checklist to serve as a method for designers and developers to assess the WCAG compliance of
      their work.
    </NxP>
    <NxP>
      WCAG 2.1 Verification – 116 Questions | Cumulative list
    </NxP>
    <NxH3>
      1. Perceivable
    </NxH3>
    <NxP>
      <em>
        Information and user interface components must be presentable to users in ways they can perceive.
      </em>
    </NxP>
    <NxH4>
      1.1 Text alternatives- Provide text alternatives for any non-text content so that it can be changed into other
      forms people need, such as large print, braille, speech, symbols or simpler language.
    </NxH4>
    <NxList bulleted>
      <NxList.Item className="level-a">
        Have we provided “alt text” alternatives for all images and data visualizations to a degree that information is
        not lost?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided “alt text” alternatives for all graphics like icons?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
          Level A
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      1.2 Time-based Media- Provide alternatives for time-based media [such as video, sound, slideshows, etc.]
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Have we provided a transcript of prerecorded audio and video recordings?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided captions and descriptions for prerecorded audio and videos?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are live captions available for live audio and video recordings?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#captions-live">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided audio description which describes in real-time the contents of all video recordings?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we have a video recording of an ASL interpreter translating our pre recorded media?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided an audio description of the prerecorded media that also includes implicit context that may not
        be understood through a language translation alone?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided a transcript or equivalent version of live video content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      1.3 Adaptable- Create content that can be presented in different ways without losing the integrity and context
      of the content.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Can we provide a simpler layout without losing information or structure?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111%2C128%2C133#adaptable">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we included a text description of our content that conveys implicit tone and meaning, even if it is not
        explicitly stated within that content?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we made the correct order of consuming our content obvious if the order of content is essential to
        understanding it?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Does the sequence of information as we reveal it make sense if we went through it in order?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we made sure to not use physical characteristics like color or location to explain how to accomplish a
        task?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we allow users to view our content in both landscape and portrait mode without distortion (unless one way or
        the other is essential)?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#orientation">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we appropriately labeled our UI components so autofill can be used correctly?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we labeled input fields to communicate what information users can enter and why?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Does our markup match what the UI element is so that support devices can apply the user’s customized
        preferences?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      1.4 Distinguishable- Make it easier for users to see and hear content including separating
      foreground from background.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Can users tell the difference between the foreground and background of content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we made sure that color is not the only way that we convey information in our content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can all normal text colors be differentiated from their background color at a
        <strong>
          4.5:1
        </strong>
        ratio ? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can all large text colors be differentiated from their background color at a
        <strong>
          3:1
        </strong>
        ratio?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can all UI/graphic colors be differentiated from their background color at a
        <strong>
          3:1
        </strong>
        ratio (unless they are disabled or logos)? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Do all page elements render legibly when zoomed in at
        <strong>
          200%
        </strong>
        ? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Have we made sure not to rely on images alone to share information (unless it is essential)?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can all normal text colors be differentiated from their background color at a
        <strong>
          7:1
        </strong>
        ratio?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can all large text colors be differentiated from their background color at a
        <strong>
          4.5:1
        </strong>
        ratio?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can all UI/graphic colors be differentiated from their background color at a
        <strong>
          3:1
        </strong>
        ratio (unless they are disabled or logos)? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can voices in audio be heard clearly and easily distinguished from background noise?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        If we have included a block of text, have we given the user the ability to customize how they view it (color,
        alignment, line spacing, etc)? ( Level AAA )
      </NxList.Item>
      <NxList.Item>
        Have we only used images of text (without alt text) for decoration, not sharing content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we made sure that a vertical scroll bar is not needed until we exceed
        <strong>
          320px
        </strong>
        and a horizontal scroll bar is not needed until we exceed
        <strong>
          256px
        </strong>
        ? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can our content be viewed and understood without issues if the line height is
        <strong>
          1.5
        </strong>
        bigger than the font size? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can our content be viewed and understood without issues if the space between each line of text is at least
        double the font size? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can our content be viewed and understood without issues if the space between paragraphs is at least double the
        font size? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can our content be viewed and understood without issues if the space between letters is at least
        <strong>
          0.12
        </strong>
        times bigger than the font size? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Can our content be viewed and understood without issues if the space between words is at least
        <strong>
          0.16
        </strong>
        times bigger than the font size? ( Level AA )
      </NxList.Item>
      <NxList.Item>
        Are our UI components named as follows and are these states obvious to assistive devices?
      </NxList.Item>
      <NxList.Item>
        <strong>
          Default
        </strong>
      </NxList.Item>
      <NxList.Item>
        <strong>
          Inactive
        </strong>
      </NxList.Item>
      <NxList.Item>
        <strong>
          Focus
        </strong>
      </NxList.Item>
      <NxList.Item>
        <strong>
          Disabled
        </strong>
      </NxList.Item>
      <NxList.Item>
        <strong>
          Loading
        </strong>
      </NxList.Item>
      <NxList.Item>
        <strong>
          Error
        </strong>
      </NxList.Item>
    </NxList>
    <NxH3>
      2. Operable
    </NxH3>
    <NxP>
      <em>
        User interface components and navigation must be operable.
      </em>
    </NxP>
    <NxH4>
      2.1 Keyboard Only- Make all functionality available from a keyboard.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Can users use a keyboard to access all content (as long as the path to get there is not important)?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can users navigate away from focused content using only a keyboard without getting stuck?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can users use a keyboard to access all content no matter what?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give the user the ability to turn hotkey shortcuts on and off?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do keyboard hotkeys and standard shortcuts work properly within the interface?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      2.2 Enough Time- Provide users enough time to read and use content.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Can users adjust timing (re: slideshows, automated-scrolling, etc) if needed?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are we giving users the ability to pause and restart automated content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give the user the ability to turn off motion animations if they start automatically?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give users the ability to turn off motion animations if they last for more than
        <strong>
          5
        </strong>
        seconds?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give users the ability to stop or pause updates that begin automatically?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give users the ability to signal that they need more time before a timeout?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we allow users to turn off timeouts unless they are necessary to security?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Is timing completely irrelevant for the user to fully engage with our content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we only interrupt users from what they were doing in an emergency?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give the user the ability to start where they left off after reauthenticating?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
        ***i might have made this the wrong level will correct
      </NxList.Item>
      <NxList.Item>
        Do we preserve data as it was when the user is automatically logged out?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      2.3 Seizures and Physical Reactions- Do not design content in a way that is known to cause seizures or physical
      reactions.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Have we made sure none of our content blinks or flashes more than
        <strong>
          3
        </strong>
        times per second? ( Level A /
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we given users the ability to turn off any animations that start as soon as they interact with them?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      2.4 Navigable- Provide ways to help users navigate, find content, and determine where they are.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Can we give redundancy cues and/or structural markup that alerts users of duplicated content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do all pages have descriptive titles that differentiate them from others within navigation?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do all headings describe the purpose of the page?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Does the order of tabs and information presented to those using a keyboard make sense?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do all links read as clear descriptions of where they will navigate the user?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are there multiple ways to navigate to a page within the system?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do all labels clearly describe the topic or purpose of the content they are labeling?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do our labels use the exact same words as the content they are describing?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Is the focus indicator always available to those using a keyboard?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Can the user verify their location within the interface (re: “sitemap” navigation)?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do all links reveal their purpose to the user? ( Level AAA ) //
      </NxList.Item>
      <NxList.Item>
        Do all links give additional descriptions about what the link’s content entails?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we consistently used the correct order of header hierarchy throughout the interface?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      2.5 Input Modalities- Make it easier for users to operate functionality through various inputs beyond a keyboard.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Have we allowed the user to move their mouse in whatever pattern allows them to accomplish a task?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided an alternative to swiping and other pointer based gestures?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we prioritized the “release” click of the mouse for the user to take action?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are all buttons and graphic labels named as what they are? (re: “checkbox”, “notification,” etc)
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we given users the ability to adjust/turn off motion input sensing ? (re: shake to erase)
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are our click targets at least
        <strong>
          44px x 44px
        </strong>
        in size?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we enabled non-touch inputs even on devices where touch inputs are present?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH3>
      Understandable
    </NxH3>
    <NxP>
      <em>
        Information and the operation of the user interface must be understandable.
      </em>
    </NxP>
    <NxH4>
      3.1 Readable- Make text content readable and understandable.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Has a default human language been programmed into markup?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we labeled what language is being used and when it changes to adjust vernacular?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we labeled jargon and idioms within our content?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we offer a source that explains our abbreviations that's hosted internally or externally?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        - [ ] Have we presented content at a middle school reading level?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        If our content is very complex, have we provided additional supporting materials to help users understand it at
        a middle school reading level?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided a mechanism to support correct pronunciation of terms not widely known?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      3.2 Predictable- Make pages appear and operate in predictable ways.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Does content in a focus state remain exactly the same as when it’s in the default state?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Has the user been made aware that the interface will change when they input information prior to them doing so?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are UI page elements in a standard, consistent place within the page’s layout?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Is the sequence of those UI elements repeated consistently throughout the interface?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Is the page and site navigation always in the same location on each page?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are our icons used consistently in the same context across the interface?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are the UI elements consistent with the behavior of standard UI elements?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are we allowing the user to decide when to take action instead of automatically doing it for them?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give the user the ability to turn off all notifications until the end of the session?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
    </NxList>
    <NxH4>
      3.3 Input Assistance- Help users avoid and correct mistakes.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Do we alert users immediately with an error message as soon as an error is detected?
        <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we provided more than one cue that an error has occurred?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are all required form fields clearly indicated to the user?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are input fields always paired with directions that help the user decide what to enter?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do our alerts always include text, even if colors and/or graphics are also used in the notification?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level A
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Are our error messages as short and specific as possible?
      </NxList.Item>
      <NxList.Item>
        If an error is detected, have we offered a concise solution to fix the error?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we allowed users to review and correct their submissions before submitting them? (Especially with legal
        commitments and financial transactions)
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we give the user the ability to immediately undo a mistake in any situation?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Do we have a readily available system in place whenever a user needs help?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AAA
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        Have we created specific help text and options that allow the user to complete a task without losing track of
        where they are?
      </NxList.Item>
      <NxList.Item>
        Do we allow users to change between devices when interacting with content on multiple devices during the same
        session?
      </NxList.Item>
    </NxList>
    <NxH3>
      Robust
    </NxH3>
    <NxP>
      <em>
        Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive
        technologies.
      </em>
    </NxP>
    <NxH4>
      4.1 Compatible- Maximize compatibility with current and future user agents, including assistive technologies.
    </NxH4>
    <NxList bulleted>
      <NxList.Item>
        Does all content that uses a markup language have complete start and end tags? ( Level A )
      </NxList.Item>
      <NxList.Item>
        Does all of our markup include only one attribution (no duplicates)? ( Level A )
      </NxList.Item>
      <NxList.Item>
        Are all HTML elements correctly nested according to standard use?
      </NxList.Item>
      <NxList.Item>
        Can the name and role of all UI elements be easily detected by supportive technology? ( Level A )
      </NxList.Item>
      <NxList.Item>
        Can all of our status messages be automatically received and interpreted by supportive technology (even if they
        are not the user’s current focus)?
        <NxTextLink external href="/JenniKobylskiUX/WCAG-Accessibility-UX-Checklist/blob/main">
          Level AA
        </NxTextLink>
      </NxList.Item>
    </NxList>
  </GalleryTile>;

export default Accessibility;
