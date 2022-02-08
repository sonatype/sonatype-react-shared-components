<!--

    Copyright (c) 2019-present Sonatype, Inc.
    This program and the accompanying materials are made available under
    the terms of the Eclipse Public License 2.0 which accompanies this
    distribution and is available at https://www.eclipse.org/legal/epl-2.0/.

-->
This is a stripped down next.js app that is intended for testing that RSC components can support server-side-rendering
frameworks such as next.js. The app consists of a single page which should have at least basic usage of every
single RSC react component. A small test suite simply checks that that page renders without errors.

# Usage
To run the test page manually, run `yarn dev` after running the usual dependency installation commands (e.g. `yarn
install`).

To run the actual test suite, first a selenium server must be running on port 4444 and able to launch Chrome browser
instances. This is most easily accomplished via docker.  See the Jenkinsfile for a full-fledged setup, or consider the
following command which is adequate for creating a local test environment:

```
docker run --name selenium-chrome -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.141.59
```

When using docker, you must also set the `TEST_IP` environment variable to a non-localhost IP address for your local
system. This allows the Chrome instance within the docker container to reach out of the container to your local host
in order to connect to the next.js server.

Once eveything is set up, run `yarn test` to execute the test suite.
