#
# Copyright (c) 2019-present Sonatype, Inc.
# This program and the accompanying materials are made available under
# the terms of the Eclipse Public License 2.0 which accompanies this
# distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
#

FROM docker-all.repo.sonatype.com/node@sha256:dd04637efe3c13087c25a3e6049b6d607652edc71d25a9d4cd73e4b0e6a7faa0

RUN apt-get update && \
    apt-get autoremove -y && apt-get clean -y && \
    apt-get install jq -y && \
    apt-get install chromium=104.0.5112.79-1~deb11u1 chromium-common=104.0.5112.79-1~deb11u1 \
        libatk-bridge2.0-0 libxkbcommon0 libgbm1 -y

ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium

RUN useradd -u 1002 -g 100 jenkins
RUN mkdir -p /home/jenkins/.npm
RUN chown -R jenkins /home/jenkins/
