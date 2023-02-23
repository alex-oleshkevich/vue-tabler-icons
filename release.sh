#!/bin/bash
set -ex

yarn install
yarn upgrade @tabler/icons

UPSTREAM_VERSION=$(grep -o  -P '(?<=icons-).*(?=.tgz)' yarn.lock)
if git status | grep yarn.lock; then
    echo "Icons updated to $UPSTREAM_VERSION"
else
    echo 'Icons up to date.'
    exit
fi

# check it compiles
yarn build
yarn dist || exit 1

# drop any unwanted changes to package.json
git checkout -- package.json

yarn version --minor --no-git-tag-version
PACKAGE_VERSION=$(grep -o  -P '(?<=version": ").*(?=")' package.json)
MESSAGE="Release $PACKAGE_VERSION (sync with @tabler/icons v$UPSTREAM_VERSION)"
BRANCH="release-$PACKAGE_VERSION"
REPO=alex-oleshkevich/vue-tabler-icons

export GITHUB_TOKEN=
git checkout -b $BRANCH
git add -A
git commit -a -m "$MESSAGE"
git tag "v$PACKAGE_VERSION"
git push
git push --tags
gh pr create -a "@me" -B master -f -R $REPO -t "$MESSAGE"
git checkout master
