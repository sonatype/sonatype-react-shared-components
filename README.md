<!--

    Copyright (c) 2019-present Sonatype, Inc.
    This program and the accompanying materials are made available under
    the terms of the Eclipse Public License 2.0 which accompanies this
    distribution and is available at https://www.eclipse.org/legal/epl-2.0/.

-->
# Sonatype's React Shared Components
This is the Sonatype shared library of React UI components and related JavaScript modules.
This repo builds an npm package exposing the shared components for use in other projects.  Additionally
this repo contains a "gallery" application which demonstrates the appropriate usage of the components as well
as Sonatype's standard CSS styles.

This library is not intended for direct public usage. It is intended for usage internally within Sonatype products, and
has been made open-source so that it may be used within Sonatype's other open-source products.

## Usage

This library is published to the main npm registry under the name `@sonatype/react-shared-components`, and can
be installed using typical package management commands, e.g.

```
yarn add @sonatype/react-shared-components
```

Once installed, most JavaScript exports from the library can be accessed directly from the module root, for instance
```
import { NxButton } from '@sonatype/react-shared-components';
```
See the [gallery](https://gallery.sonatype.dev/#/) for information on the available components and their usage.

RSC stylesheets are available in two forms. Consumers are encouraged to use SASS as part of their build process,
in which case the necessary RSC styles will be picked up automatically via the import structure within the library.
That is, each RSC component has a ES6 import referring to a scss file containing the necessary styles for that
component, and your build should be set up to consume those imports. Alternatively if not using SASS, the full set
of RSC styles is available in CSS form within the `react-shared-components.css` in the module root directory.


### Usage with Webpack and other module bundlers

RSC uses JavaScript imports (both ES6-style and commonjs-style) to refer to certain non-JavaScript files, so consuming
bundlers must be configured to handle those imports. In webpack, this would typically be accomplished by including the
`sass-loader` (and its related loaders) and the `file-loader`. See the configuration in the `gallery/webpack.config.js`
for a detailed, working example.

## Contributing

See the [contributing document](./.github/CONTRIBUTING.md) for details.

## Goals
* Use technologies that lend themselves to clear, stable, self-documenting APIs
  * Example: TypeScript

* Clearly document the usage of the components via API typings, code comments, and gallery examples

* Although the components are written in TypeScript, plain JavaScript projects should still receive every reasonable
  benefit.
  * Example: React propTypes allow runtime type checking for react component props.  In a fully TypeScript environment,
    this feature would be fairly redundant with TypeScript's compile-time type checking.  However, as the components
    may be used in non-TypeScript projects, react propType declarations should still be provided in addition to the
    TypeScript typings

* Export components in formats that are widely usable, as well as in formats that provide maximum benefit for projects
  built in similar technologies
  * Example: Components styles are written in scss, and the original scss files are to be included in the build output
    so that a consuming project may take full scss advantage of them.  However, a compiled CSS file for the entire
    library is also to be included in the output so that non-scss based projects can still easily pull in the component
    styles.
  * Example 2: Components are written in typescript but exported as JavaScript plus TS definition (.d.ts) files,
    allowing consuming projects to be written in either language

* Export components in a manner which primarily assumes the usage of an ES6 module system, and which works efficiently
  with such a system
  * Example: A project which only uses a single component from this repo should not have to jump through hoops to avoid
    building the entire library into their bundle

* The gallery's own infrastructure should serve as an example of how a react-based application may be set up

* Components should be written in a way that is architecturally flexible.  Particularly, components should be written
  to be stateless first and foremost, to allow their usage in Redux and similar workflows.  Once the stateless component
  is written, a stateful wrapper may also be written as a convenience for more traditional non-redux architectures.
  * Example: The base NxCheckbox component should not have a field that actually tracks whether it is checked and which
    gets flipped in response to user input.  It should simply render the checked state that it receives as a prop, and
    call a callback when it is toggled.  Then, a second component can be written as a stateful wrapper around the first
    which tracks the checked state and flips it in response to user input.  Consumers of this library would be free to
    use either implementation depending on their architectural needs.

* Components should generally be able to receive a `ref`, so that they can be used with things like the Material-UI
    tooltip library

* For components that have complex state needs, any reusable state management should be separated out into pure
  functions, exported separately, which are suitable for use in a redux reducer.  The stateful version of the component
  would then ideally be a wrapper around those same pure functions in conjunction with the stateless component

* Include highly reusable non-react code (such as redux utilities and validation handling strategies) as the need
  arises

* Import things where they are used, rather than in a single top-level imports file.  This allows consuming code to
  pull in modules individually, with the assurance that they will bring all of their dependencies with them.  This
  applies to both JS/TS files and SCSS files.

* Provide solid automated testing of the reusable components including unit tests and possibly visual tests of the
  gallery

## Build layout

The RSC code is split into two separate codebases: the library itself which lives in lib/, and the gallery, which
  lives in gallery/

### RSC library layout
(All paths here relative to lib/)

* Source code lives in src/.  Typescript components live within src/components
  * The main entrypoint for the library is src/index.ts (which compiles to index.js).  All react components
    are re-exported from this file.  Consuming projects should import the components here, not from their individual
    source files.

* Static assets live in src/assets, which is copied wholesale to dist/assets and thus included in the package

* scss files are also all copied into dist, preserving their directory structure and thus their relative paths to
  components, static assets, and each other. This facilitates a consuming project using its own scss build and
  provides a sane starting point for relative path references

* Icons are intended to be done using SVG, though an icon font would also work (the same way as any other static asset).
  SVG icons will be encapsulated as react components that render the icon's SVG nodes inline in the document. This
  provides maximum power to style the icons. The inline rendering may be mildly duplicative, compared to a separate SVG
  "sprite" in conjunction with SVG `<use>` tags, but the latter setup can't really be accomplished without making far
  more assumptions about the consuming project's tooling.
  * Font Awesome 5 provides icons via @fortawesome/react-fontawesome, @fortawesome/free-solid-svg-icons, and similar
    packages
  * Custom SVG icons can be converted to react components either manually or via tooling like
    [svgr](https://www.smooth-code.com/open-source/svgr/)
* Styles have the following directory structure
  * Component-specific stylesheets live alongside their respective component ts files
  * Non-emitting scss partials, such as files that only define variables and mixins, are in src/scss-shared.  Because
    they are non-emitting, these files can be imported freely and should be imported where needed (ie if you need a
    mixin in a given file, don't just assume it's already been imported elsewhere, go ahead and import it yourself)
  * Styles which form a foundation which other stylesheets assume is already in place go in src/base-styles.  Within
    this directory is a \_base.scss file which serves as a centralized import.  Any other files created in this
    directory should be imported by that file, and that file is then imported by index.ts so that any use of the library
    will pick it up
    * All "non-component" styles are also considered to be base styles, so that future components can make use of them
      without needing to re-arrange things
* A precompiled stylesheet including all of the styles is built as react-shared-components.css.  The build of this file
  is performed via webpack using an entrypoint of src/react-shared-components-css.ts, which has typescript imports of
  index.ts (in order to get the base and component styles).  URL references within react-shared-components.css are
  correct to its location within the built package relative to the things being referenced.

## Building

### Required Software
* Node 20.x
* yarn 1.22.x
* git-lfs for visual test snapshots. For the command line git client, git-lfs is a separate program which functions as a
plugin; for graphical git clients, git-lfs support is often built-in. To check whether your checkout used git-lfs
successfully, check whether the files within `gallery/visualtests/__image_snapshots__` are actual pngs as opposed to
stub text files.

### Installation of Dependencies
In the lib/ directory, run `yarn install`

### Build
For a one-time build, `yarn run build` in the lib/ directory.

When developing, you probably want to use `yarn run watch` instead.

## Typical Development Flow
Developing RSC components typically involves running the lib watch and the gallery simultaneously, enabling you to make
changes to the component code and to rapidly see the results within the local instance of the gallery. Running these two
processes simultaneously is typically accomplished using two terminals simultaneously. For a _thoroughly clean_ watch
(minimizing the risk of branch-switching problems), one might run the following two jobs:

In `lib`:
```
yarn clean && rm -rf node_modules && yarn install && yarn watch
```

In `gallery`:
```
yarn clean && rm -rf node_modules && yarn install && yarn start
```
If on Windows, adapt the syntax and `rm` command as necessary e.g.

In `lib`:
```
yarn clean; Remove-Item -Recurse -Force -Path .\node_modules; yarn install; yarn watch
```

In `gallery`:
```
yarn clean; Remove-Item -Recurse -Force -Path .\node_modules; yarn install; yarn start
```

## Running Unit Tests

Run the following commands in the lib/ directory

### Single run
`yarn run test`

### Watch in console
`yarn run test-watch`

### Watch in console, debug in browser

Jest runs in node, as opposed to in a browser like some other test setups. This makes debugging of tests
a little bit more difficult.

To debug the unit tests, take the following steps
* Run `yarn run test-watch-debug` in the console
* Go to `chrome://inspect` in Google Chrome
* Find and connect to the node process in Chrome by clicking Inspect in Chrome (this will open up a Chrome Dev Tools
window)
* When Dev Tools is first opened, it will be stopped at a breakpoint in Jest. Hit play and you will notice in your
console window that Jest is running the tests. Sometimes Jest outsmarts itself and does not automatically run the
tests, in which case you may have to hit 'a' in your console window to run the tests.
* Once the tests are done running the first time, you can find your test files in the dev tools file list, and then
debug as normal.  Be aware of the test filtering options in the console which can cut down on extraneous breakpoint
hits.

## Writing RTL Unit Test

We currently use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
our React components.

We also use [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) to provide custom DOM element matchers.

## Running Visual Tests

The visual tests use jest-image-snapshot to compare screenshots of the components to their expected state. This
setup is configured for an exact visual match, so the tests must be run on a consistent browser and operating system.
The cleanest way to do this is via Docker - specifically, to run the tests in a Docker environment identical to the one
which the CI system uses.

To test in a Docker environment, first [install Docker on your computer](https://docs.docker.com/get-docker/). Then, you
must either build or download the docker image within which to run the tests. Sonatype employees should use the image
available on docker-all.repo.sonatype.com, which is what the CI pipeline uses.  Using this identical build of the docker
image reduces issues with screenshots changing due to minor variations between browser versions. Within the top level
directory of the repository, log into Docker by running the following command. You may be asked to input credentials.

```
docker login docker-all.repo.sonatype.com
```

You can then execute the tests for both light mode (default) and dark mode by running the following command:

```
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn test
```

If you are not a Sonatype employee and thus don't have access to docker-all.repo.sonatype.com, or if you want to build
your own docker image for any other reason, you can build the image using the command below. The command below will
create an image and give it a name of "rsc-visualtesting". Be sure to run this command within the top level directory of
the repository. For non-Sonatype employees, you should edit the Dockerfile to point to the public `node` base image
instead of the copy hosted on Sonatype's infrastructure.

```
docker build -t rsc-visualtesting .
```

You can then run the visual tests within your docker image using the following command:
```
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins rsc-visualtesting yarn test
```

Visual testing may take more than 30 minutes, so let the tests run in the background. Note that the `yarn test` command
will (re-)install the gallery dependencies, ensuring that all dependencies are configured properly for execution within
the docker container rather than the host.

### Updating Visual Test Screenshots

If running the tests results in differences that are expected/intended based on new changes to the library, then the
baseline screenshots may be updated. To update light mode screenshots, run the following command:
```
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest -u
```

To update dark mode screenshots, run the following command:
```
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest-dark -u
```

The commands above ensure you update the screenshots within the Docker container. The updates need to be run within the
Docker container or an equivalent environment to ensure that the updated baselines match on CI. Note that updating
visual test screenshots take roughly the same amount of time as running the visual tests.

### Visual Test Stability on CI

Unfortunately we have been unable to lock down the visual test docker container construction to a specific version of
Chromium – it uses whichever version is current in the Debian repos at the time the docker image is created. This
changes over time, and in particular Jenkins rebuilds the docker image for each CI run, always using the latest
Chromium version. As a result of this, Chromium updates may periodically break the visual tests in one of two ways:
either the Chromium version will become incompatible with the puppeteer version, or the visual rendering will change
something and the snapshot comparisons will fail. When this happens, the puppeteer version and/or the snapshots must
be updated to be compatible with the new version of Chromium.

To sync your local docker Chromium version with the latest that Jenkins would use, re-run the `docker build` command
described above with the `--no-cache` option in order to have it re-execute the `apt-get install` command which installs
the current version of Chromium.

---

### Windows Users!!

For you seemingly rare Windows (Windows 11 to be precise) users, you have a couple options.

From simple command prompt

Run tests:
```
docker run --rm -it -w /home/jenkins/gallery -v %CD%:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn test
```

Update screenshots in light mode:
```
docker run --rm -it -w /home/jenkins/gallery -v %CD%:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest -u
```

Update screenshots in dark mode:
```
docker run --rm -it -w /home/jenkins/gallery -v %CD%:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest-dark -u
```

And from PowerShell

Run tests:
```
docker run --rm -it -w /home/jenkins/gallery -v $pwd\:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn test
```

Update screenshots in light mode:
```
docker run --rm -it -w /home/jenkins/gallery -v $pwd\:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest -u
```

Update screenshots in dark mode:
```
docker run --rm -it -w /home/jenkins/gallery -v $pwd\:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest-dark -u
```

---

## Component Gallery
You can view components in your browser by running the gallery.

### Installation
First, ensure the component library is built using `yarn run build` or `yarn run watch` from the lib/ dir. Then, from
gallery/, run `yarn install`.

### Running the Gallery
From gallery/, run `yarn start`.

To view the gallery, point your browser to `http://localhost:4043/`.

## Server-side Rendering Tests
The `ssr-tests` top-level directory contains a simple next.js project which tests that RSC components can be used
within next.js without causing server-side errors. Whenever a new component is created, these tests should be updated
to include that new component. See `ssr-tests/README.md` for details.

## Continuous Integration and Releases
This library has CI builds set up for both main and its dev branches. Builds of the main branch automatically get
released as new versions. As part of this, dev branch builds have enforcement that they must increment the version
number from what is on main - this way, when the branch is merged, a new release can be made _using the
human-specified semantic version from the branch_.

To increment the version on your branch, use the following command in the lib/ directory:
`yarn version --no-git-tag-version (--patch|--minor|--major)`.
This will ensure that the version number gets updated in all of the appropriate places (both package.json files and
both package-lock.json files). Do not create or push git tags for versions, as the main CI build does that.
