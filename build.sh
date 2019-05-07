#!/bin/bash

set -e
export NODE_OPTIONS=--max_old_space_size=4096
rm -rf apps
mkdir apps
cp index.html apps/index.html

applications=(`find . -maxdepth 2 -mindepth 2 -type f -iname 'package.json' -printf '%h\n'`)

for app in "${applications[@]}"
do
  echo $app
  rm -rf apps/$app
  mkdir apps/$app
  cd $app
  yarn
  yarn build
  cp -a ./build/. ../apps/$app
  cd ..
done

jsArray=[\"$( IFS=, ; echo "${applications[*]}" )\"]
jsArray="${jsArray//,/\",\"}"
jsArray="${jsArray//.\/}"
sed -i "s/@AppsToken/$jsArray/g" apps/index.html