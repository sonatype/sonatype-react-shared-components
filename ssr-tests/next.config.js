/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: ['@sonatype/react-shared-components'],

    // Next 16 blocks dev-server resources (such as the HMR websocket) requested from any origin other than
    // localhost. The tests run in a separate browser container which reaches the server at TEST_IP, so it has to
    // be allowed explicitly
    allowedDevOrigins: process.env.TEST_IP ? [process.env.TEST_IP] : []
};

module.exports = nextConfig;

