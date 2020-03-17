<!--

    Copyright (c) 2019-present Sonatype, Inc.
    This program and the accompanying materials are made available under
    the terms of the Eclipse Public License 2.0 which accompanies this
    distribution and is available at https://www.eclipse.org/legal/epl-2.0/.

-->
To run the gallery, execute `npm start`. This will start webpack dev server which will automatically watch the
_gallery_ files for changes.  However, it will not watch the shared components files (ie anything from outside of
this directory). So you'll also want to either run `npm run build` first, from the ../lib/ directory, or run
`npm run watch` from that directory in parallel if you want to be able to make changes to the shared components
and see the results in the gallery.
