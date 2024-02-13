#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn policies set-version 3.4.1
yarn install --check-cache

./bin/rails db:create
./bin/rails db:migrate
./bin/rails db:seed

# yarn build:css
# yarn build

./bin/rails assets:precompile
./bin/rails assets:clean
