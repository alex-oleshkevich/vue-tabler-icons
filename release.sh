#!/bin/bash

yarn install
yarn upgrade @tabler/icons

UPSTREAM_VERSION=$(grep -o  -P '(?<=icons-).*(?=.tgz)' yarn.lock)
if git status | grep yarn.lock; then
    echo "Icons updated to $UPSTREAM_VERSION"
else
    echo 'Icons up to date.'
    exit
fi

# drop any unwanted changes to package.json
git checkout -- package.json

yarn version --minor
PACKAGE_VERSION=$(grep -o  -P '(?<=version": ").*(?=")' package.json)
MESSAGE="Release $PACKAGE_VERSION (sync with @tabler/icons = $UPSTREAM_VERSION)"

git add -A
git commit -a -m "$MESSAGE"
git tag "v$PACKAGE_VERSION"
git push
git push --tags
