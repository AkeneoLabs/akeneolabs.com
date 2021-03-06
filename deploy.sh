#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'akeneolabs.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:akeneolabs/akeneolabs.github.io.git master:gh-pages

cd -