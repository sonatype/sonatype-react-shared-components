#!/bin/bash

if [ "$#" != "1" ]; then

  echo "Usage: ./.scripts/version_bump.sh major|minor|patch"
  exit -1
fi

BUMP=$1

pushd gallery
  npm version $BUMP
popd

pushd lib
  npm version $BUMP
popd