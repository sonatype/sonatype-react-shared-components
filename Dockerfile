#
# Copyright (c) 2019-present Sonatype, Inc.
# This program and the accompanying materials are made available under
# the terms of the Eclipse Public License 2.0 which accompanies this
# distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
#

FROM --platform=linux/arm64/v8 docker-all.repo.sonatype.com/node:16-bullseye

RUN apt-get update && \
    apt-get autoremove -y && apt-get clean -y && \
    apt-get install jq -y && \
    apt-get install chromium libatk-bridge2.0-0 libxkbcommon0 libgbm1 -y

RUN useradd -u 1002 -g 100 jenkins
RUN mkdir -p /home/jenkins/.npm
RUN chown -R jenkins /home/jenkins/

WORKDIR /home/jenkins
COPY . .
WORKDIR /home/jenkins/gallery 
RUN yarn install

WORKDIR /home/jenkins
COPY . .
WORKDIR /home/jenkins/lib
RUN yarn install