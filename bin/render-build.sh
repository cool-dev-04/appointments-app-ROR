#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install

./bin/rails db:create
./bin/rails db:migrate

yarn build:css
yarn build

./bin/rails assets:precompile
./bin/rails assets:clean
